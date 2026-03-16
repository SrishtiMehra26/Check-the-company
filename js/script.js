// Improved client-side app: loads companies.json, renders clickable grid, search fixed,
// profile slides in from right. Expects companies.json in same folder.

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const companyGrid = document.getElementById('companyGrid');
const profilePanel = document.getElementById('profilePanel');
const profileContent = document.getElementById('profileContent');
const closePanel = document.getElementById('closePanel');

let companies = [];

// Load companies.json
async function loadCompanies(){
  try {
    const resp = await fetch('companies.json');
    if (!resp.ok) throw new Error('companies.json not found');
    companies = await resp.json();
  } catch (e) {
    console.error('Failed to load companies.json', e);
    companyGrid.innerHTML = `<div class="card">Error: Could not load <code>companies.json</code>. Make sure the file exists and you're using a static server (e.g. python -m http.server).</div>`;
    return;
  }
  renderGrid(companies);
}

// Render clickable grid
function renderGrid(list){
  companyGrid.innerHTML = '';
  if (!list.length) {
    companyGrid.innerHTML = `<div class="card muted">No companies found.</div>`;
    return;
  }
  list.forEach(c => {
    const tile = document.createElement('div');
    tile.className = 'tile';
    tile.dataset.id = c.id || c.name;
    tile.innerHTML = `
      <img loading="lazy" src="${c.logo || 'https://via.placeholder.com/80x80?text=No+Logo'}" alt="${escapeHtml(c.name)} logo" />
      <div>
        <div class="name">${escapeHtml(c.name)}</div>
        <div class="sector">${(c.core_business_areas || []).slice(0,2).join(' • ')}</div>
      </div>
    `;
    tile.onclick = () => openProfile(c);
    companyGrid.appendChild(tile);
  });
}

