// Main client-side logic
// Loads companies.json, handles search, renders profile, interview prep, and quiz.

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const suggestionsEl = document.getElementById('suggestions');
const popularList = document.getElementById('popularList');
const profileArea = document.getElementById('profileArea');

let companies = []; // loaded dataset

// Try to fetch companies.json; display message if not present.
async function loadCompanies() {
  try {
    const resp = await fetch('companies.json');
    if (!resp.ok) throw new Error('companies.json not found');
    companies = await resp.json();
  } catch (e) {
    console.error('Could not fetch companies.json. Make sure the file is present and served by a static server.', e);
    profileArea.innerHTML = `<div class="card"><strong>Error:</strong> Could not load companies.json. Make sure you serve the files with a static server (e.g., python -m http.server) and companies.json is in the same folder.</div>`;
    companies = [];
  }
  populatePopular();
  updateSuggestions();
}

function populatePopular() {
  popularList.innerHTML = "";
  const popular = companies.slice(0, 8);
  popular.forEach(c => {
    const btn = document.createElement('div');
    btn.className = 'chip';
    btn.textContent = c.name;
    btn.onclick = () => renderCompany(c.name);
    popularList.appendChild(btn);
  });
}

function updateSuggestions() {
  const q = searchInput.value.trim().toLowerCase();
  suggestionsEl.innerHTML = "";
  if (companies.length === 0) return;
  if (q.length === 0) {
    const hints = companies.slice(0, 6);
    hints.forEach(c => {
      const el = document.createElement('div');
      el.className = 'chip';
      el.textContent = c.name;
      el.onclick = () => { searchInput.value = c.name; renderCompany(c.name); };
      suggestionsEl.appendChild(el);
    });
    return;
  }
  const matched = companies.filter(c => c.name.toLowerCase().includes(q)).slice(0, 8);
  matched.forEach(c => {
    const el = document.createElement('div');
    el.className = 'chip';
    el.textContent = c.name;
    el.onclick = () => { searchInput.value = c.name; renderCompany(c.name); };
    suggestionsEl.appendChild(el);
  });
}

function findCompanyByName(name) {
  if (!name) return null;
  const q = name.trim().toLowerCase();
  // Exact match first
  const exact = companies.find(c => c.name.toLowerCase() === q);
  if (exact) return exact;
  // Fuzzy: contains
  return companies.find(c => c.name.toLowerCase().includes(q));
}

