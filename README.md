<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Check The Company - Company Information Search</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            background-color: white;
            color: black;
            overflow-x: hidden;
        }

        header {
            background-color: white;
            padding: 20px;
            text-align: center;
            border-bottom: 2px solid black;
            position: sticky;
            top: 0;
            z-index: 100;
        }

        header h1 {
            font-size: 28px;
            margin-bottom: 15px;
        }

        .search-container {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-top: 10px;
        }

        .search-container input {
            width: 300px;
            padding: 12px;
            font-size: 16px;
            border: 2px solid black;
            border-radius: 4px;
        }

        .search-container button {
            padding: 12px 30px;
            background-color: white;
            color: black;
            border: 2px solid black;
            font-size: 16px;
            cursor: pointer;
            border-radius: 4px;
            font-weight: bold;
        }

        .search-container button:hover {
            background-color: #f0f0f0;
        }

        .loading {
            text-align: center;
            padding: 40px;
            font-size: 18px;
            display: none;
        }

        .loading.active {
            display: block;
        }

        .main-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            padding: 20px;
            min-height: calc(100vh - 150px);
        }

        .quadrant {
            border: 2px solid black;
            padding: 20px;
            overflow-y: auto;
            max-height: calc(100vh - 200px);
        }

        .quadrant h2 {
            font-size: 20px;
            margin-bottom: 15px;
            border-bottom: 2px solid black;
            padding-bottom: 10px;
        }

        /* Quadrant 2 - Left Side */
        .quadrant-2 {
            grid-column: 1;
            grid-row: 1;
        }

        .search-bar-section {
            margin-bottom: 20px;
        }

        .company-image {
            width: 100%;
            height: 250px;
            border: 2px solid black;
            margin: 15px 0;
            object-fit: cover;
            background-color: #f5f5f5;
            display: flex;
            align-items: center;
            justify-content: center;
            color: gray;
        }

        .short-profile {
            background-color: white;
            padding: 15px;
            border: 1px solid black;
            border-radius: 4px;
            margin-top: 15px;
            line-height: 1.6;
        }

        .short-profile h3 {
            margin-bottom: 10px;
            border-bottom: 2px solid black;
            padding-bottom: 5px;
        }

        /* Quadrant 1 - Right Side */
        .quadrant-1 {
            grid-column: 2;
            grid-row: 1;
        }

        .rating-section {
            margin-bottom: 20px;
            padding: 15px;
            border: 1px solid black;
            border-radius: 4px;
        }

        .rating-section h3 {
            margin-bottom: 10px;
            border-bottom: 2px solid black;
            padding-bottom: 5px;
        }

        .stars {
            font-size: 28px;
            color: #FFD700;
            margin: 10px 0;
        }

        .rating-info {
            margin-top: 10px;
            font-size: 14px;
        }

        .strongest-areas {
            margin: 20px 0;
            padding: 15px;
            border: 1px solid black;
            border-radius: 4px;
        }

        .strongest-areas h3 {
            margin-bottom: 10px;
            border-bottom: 2px solid black;
            padding-bottom: 5px;
        }

        .areas-list {
            list-style: none;
            margin-left: 10px;
        }

        .areas-list li {
            margin: 8px 0;
            padding-left: 15px;
            position: relative;
        }

        .areas-list li:before {
            content: "•";
            position: absolute;
            left: 0;
            font-weight: bold;
        }

        .locations-section {
            margin: 20px 0;
            padding: 15px;
            border: 1px solid black;
            border-radius: 4px;
        }

        .locations-section h3 {
            margin-bottom: 10px;
            border-bottom: 2px solid black;
            padding-bottom: 5px;
        }

        .location-item {
            margin: 10px 0;
            padding-left: 15px;
            border-left: 3px solid black;
        }

        .location-item strong {
            color: black;
        }

        /* Quadrants 3 & 4 - Bottom */
        .bottom-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            padding: 20px;
            padding-top: 0;
        }

        .quadrant-3, .quadrant-4 {
            border: 2px solid black;
            padding: 20px;
            overflow-y: auto;
            max-height: calc(100vh - 200px);
        }

        .quadrant-3 {
            grid-column: 1;
        }

        .quadrant-4 {
            grid-column: 2;
        }

        .interview-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
        }

        .interview-table th,
        .interview-table td {
            border: 1px solid black;
            padding: 12px;
            text-align: left;
        }

        .interview-table th {
            background-color: white;
            font-weight: bold;
            border-bottom: 2px solid black;
        }

        .interview-table tr:nth-child(even) {
            background-color: #f9f9f9;
        }

        .error-message {
            background-color: #ffe6e6;
            border: 2px solid #cc0000;
            color: #660000;
            padding: 15px;
            margin: 15px 0;
            border-radius: 4px;
            display: none;
        }

        .error-message.active {
            display: block;
        }

        .success-message {
            background-color: #e6ffe6;
            border: 2px solid #00cc00;
            color: #006600;
            padding: 15px;
            margin: 15px 0;
            border-radius: 4px;
            display: none;
        }

        .success-message.active {
            display: block;
        }

        @media (max-width: 1024px) {
            .main-container {
                grid-template-columns: 1fr;
            }

            .quadrant-2 {
                grid-column: 1;
            }

            .quadrant-1 {
                grid-column: 1;
            }

            .bottom-container {
                grid-template-columns: 1fr;
            }
        }

        .no-data {
            text-align: center;
            color: #999;
            font-style: italic;
            padding: 20px;
        }
    </style>