// Escape helper
function escapeHtml(s){ return (s || '') .replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;'); }

// Search / filter logic
function filterGrid(q){
  q = (q || '').trim().toLowerCase();
  if (!q) return renderGrid(companies);
  const filtered = companies.filter(c => {
    const name = (c.name || '').toLowerCase();
    const id = (c.id || '').toLowerCase();
    const sectors = (c.core_business_areas || []).join(' ').toLowerCase();
    return name.includes(q) || id.includes(q) || sectors.includes(q);
  });
  renderGrid(filtered);
  // If exactly 1 match, open it automatically
  if (filtered.length === 1) openProfile(filtered[0]);
}

// Open profile in panel
function openProfile(c){
  profileContent.innerHTML = profileHtml(c);
  profilePanel.classList.add('open');
  profilePanel.setAttribute('aria-hidden','false');
  // scroll top of panel
  profilePanel.scrollTop = 0;
}

// Close panel
function closeProfile(){
  profilePanel.classList.remove('open');
  profilePanel.setAttribute('aria-hidden','true');
}

// Build profile HTML
function profileHtml(c){
  const score = c.kununu_rating?.score ?? null;
  const reviews = c.kununu_rating?.reviews ?? 0;
  return `
    <div class="logo-large"><img src="${c.logo || 'https://via.placeholder.com/300x120?text=No+Logo'}" alt="${escapeHtml(c.name)} logo" /></div>
    <h2>${escapeHtml(c.name)}</h2>
    <div class="sub">${escapeHtml(c.headquarters || '')}</div>

    <div class="kununu"><div class="stars">${renderStars(score)}</div><div style="color:#64748b; margin-left:8px">${score ? score.toFixed(1) : 'N/A'} (${reviews} reviews)</div></div>

    ${c.website ? `<div style="margin-top:10px;"><a href="${c.website}" target="_blank" rel="noopener noreferrer">Visit official website ↗</a></div>` : ''}

    <div class="section">
      <h4>Core business areas</h4>
      <div class="pills">${(c.core_business_areas || []).map(x => `<span class="pill">${escapeHtml(x)}</span>`).join('')}</div>
    </div>

    <div class="section">
      <h4>Recent achievements</h4>
      ${(c.achievements || []).length ? `<ul>${c.achievements.map(a => `<li>${escapeHtml(a)}</li>`).join('')}</ul>` : `<div class="muted">No achievements listed.</div>`}
    </div>

    <div class="section">
      <h4>Locations</h4>
      ${(c.locations || []).length ? `<ul>${c.locations.map(l => `<li>${escapeHtml(l)}</li>`).join('')}</ul>` : `<div class="muted">No locations listed.</div>`}
    </div>

    <div class="section">
      <h4>Interview Preparation</h4>
      ${(c.interview_prep || []).length ? c.interview_prep.map((q,i) => `
        <div style="margin-bottom:10px">
          <strong>Q${i+1}:</strong> ${escapeHtml(q.q)}
          <div style="background:#eef2ff; padding:10px; border-radius:8px; margin-top:6px; color:#0b1220">${escapeHtml(q.recommended)}</div>
        </div>`).join('') : `<div class="muted">No interview tips available.</div>`}
    </div>

    <div class="section" id="quizArea">
      <h4>Quick Quiz</h4>
      <div id="quizContainer">${renderQuizInline(c)}</div>
    </div>
  `;
}

// Basic star rendering
function renderStars(score){
  if (!score) return '☆☆☆☆☆';
  const full = Math.round(Math.max(0, Math.min(5, score)));
  return '★'.repeat(full) + '☆'.repeat(5-full);
}

// Inline simple quiz (first question)
function renderQuizInline(c){
  const q = (c.quiz || [])[0];
  if (!q) return `<div class="muted">No quiz available.</div>`;
  return `<div style="font-weight:700">${escapeHtml(q.q)}</div>
    <div style="margin-top:8px">${q.choices.map((ch,idx) => `<button class="quiz-opt" data-cid="${escapeHtml(c.id)}" data-idx="${idx}" style="margin:6px 6px 0 0;padding:8px 10px;border-radius:8px;border:1px solid #e2e8f0;background:#fff">${escapeHtml(ch)}</button>`).join('')}</div>
    <div id="quizFeedback" style="margin-top:10px;color:#334155"></div>`;
}

// Hook quiz clicks (delegation)
document.addEventListener('click', (e) => {
  const opt = e.target.closest('.quiz-opt');
  if (!opt) return;
  const idx = Number(opt.dataset.idx);
  const cid = opt.dataset.cid;
  const company = companies.find(x => x.id === cid || x.name === cid);
  if (!company) return;
  const q = (company.quiz || [])[0];
  const feedback = document.getElementById('quizFeedback');
  if (!q) return;
  if (idx === q.correct) {
    feedback.textContent = 'Correct! ✅';
    feedback.style.color = '#059669';
  } else {
    feedback.textContent = `Not quite — correct answer: ${q.choices[q.correct]}`;
    feedback.style.color = '#dc2626';
  }
});

// Wire search input and button
searchInput.addEventListener('input', () => filterGrid(searchInput.value));
searchBtn.addEventListener('click', () => {
  const q = (searchInput.value || '').trim();
  if (!q) return;
  // If exact/fuzzy match to one company, open it; otherwise filter list
  const exact = companies.find(c => (c.name || '').toLowerCase() === q.toLowerCase() || (c.id || '').toLowerCase() === q.toLowerCase());
  if (exact) {
    openProfile(exact);
    // highlight tile (scroll into view)
    const tile = document.querySelector(`.tile[data-id="${exact.id || exact.name}"]`);
    if (tile) tile.scrollIntoView({behavior:'smooth', block:'center'});
  } else {
    const results = companies.filter(c => (c.name||'').toLowerCase().includes(q.toLowerCase()));
    if (results.length === 1) openProfile(results[0]);
    else filterGrid(q);
  }
});

// Allow Enter key to trigger search
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') searchBtn.click();
});

// Close panel handler
closePanel.addEventListener('click', closeProfile);

// Close panel when clicking outside on small screens
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeProfile(); });

// init
loadCompanies();