function renderCompany(query) {
  const c = findCompanyByName(query || searchInput.value);
  if (!c) {
    profileArea.innerHTML = `<div class="card"><strong>No company found.</strong> Try different spelling or open companies.json to verify the name.</div>`;
    return;
  }

  profileArea.innerHTML = '';
  const wrapper = document.createElement('div');
  wrapper.className = 'profile';

  // left column
  const left = document.createElement('div');
  left.className = 'profile-card';

  const logoBox = document.createElement('div');
  logoBox.className = 'logo';
  const img = document.createElement('img');
  img.src = c.logo || 'https://via.placeholder.com/300x160?text=No+Logo';
  img.alt = c.name + ' logo';
  logoBox.appendChild(img);

  const meta = document.createElement('div');
  meta.className = 'meta';
  const h2 = document.createElement('h2');
  h2.textContent = c.name;
  const pHQ = document.createElement('p');
  pHQ.textContent = `Headquarters: ${c.headquarters || '—'}`;

  meta.appendChild(h2);
  meta.appendChild(pHQ);

  if (c.website) {
    const websiteP = document.createElement('p');
    websiteP.style.margin = '6px 0';
    const a = document.createElement('a');
    a.href = c.website;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.textContent = 'Official website';
    a.style.color = 'var(--accent)';
    websiteP.appendChild(a);
    meta.appendChild(websiteP);
  }

  const kununu = document.createElement('div');
  kununu.className = 'kununu';
  const score = (c.kununu_rating && c.kununu_rating.score) ? c.kununu_rating.score : null;
  const reviews = c.kununu_rating?.reviews || 0;
  kununu.innerHTML = `<div class="stars">${renderStars(score || 0)} ${score ? score.toFixed(1) : 'N/A'}</div>
                      <div style="color:var(--muted); margin-left:8px">(${reviews} reviews)</div>`;

  left.appendChild(logoBox);
  left.appendChild(meta);
  left.appendChild(kununu);

  left.appendChild(sectionHTML('Core business areas', (c.core_business_areas || []).map(x => pill(x)).join(' ')));
  left.appendChild(sectionHTML('Recent achievements', `<ul>${(c.achievements||[]).map(a => `<li>${a}</li>`).join('')}</ul>`));
  left.appendChild(sectionHTML('Locations', `<ul>${(c.locations||[]).map(l => `<li>${l}</li>`).join('')}</ul>`));

  // right column
  const right = document.createElement('div');
  right.className = 'right-column';

  const interviewCard = document.createElement('div');
  interviewCard.className = 'card';
  interviewCard.innerHTML = `<h3>Interview Preparation</h3>
    <div class="qa">${(c.interview_prep || []).map((qa,i) => `
      <div class="question">
        <strong>Q${i+1}:</strong> ${qa.q}
        <div class="recommended">${qa.recommended}</div>
      </div>`).join('')}</div>`;

  const quizCard = document.createElement('div');
  quizCard.className = 'card quiz-card';
  quizCard.innerHTML = `<h3>Quick Quiz</h3>
    <div id="quizContainer"></div>`;

  right.appendChild(interviewCard);
  right.appendChild(quizCard);

  wrapper.appendChild(left);
  wrapper.appendChild(right);
  profileArea.appendChild(wrapper);

  renderQuiz(c);
  profileArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderStars(score) {
  const full = Math.floor(score);
  const half = score - full >= 0.5;
  let out = '';
  for (let i=0;i<5;i++){
    if (i < full) out += '★';
    else if (i===full && half) out += '☆';
    else out += '☆';
  }
  return out;
}

function sectionHTML(title, inner) {
  const div = document.createElement('div');
  div.className = 'section';
  div.innerHTML = `<h4>${title}</h4><div>${inner}</div>`;
  return div;
}

function pill(text) {
  return `<span class="key-pill">${text}</span>`;
}

/* Quiz logic */
function renderQuiz(company) {
  const container = document.getElementById('quizContainer');
  const qs = (company.quiz || []).slice(0,5); // up to 5
  if (qs.length === 0) {
    container.innerHTML = `<div>No quiz available for ${company.name}.</div>`;
    return;
  }

  shuffleArray(qs);
  let current = 0;
  let score = 0;

  function showQuestion() {
    const q = qs[current];
    container.innerHTML = `
      <div><strong>Q${current+1} / ${qs.length}:</strong> ${q.q}</div>
      <div class="options">
        ${q.choices.map((ch, idx) => `<div class="option" data-idx="${idx}">${ch}</div>`).join('')}
      </div>
      <div class="score" id="scoreDisplay">Score: ${score} / ${qs.length}</div>
    `;
    container.querySelectorAll('.option').forEach(opt => {
      opt.onclick = () => {
        const idx = Number(opt.getAttribute('data-idx'));
        const correct = q.correct;
        container.querySelectorAll('.option').forEach(o => {
          const i = Number(o.getAttribute('data-idx'));
          if (i === correct) o.classList.add('correct');
          if (i === idx && i !== correct) o.classList.add('wrong');
          o.style.pointerEvents = 'none';
        });
        if (idx === correct) score++;
        const nextBtn = document.createElement('button');
        nextBtn.textContent = current+1 < qs.length ? 'Next question' : 'Finish quiz';
        nextBtn.className = 'btn';
        nextBtn.style.marginTop = '10px';
        nextBtn.onclick = () => {
          current++;
          if (current < qs.length) showQuestion();
          else showResults();
        };
        container.appendChild(nextBtn);
        document.getElementById('scoreDisplay').textContent = `Score: ${score} / ${qs.length}`;
      };
    });
  }

  function showResults() {
    container.innerHTML = `<div><strong>Quiz complete.</strong></div>
      <div class="score">Your score: ${score} / ${qs.length}</div>
      <div style="margin-top:10px;">
        <button id="retryQuiz" class="btn">Retry Quiz</button>
      </div>`;
    document.getElementById('retryQuiz').onclick = () => { current = 0; score = 0; shuffleArray(qs); showQuestion(); };
  }

  showQuestion();
}

/* helpers */
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

searchInput.addEventListener('input', updateSuggestions);
searchBtn.addEventListener('click', () => renderCompany(searchInput.value));
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') renderCompany(searchInput.value);
});

// initial load
loadCompanies();