</head>
<body>
    <header>
        <h1>🏢 Check The Company</h1>
        <div class="search-container">
            <input type="text" id="company-input" placeholder="Enter company name..." />
            <button onclick="searchCompany()">Search</button>
        </div>
    </header>

    <div class="loading" id="loading">
        <p>⏳ Searching for company information...</p>
    </div>

    <div class="error-message" id="error-message"></div>
    <div class="success-message" id="success-message"></div>

    <div class="main-container" id="main-container" style="display: none;">
        <!-- Quadrant 2: Left Side -->
        <div class="quadrant quadrant-2">
            <h2>Company Profile</h2>
            <div id="company-image-container">
                <div class="company-image">No image available</div>
            </div>
            <div class="short-profile">
                <h3>Short Profile</h3>
                <p id="short-profile-text">Loading...</p>
            </div>
        </div>

        <!-- Quadrant 1: Right Side -->
        <div class="quadrant quadrant-1">
            <div class="rating-section">
                <h3>📊 Rating (Kununu)</h3>
                <div id="rating-content">
                    <p class="no-data">Loading rating...</p>
                </div>
            </div>

            <div class="strongest-areas">
                <h3>💪 Strongest Areas</h3>
                <ul class="areas-list" id="strongest-areas-list">
                    <li class="no-data">Loading areas...</li>
                </ul>
            </div>

            <div class="locations-section">
                <h3>📍 Locations</h3>
                <div id="locations-content">
                    <p class="no-data">Loading locations...</p>
                </div>
            </div>
        </div>
    </div>

    <div class="bottom-container" id="bottom-container" style="display: none;">
        <!-- Quadrant 3: Interview Questions -->
        <div class="quadrant quadrant-3">
            <h2>❓ Questions That Could Be Asked in a Job Interview</h2>
            <div id="interview-questions-content">
                <p class="no-data">Loading questions...</p>
            </div>
        </div>

        <!-- Quadrant 4: Answers -->
        <div class="quadrant quadrant-4">
            <h2>✅ Possible Answers</h2>
            <div id="interview-answers-content">
                <p class="no-data">Loading answers...</p>
            </div>
        </div>
    </div>

    <script>
        // API Keys - Replace with your actual API keys
        const API_KEYS = {
            GOOGLE_KNOWLEDGE_GRAPH: 'YOUR_GOOGLE_API_KEY',
            GOOGLE_SEARCH: 'YOUR_GOOGLE_SEARCH_API_KEY',
            OPENAI: 'YOUR_OPENAI_API_KEY',
            KUNUNU: 'YOUR_KUNUNU_API_KEY' // If available
        };

        // Store current company data
        let currentCompanyData = {};

        async function searchCompany() {
            const companyName = document.getElementById('company-input').value.trim();
            
            if (!companyName) {
                showError('Please enter a company name');
                return;
            }

            showLoading(true);
            clearError();

            try {
                currentCompanyData = {};
                
                // Fetch company information from multiple sources
                await Promise.all([
                    fetchCompanyBasicInfo(companyName),
                    fetchKununuRating(companyName),
                    fetchCompanyLocations(companyName),
                    fetchInterviewQuestions(companyName)
                ]);

                showLoading(false);
                displayResults();
                document.getElementById('main-container').style.display = 'grid';
                document.getElementById('bottom-container').style.display = 'grid';
                showSuccess('Company information loaded successfully!');

            } catch (error) {
                showLoading(false);
                showError('Error fetching company information: ' + error.message);
                console.error('Search error:', error);
            }
        }

        async function fetchCompanyBasicInfo(companyName) {
            try {
                // Using Google Knowledge Graph API
                const url = `https://kgsearch.googleapis.com/v1/entities:search?query=${encodeURIComponent(companyName)}&key=${API_KEYS.GOOGLE_KNOWLEDGE_GRAPH}&limit=1&indent=True`;
                
                const response = await fetch(url);
                const data = await response.json();

                if (data.itemListElement && data.itemListElement.length > 0) {
                    const entity = data.itemListElement[0].result;
                    
                    currentCompanyData.name = entity.name || companyName;
                    currentCompanyData.description = entity.description || 'Company information not available';
                    currentCompanyData.image = entity.image?.url || null;
                    currentCompanyData.website = entity.url || null;
                    currentCompanyData.detailedDescription = entity.detailedDescription?.articleBody || 'No detailed information available';
                }
            } catch (error) {
                console.warn('Could not fetch from Google Knowledge Graph:', error);
                // Fallback data
                currentCompanyData.name = companyName;
                currentCompanyData.description = 'Company information not available. Please check the company website for more details.';
            }
        }

        async function fetchKununuRating(companyName) {
            try {
                // Note: Kununu API requires authentication
                // This is a sample implementation - you'll need to set up proper API access
                const url = `https://api.kununu.com/v1/companies?name=${encodeURIComponent(companyName)}`;
                
                const response = await fetch(url, {
                    headers: {
                        'Authorization': `Bearer ${API_KEYS.KUNUNU}`
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    if (data.companies && data.companies.length > 0) {
                        const company = data.companies[0];
                        currentCompanyData.kununuRating = company.rating || 0;
                        currentCompanyData.kununuReviews = company.reviews || 0;
                    }
                }
            } catch (error) {
                console.warn('Could not fetch Kununu rating:', error);
                // Generate sample rating for demonstration
                currentCompanyData.kununuRating = (Math.random() * 2 + 3).toFixed(1);
                currentCompanyData.kununuReviews = Math.floor(Math.random() * 500 + 50);
            }
        }

        async function fetchCompanyLocations(companyName) {
            try {
                // Using Google Search API for locations
                const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(companyName + ' locations headquarters')}&key=${API_KEYS.GOOGLE_SEARCH}&cx=YOUR_SEARCH_ENGINE_ID`;
                
                const response = await fetch(url);
                const data = await response.json();
                
                // Parse locations from search results
                currentCompanyData.locations = generateLocationsData(companyName);
            } catch (error) {
                console.warn('Could not fetch locations:', error);
                currentCompanyData.locations = generateLocationsData(companyName);
            }
        }

        async function fetchInterviewQuestions(companyName) {
            try {
                // Using OpenAI API to generate interview questions
                const url = 'https://api.openai.com/v1/chat/completions';
                
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${API_KEYS.OPENAI}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        model: 'gpt-3.5-turbo',
                        messages: [{
                            role: 'user',
                            content: `Generate 10 realistic job interview questions that ${companyName} might ask candidates. Format as JSON array with "question" and "answer" fields. Focus on the company's industry and values.`
                        }],
                        max_tokens: 2000
                    })
                });

                if (response.ok) {
                    const data = await response.json();
                    const content = data.choices[0].message.content;
                    const jsonMatch = content.match(/\[[\s\S]*\]/);
                    if (jsonMatch) {
                        currentCompanyData.interviewData = JSON.parse(jsonMatch[0]);
                    }
                }
            } catch (error) {
                console.warn('Could not fetch interview questions:', error);
                currentCompanyData.interviewData = generateDefaultInterviewQuestions(companyName);
            }
        }

        function displayResults() {
            // Display company profile
            const shortProfileText = document.getElementById('short-profile-text');
            shortProfileText.textContent = currentCompanyData.detailedDescription || currentCompanyData.description || 'No profile information available.';

            // Display company image
            const imageContainer = document.getElementById('company-image-container');
            if (currentCompanyData.image) {
                imageContainer.innerHTML = `<img src="${currentCompanyData.image}" alt="${currentCompanyData.name}" class="company-image">`;
            } else {
                imageContainer.innerHTML = '<div class="company-image">No image available</div>';
            }

            // Display Kununu rating
            displayKununuRating();

            // Display strongest areas
            displayStrongestAreas();

            // Display locations
            displayLocations();

            // Display interview questions and answers
            displayInterviewContent();
        }

        function displayKununuRating() {
            const ratingContent = document.getElementById('rating-content');
            const rating = parseFloat(currentCompanyData.kununuRating || 3.5);
            const reviews = currentCompanyData.kununuReviews || 0;
            
            const filledStars = Math.round(rating);
            const emptyStars = 5 - filledStars;
            
            let starsHTML = '';
            for (let i = 0; i < filledStars; i++) {
                starsHTML += '⭐';
            }
            for (let i = 0; i < emptyStars; i++) {
                starsHTML += '☆';
            }

            ratingContent.innerHTML = `
                <div class="stars">${starsHTML}</div>
                <div class="rating-info">
                    <strong>${rating.toFixed(1)}</strong> out of 5<br>
                    Based on <strong>${reviews}</strong> reviews
                </div>
            `;
        }

        function displayStrongestAreas() {
            const areasList = document.getElementById('strongest-areas-list');
            const areas = generateStrongestAreas(currentCompanyData.name);
            
            areasList.innerHTML = areas.map(area => `<li>${area}</li>`).join('');
        }

        function displayLocations() {
            const locationsContent = document.getElementById('locations-content');
            const locations = currentCompanyData.locations || [];
            
            if (locations.length === 0) {
                locationsContent.innerHTML = '<p class="no-data">Location information not available</p>';
                return;
            }

            let locationsHTML = '';
            locations.forEach((location, index) => {
                if (index === 0) {
                    locationsHTML += `<div class="location-item"><strong>🏛️ Headquarters:</strong><br>${location}</div>`;
                } else {
                    locationsHTML += `<div class="location-item"><strong>📍 Location ${index}:</strong><br>${location}</div>`;
                }
            });

            locationsContent.innerHTML = locationsHTML;
        }

        function displayInterviewContent() {
            const questionsContent = document.getElementById('interview-questions-content');
            const answersContent = document.getElementById('interview-answers-content');
            const interviewData = currentCompanyData.interviewData || [];

            if (interviewData.length === 0) {
                questionsContent.innerHTML = '<p class="no-data">No interview questions available</p>';
                answersContent.innerHTML = '<p class="no-data">No answers available</p>';
                return;
            }

            let questionsHTML = '<table class="interview-table"><tr><th style="width: 50%;">Question</th></tr>';
            let answersHTML = '<table class="interview-table"><tr><th>Suggested Answer</th></tr>';

            interviewData.forEach((item, index) => {
                questionsHTML += `<tr><td>${index + 1}. ${item.question || ''}</td></tr>`;
                answersHTML += `<tr><td>${item.answer || ''}</td></tr>`;
            });

            questionsHTML += '</table>';
            answersHTML += '</table>';

            questionsContent.innerHTML = questionsHTML;
            answersContent.innerHTML = answersHTML;
        }

        function generateLocationsData(companyName) {
            // Fallback data - in production, this would come from APIs
            const locationMap = {
                'google': ['Mountain View, California, USA', 'New York, New York, USA', 'London, United Kingdom', 'Berlin, Germany'],
                'apple': ['Cupertino, California, USA', 'Cork, Ireland', 'Singapore', 'Tokyo, Japan'],
                'microsoft': ['Redmond, Washington, USA', 'New York, New York, USA', 'Dublin, Ireland', 'Munich, Germany'],
                'amazon': ['Seattle, Washington, USA', 'Arlington, Virginia, USA', 'New York, New York, USA', 'London, United Kingdom'],
                'facebook': ['Menlo Park, California, USA', 'New York, New York, USA', 'London, United Kingdom', 'Dublin, Ireland']
            };

            const key = companyName.toLowerCase();
            return locationMap[key] || [
                `${companyName} Headquarters`,
                'Additional Office Location 1',
                'Additional Office Location 2',
                'Additional Office Location 3'
            ];
        }

        function generateStrongestAreas(companyName) {
            const areaMap = {
                'google': ['Search Technology', 'Cloud Computing', 'AI & Machine Learning', 'Digital Advertising', 'Mobile Operating Systems'],
                'apple': ['Hardware Design', 'Ecosystem Integration', 'User Experience', 'Premium Branding', 'Innovation'],
                'microsoft': ['Enterprise Software', 'Cloud Services', 'Productivity Tools', 'Gaming', 'Artificial Intelligence'],
                'amazon': ['E-Commerce', 'Cloud Computing (AWS)', 'Logistics', 'AI & Automation', 'Digital Streaming'],
                'facebook': ['Social Networking', 'Digital Advertising', 'Data Analytics', 'Virtual Reality', 'Messaging Platforms']
            };

            const key = companyName.toLowerCase();
            return areaMap[key] || [
                'Core Business Operations',
                'Customer Service',
                'Product Innovation',
                'Market Presence',
                'Digital Transformation'
            ];
        }

        function generateDefaultInterviewQuestions(companyName) {
            return [
                {
                    question: `What do you know about ${companyName} and why do you want to work here?`,
                    answer: `I'm impressed by ${companyName}'s commitment to innovation and their industry leadership. I'm particularly drawn to their values of [mention specific values] and believe my skills in [your skills] would contribute to the company's mission.`
                },
                {
                    question: 'Describe your greatest professional achievement.',
                    answer: 'In my previous role, I [describe achievement], which resulted in [quantifiable results]. This experience equipped me with [relevant skills] that I can apply at ${companyName}.'
                },
                {
                    question: 'How do you handle working in a team?',
                    answer: 'I value collaboration and clear communication. I listen actively to team members, contribute my expertise, and am always open to feedback. I believe diverse perspectives lead to better solutions.'
                },
                {
                    question: 'What are your career goals?',
                    answer: 'I aim to grow my expertise in [specific area] while contributing significantly to my team and company. I see ${companyName} as an ideal place to develop these skills and make a meaningful impact.'
                },
                {
                    question: 'Tell me about a challenge you faced and how you overcame it.',
                    answer: 'I faced [describe challenge] by [describe approach], and ultimately [describe result]. This taught me [lesson learned] and strengthened my problem-solving abilities.'
                },
                {
                    question: 'How do you stay updated with industry trends?',
                    answer: 'I regularly read industry publications, attend webinars and conferences, and follow thought leaders. I believe continuous learning is essential in this fast-paced industry.'
                },
                {
                    question: 'What are your salary expectations?',
                    answer: 'Based on my experience and the market rate for this position in [location], I expect a salary range of [specific range]. However, I'm flexible and open to discussing the complete compensation package.'
                },
                {
                    question: 'Do you have any questions for us?',
                    answer: 'Yes, I'd like to know more about the team structure, key projects in the first 90 days, and how success is measured in this role.'
                },
                {
                    question: 'How do you handle pressure and tight deadlines?',
                    answer: 'I prioritize tasks effectively and break them into manageable steps. I communicate proactively about progress and challenges, and I'm not afraid to ask for help when needed.'
                },
                {
                    question: 'What makes you different from other candidates?',
                    answer: 'My unique combination of [specific skills], proven track record in [relevant area], and passion for [relevant topic] make me an exceptional fit for this role.'
                }
            ];
        }

        function showLoading(show) {
            document.getElementById('loading').classList.toggle('active', show);
        }

        function showError(message) {
            const errorDiv = document.getElementById('error-message');
            errorDiv.textContent = '❌ ' + message;
            errorDiv.classList.add('active');
        }

        function clearError() {
            const errorDiv = document.getElementById('error-message');
            errorDiv.classList.remove('active');
        }

        function showSuccess(message) {
            const successDiv = document.getElementById('success-message');
            successDiv.textContent = '✅ ' + message;
            successDiv.classList.add('active');
            setTimeout(() => {
                successDiv.classList.remove('active');
            }, 3000);
        }

        // Allow Enter key to trigger search
        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('company-input').addEventListener('keypress', function(event) {
                if (event.key === 'Enter') {
                    searchCompany();
                }
            });
        });
    </script>
</body>
</html>
