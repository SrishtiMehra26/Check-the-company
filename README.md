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
            margin: 15px auto;
            border-radius: 4px;
            display: none;
            width: 90%;
            max-width: 600px;
            text-align: center;
        }

        .error-message.active {
            display: block;
        }

        .success-message {
            background-color: #e6ffe6;
            border: 2px solid #00cc00;
            color: #006600;
            padding: 15px;
            margin: 15px auto;
            border-radius: 4px;
            display: none;
            width: 90%;
            max-width: 600px;
            text-align: center;
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
        // Store current company data
        let currentCompanyData = {};

        // Company database with predefined information
        const companyDatabase = {
            'google': {
                name: 'Google LLC',
                description: 'Google is a multinational technology company specializing in Internet-related services and products.',
                shortProfile: 'Google is a multinational technology company that specializes in Internet-related services and products, including online advertising technologies, search engine, cloud computing, software, and hardware. Founded in 1998 by Larry Page and Sergey Brin, Google has become one of the most influential companies in the world, operating in more than 190 countries.',
                image: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
                website: 'https://www.google.com',
                rating: 3.8,
                reviews: 2847,
                strongestAreas: ['Search Technology', 'Cloud Computing (Google Cloud)', 'AI & Machine Learning', 'Digital Advertising', 'Mobile Operating Systems (Android)', 'Data Analytics'],
                locations: ['Mountain View, California, USA (Headquarters)', 'New York, New York, USA', 'London, United Kingdom', 'Berlin, Germany', 'Singapore', 'Tokyo, Japan']
            },
            'apple': {
                name: 'Apple Inc.',
                description: 'Apple is an American technology company that designs, manufactures, and markets consumer electronics, computer software, and online services.',
                shortProfile: 'Apple Inc. is an American multinational technology company that specializes in consumer electronics, computer software, and online services. Founded by Steve Jobs, Steve Wozniak, and Ronald Wayne in 1976, Apple is known for its design innovation, high-quality products, and premium brand positioning. The company manufactures products such as the iPhone, iPad, Mac computers, Apple Watch, and provides services like iCloud, Apple Music, and the App Store.',
                image: 'https://www.apple.com/ac/structured-data/images/open_graph_logo.png',
                website: 'https://www.apple.com',
                rating: 4.1,
                reviews: 3562,
                strongestAreas: ['Hardware Design', 'Ecosystem Integration', 'User Experience (UX)', 'Premium Branding', 'Innovation & R&D', 'Supply Chain Management'],
                locations: ['Cupertino, California, USA (Headquarters)', 'Cork, Ireland', 'Singapore', 'Tokyo, Japan', 'London, United Kingdom']
            },
            'microsoft': {
                name: 'Microsoft Corporation',
                description: 'Microsoft is a multinational technology company that develops computer software, consumer electronics, personal computers, and related services.',
                shortProfile: 'Microsoft Corporation is an American multinational technology company that develops, manufactures, licenses, and supports a wide range of software products and services. Founded by Bill Gates and Paul Allen in 1975, Microsoft is best known for its Windows operating system, Office suite of applications, and Azure cloud services. The company has expanded to include gaming (Xbox), professional networking (LinkedIn), and enterprise solutions.',
                image: 'https://www.microsoft.com/favicon.ico',
                website: 'https://www.microsoft.com',
                rating: 3.7,
                reviews: 2156,
                strongestAreas: ['Enterprise Software', 'Cloud Services (Azure)', 'Productivity Tools (Office 365)', 'Gaming (Xbox)', 'Artificial Intelligence', 'Cybersecurity'],
                locations: ['Redmond, Washington, USA (Headquarters)', 'New York, New York, USA', 'Dublin, Ireland', 'Munich, Germany', 'Toronto, Canada']
            },
            'amazon': {
                name: 'Amazon.com, Inc.',
                description: 'Amazon is an e-commerce and cloud computing company that offers online shopping, cloud services, digital streaming, and other services.',
                shortProfile: 'Amazon is an American multinational technology company and e-commerce giant founded by Jeff Bezos in 1994. It operates as the largest online retailer in the world and also provides cloud computing services through Amazon Web Services (AWS). The company has diversified into multiple sectors including digital streaming (Prime Video), smart home devices (Alexa), publishing, and logistics, making it one of the world\'s most valuable companies.',
                image: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
                website: 'https://www.amazon.com',
                rating: 3.3,
                reviews: 4821,
                strongestAreas: ['E-Commerce Platform', 'Cloud Computing (AWS)', 'Logistics & Fulfillment', 'AI & Automation', 'Digital Streaming (Prime Video)', 'Smart Home Technology'],
                locations: ['Seattle, Washington, USA (Headquarters)', 'Arlington, Virginia, USA', 'New York, New York, USA', 'London, United Kingdom', 'Tokyo, Japan']
            },
            'facebook': {
                name: 'Meta Platforms, Inc.',
                description: 'Meta (formerly Facebook) is a technology company that operates social media platforms and develops virtual reality products.',
                shortProfile: 'Meta Platforms, Inc. (formerly Facebook, Inc.) is an American multinational technology conglomerate founded by Mark Zuckerberg in 2004. The company operates popular social media platforms including Facebook, Instagram, and WhatsApp, which collectively serve billions of users worldwide. Meta is also investing heavily in virtual reality and the metaverse through its subsidiary Reality Labs division.',
                image: 'https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_blue_logo.png',
                website: 'https://www.meta.com',
                rating: 3.2,
                reviews: 3947,
                strongestAreas: ['Social Networking', 'Digital Advertising & Marketing', 'Data Analytics', 'Virtual Reality (Meta Quest)', 'Messaging Platforms (WhatsApp, Messenger)', 'Community Management'],
                locations: ['Menlo Park, California, USA (Headquarters)', 'New York, New York, USA', 'London, United Kingdom', 'Dublin, Ireland', 'Singapore']
            },
            'tesla': {
                name: 'Tesla, Inc.',
                description: 'Tesla is an electric vehicle manufacturer and clean energy company.',
                shortProfile: 'Tesla, Inc. is an American electric vehicle and clean energy company founded by Elon Musk, JB Straubel, and Martin Eberhard in 2003. Tesla designs and manufactures electric vehicles, battery energy storage systems, and solar products. The company has disrupted the automotive industry and is a leader in the electric vehicle market with models including the Model S, Model 3, Model X, and Model Y.',
                image: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Tesla_logo.png',
                website: 'https://www.tesla.com',
                rating: 3.4,
                reviews: 2134,
                strongestAreas: ['Electric Vehicle Technology', 'Battery Innovation', 'Autonomous Driving (Autopilot)', 'Manufacturing & Production', 'Renewable Energy Solutions', 'Software & AI Integration'],
                locations: ['Austin, Texas, USA (Headquarters)', 'Fremont, California, USA', 'Berlin, Germany', 'Shanghai, China']
            },
            'netflix': {
                name: 'Netflix, Inc.',
                description: 'Netflix is a streaming entertainment service that offers movies, TV series, documentaries, and more.',
                shortProfile: 'Netflix is an American subscription-based streaming entertainment service founded by Reed Hastings and Marc Randolph in 1997. The company provides on-demand streaming of a wide variety of content including original series, films, documentaries, and stand-up comedy specials. With over 220 million subscribers worldwide, Netflix has revolutionized how people consume entertainment and has won numerous awards for its original content.',
                image: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
                website: 'https://www.netflix.com',
                rating: 3.6,
                reviews: 5234,
                strongestAreas: ['Content Creation & Production', 'Streaming Technology', 'Data Analytics & Recommendations', 'Global Licensing & Distribution', 'Original Programming', 'User Experience Design'],
                locations: ['Los Gatos, California, USA (Headquarters)', 'New York, New York, USA', 'London, United Kingdom', 'Seoul, South Korea']
            }
        };

        async function searchCompany() {
            const companyName = document.getElementById('company-input').value.trim().toLowerCase();
            
            if (!companyName) {
                showError('Please enter a company name');
                return;
            }

            showLoading(true);
            clearError();

            try {
                currentCompanyData = {};
                
                // Check if company exists in database
                if (companyDatabase[companyName]) {
                    currentCompanyData = companyDatabase[companyName];
                    currentCompanyData.interviewData = generateInterviewQuestions(companyName);
                } else {
                    // For unknown companies, generate generic data
                    currentCompanyData = generateGenericCompanyData(companyName);
                }

                // Simulate API delay
                await new Promise(resolve => setTimeout(resolve, 1000));

                showLoading(false);
                displayResults();
                document.getElementById('main-container').style.display = 'grid';
                document.getElementById('bottom-container').style.display = 'grid';
                showSuccess(`Company information for "${currentCompanyData.name}" loaded successfully!`);

            } catch (error) {
                showLoading(false);
                showError('Error fetching company information: ' + error.message);
                console.error('Search error:', error);
            }
        }

        function generateGenericCompanyData(companyName) {
            const capitalizedName = companyName.charAt(0).toUpperCase() + companyName.slice(1);
            return {
                name: capitalizedName,
                description: `${capitalizedName} is a company operating in various sectors.`,
                shortProfile: `${capitalizedName} is a professional organization that provides services and products in its industry. The company is committed to innovation, quality, and customer satisfaction. With a focus on delivering value to stakeholders and maintaining strong market presence, ${capitalizedName} continues to grow and expand its operations.`,
                image: null,
                website: `https://www.${companyName.toLowerCase().replace(/\s/g, '')}.com`,
                rating: (Math.random() * 2 + 3).toFixed(1),
                reviews: Math.floor(Math.random() * 500 + 50),
                strongestAreas: [
                    'Core Business Operations',
                    'Customer Service & Support',
                    'Product Innovation & Development',
                    'Market Presence & Brand Recognition',
                    'Digital Transformation',
                    'Team Collaboration & Culture'
                ],
                locations: [
                    `${capitalizedName} Headquarters (Main Location)`,
                    'Regional Office - North America',
                    'Regional Office - Europe',
                    'Regional Office - Asia-Pacific'
                ]
            };
        }

        function generateInterviewQuestions(companyName) {
            const capitalizedName = companyName.charAt(0).toUpperCase() + companyName.slice(1);
            
            const questionsMap = {
                'google': [
                    {
                        question: 'Tell us about a time when you solved a complex technical problem.',
                        answer: 'I approached a challenging database optimization issue by first analyzing the bottlenecks, then implementing caching strategies and query optimization. This resulted in a 40% performance improvement and was deployed to production, benefiting thousands of users daily.'
                    },
                    {
                        question: 'How do you stay updated with the latest technologies and trends?',
                        answer: 'I regularly read tech blogs, follow industry leaders on social media, attend webinars, and contribute to open-source projects. I believe continuous learning is essential in tech, and I\'m particularly interested in machine learning and distributed systems.'
                    },
                    {
                        question: 'Describe your experience with large-scale systems.',
                        answer: 'In my previous role, I worked on systems handling millions of requests per day. I gained experience with microservices architecture, load balancing, and cloud infrastructure (AWS/GCP). This taught me the importance of scalability, monitoring, and graceful degradation.'
                    },
                    {
                        question: 'How do you approach collaborating with cross-functional teams?',
                        answer: 'I believe clear communication is key. I regularly sync with product managers, designers, and other engineers to ensure alignment. I\'m not afraid to ask questions, share ideas, and give constructive feedback to improve the overall product quality.'
                    },
                    {
                        question: 'What interests you about working at Google?',
                        answer: 'I\'m fascinated by Google\'s commitment to innovation and its impact on billions of users worldwide. The opportunity to work on challenging technical problems, collaborate with talented minds, and contribute to products that make a difference is what excites me most.'
                    },
                    {
                        question: 'Tell us about a project where you had to learn something new quickly.',
                        answer: 'I was assigned to lead a project using Kubernetes, which I had limited experience with. I took online courses, read documentation, and experimented in a test environment. Within two weeks, I was confidently managing containerized deployments and mentoring junior developers.'
                    },
                    {
                        question: 'How do you handle failure or mistakes?',
                        answer: 'I view failures as learning opportunities. When mistakes happen, I take responsibility, analyze what went wrong, implement fixes, and document lessons learned. I also believe in psychological safety - it\'s important to create an environment where people can admit mistakes and learn from them.'
                    },
                    {
                        question: 'Describe your ideal work environment.',
                        answer: 'I thrive in environments with smart, collaborative people, clear goals, and autonomy to solve problems creatively. I value companies that invest in employee development, promote work-life balance, and foster innovation. Remote or hybrid work flexibility is also important to me.'
                    },
                    {
                        question: 'Tell us about a time you had a disagreement with a colleague. How did you handle it?',
                        answer: 'We disagreed on the technical approach for a feature. I listened to their perspective, shared my concerns with data and examples, and we collaboratively evaluated both approaches. We ultimately chose a hybrid solution that leveraged the best of both ideas.'
                    },
                    {
                        question: 'Where do you see yourself in 5 years?',
                        answer: 'I aspire to become a technical leader who not only contributes to impactful projects but also mentors and develops other engineers. I\'m interested in deepening my expertise in machine learning and eventually leading a technical team at a company like Google.'
                    }
                ],
                'apple': [
                    {
                        question: 'How do you approach user experience and design?',
                        answer: 'I\'m passionate about creating intuitive, elegant solutions that delight users. I regularly conduct user research, test prototypes, and iterate based on feedback. At Apple, I understand that attention to detail and simplicity are paramount in every product.'
                    },
                    {
                        question: 'Tell us about a product you\'ve shipped that you\'re proud of.',
                        answer: 'I led the development of a mobile application that achieved over 2 million downloads. I was involved from concept through launch, focusing on performance optimization and user feedback. The app had a 4.8-star rating and significantly improved customer engagement.'
                    },
                    {
                        question: 'How do you handle working in a highly competitive industry?',
                        answer: 'I focus on what we can control: product quality, innovation, and customer experience. I stay motivated by challenging myself to create the best possible solutions and learning from competitors to continuously improve.'
                    },
                    {
                        question: 'What is your experience with hardware-software integration?',
                        answer: 'I\'ve worked on optimizing software performance for specific hardware constraints, understanding power consumption, and leveraging hardware capabilities. This holistic approach ensures that products work seamlessly together.'
                    },
                    {
                        question: 'Describe a time when you had to balance quality with time-to-market.',
                        answer: 'We had a feature request with a tight deadline. I prioritized the core functionality to launch on time while creating a roadmap for enhancements. We delivered a solid first version and iterated based on user feedback, ultimately creating a better product.'
                    },
                    {
                        question: 'How do you stay committed to privacy and security?',
                        answer: 'Privacy is a fundamental right. I ensure that every feature I build respects user privacy, implement strong security measures, and regularly review for vulnerabilities. I believe transparency with users about data usage is essential.'
                    },
                    {
                        question: 'What attracts you to Apple\'s ecosystem approach?',
                        answer: 'I\'m impressed by how Apple\'s seamless integration across devices creates a superior user experience. Working on products that are part of this ecosystem excites me - the opportunity to contribute to products that work together flawlessly.'
                    },
                    {
                        question: 'Tell us about a challenging debugging situation.',
                        answer: 'I debugged a memory leak in a resource-intensive application by using profiling tools and systematic testing. It required patience and attention to detail, but ultimately improved app performance significantly.'
                    },
                    {
                        question: 'How do you approach accessibility in your work?',
                        answer: 'I believe technology should be inclusive. I actively test products with accessibility tools, follow WCAG guidelines, and consider users with different abilities when designing features. Accessibility is not an afterthought—it\'s part of the design process.'
                    },
                    {
                        question: 'What is your vision for the future of technology?',
                        answer: 'I envision technology becoming increasingly human-centered and intuitive. I\'m excited about innovations like AR/VR, AI assistance, and sustainable technology. I want to be part of creating products that not only innovate but also have a positive impact on society.'
                    }
                ],
                'microsoft': [
                    {
                        question: 'Describe your experience with cloud technologies, particularly Azure.',
                        answer: 'I have hands-on experience deploying and managing applications on Azure, working with VMs, App Services, and databases. I appreciate Microsoft\'s comprehensive cloud offerings and its focus on enterprise solutions and hybrid cloud scenarios.'
                    },
                    {
                        question: 'How do you approach enterprise software development?',
                        answer: 'Enterprise software requires scalability, reliability, and security. I focus on writing maintainable code, implementing proper testing, and considering the needs of large organizations. User support and documentation are also critical aspects.'
                    },
                    {
                        question: 'Tell us about a time you improved code quality.',
                        answer: 'I implemented comprehensive unit testing in a legacy codebase, increasing coverage from 20% to 75%. I also refactored repetitive code, reducing technical debt significantly. This made future development faster and more reliable.'
                    },
                    {
                        question: 'How do you handle working with legacy systems?',
                        answer: 'Legacy systems are often critical to business operations. I approach them with respect and care, documenting code, writing tests, and gradually refactoring. I balance modernization with stability and always minimize the risk of breaking changes.'
                    },
                    {
                        question: 'What is your experience with DevOps and CI/CD?',
                        answer: 'I\'ve implemented CI/CD pipelines using tools like Azure DevOps and GitHub Actions. I understand the importance of automation, consistent deployments, and monitoring. This reduces errors and allows for faster, more reliable releases.'
                    },
                    {
                        question: 'Describe your approach to problem-solving in complex scenarios.',
                        answer: 'I break complex problems into manageable parts, identify dependencies, and tackle them systematically. I\'m not afraid to ask for help, research solutions, and collaborate with experienced team members.'
                    },
                    {
                        question: 'How do you stay current with Microsoft technologies?',
                        answer: 'I actively explore Microsoft Learn resources, attend tech conferences, and experiment with new features. I\'m interested in the full Microsoft stack including Office 365 integration, Dynamics, and Power BI.'
                    },
                    {
                        question: 'Tell us about a project where you added significant business value.',
                        answer: 'I automated a manual reporting process that was taking 20 hours per week. Using Power BI and Azure functions, I created an automated solution that provided real-time insights and freed up the team for more strategic work.'
                    },
                    {
                        question: 'How do you approach security in your development?',
                        answer: 'I follow security best practices including input validation, secure authentication, encryption, and regular security audits. I stay informed about common vulnerabilities and use tools like Azure Security Center to identify and mitigate risks.'
                    },
                    {
                        question: 'What is your vision for enterprise software\'s future?',
                        answer: 'I see enterprise software becoming increasingly AI-powered, user-friendly, and cloud-native. I\'m excited about how technologies like Teams, Power Platform, and Azure AI are democratizing access to powerful tools and transforming how businesses operate.'
                    }
                ],
                'amazon': [
                    {
                        question: 'Tell us about a time you operated at scale.',
                        answer: 'I managed a system handling 100K+ requests per second with sub-100ms latency. This required deep knowledge of distributed systems, caching strategies, and database optimization. The experience taught me the importance of thinking about scale from the beginning.'
                    },
                    {
                        question: 'How do you approach customer obsession?',
                        answer: 'Customer obsession means always putting the customer first. I regularly analyze customer feedback, use data to understand their pain points, and advocate for solutions that provide the most value. I think long-term and resist short-term metrics that don\'t serve customers.'
                    },
                    {
                        question: 'Describe a situation where you took ownership of a problem.',
                        answer: 'I noticed a critical issue affecting customer experience. Rather than waiting for someone else to fix it, I took ownership, collaborated across teams, and drove it to resolution. This saved the company significant revenue and improved customer satisfaction.'
                    },
                    {
                        question: 'Tell us about a time you had to innovate with constrained resources.',
                        answer: 'With limited budget and team, I architected a solution using open-source tools and serverless computing. This approach was not only cost-effective but also more scalable. It demonstrated that constraints can drive innovation and efficiency.'
                    },
                    {
                        question: 'How do you make decisions with incomplete information?',
                        answer: 'I gather available data, consult with experts, and make the best decision possible with a bias toward action. I regularly revisit decisions as new information emerges and adjust course if needed. Perfectionism often leads to paralysis.'
                    },
                    {
                        question: 'What is your experience with AWS?',
                        answer: 'I\'m proficient with AWS services including EC2, S3, Lambda, RDS, and DynamoDB. I understand cost optimization, security best practices, and multi-region deployment strategies. AWS is an industry standard, and expertise here is valuable.'
                    },
                    {
                        question: 'Describe a time you learned from failure.',
                        answer: 'A deployment I led caused an outage. Instead of making excuses, I thoroughly analyzed what went wrong, led a blameless postmortem, implemented preventive measures, and shared learnings with the team. This made us more resilient.'
                    },
                    {
                        question: 'How do you prioritize among competing demands?',
                        answer: 'I use data and customer impact to prioritize. I\'m comfortable saying "no" to low-impact work, even if it seems important internally. I align priorities with business goals and ensure the team understands the "why" behind decisions.'
                    },
                    {
                        question: 'Tell us about a time you simplified something complex.',
                        answer: 'I refactored a complex legacy system into a clean, microservices-based architecture. This not only improved developer productivity but also made the system more maintainable and scalable. Simplicity and clarity are powerful.'
                    },
                    {
                        question: 'What is your approach to mentoring and developing others?',
                        answer: 'I believe in investing in people. I regularly mentor junior engineers, provide constructive feedback, and create opportunities for growth. Developing others is as important as delivering code—it\'s about building strong teams.'
                    }
                ],
                'facebook': [
                    {
                        question: 'How do you approach building for billions of users?',
                        answer: 'Building at Facebook\'s scale requires thinking about efficiency, performance, and reliability from day one. I focus on writing clean code, leveraging efficient algorithms, and considering the impact of every change across the entire user base.'
                    },
                    {
                        question: 'Tell us about a time you shipped a feature that impacted millions.',
                        answer: 'I led the development of a feature that improved engagement by 8% across 500M+ users. The project required cross-functional collaboration, extensive A/B testing, and careful rollout. The impact on user satisfaction was significant.'
                    },
                    {
                        question: 'How do you handle working in a fast-paced, competitive environment?',
                        answer: 'I thrive in dynamic environments where things change rapidly. I stay focused on what matters most—user value and product excellence. I adapt quickly to changes and collaborate closely with product and design teams.'
                    },
                    {
                        question: 'Describe your experience with real-time systems.',
                        answer: 'I\'ve built systems that process millions of events per second, powering real-time notifications and updates. Understanding event streaming, distributed processing, and eventual consistency was crucial for these projects.'
                    },
                    {
                        question: 'How do you approach data privacy and security?',
                        answer: 'Privacy and security are paramount. I implement encryption, secure data handling practices, and regularly review compliance requirements. I believe users should have control over their data, and I advocate for privacy-first design.'
                    },
                    {
                        question: 'Tell us about a time you identified and fixed a critical issue.',
                        answer: 'I discovered a performance issue affecting video loading times. Through systematic profiling and optimization, I identified a caching issue and implemented a solution that improved load time by 50%. This directly improved user experience.'
                    },
                    {
                        question: 'How do you stay motivated working on social platforms?',
                        answer: 'I\'m motivated by understanding the human impact of products. Social platforms have profound effects on how people connect. Building responsibly and considering the societal implications keeps me motivated and focused on doing good.'
                    },
                    {
                        question: 'Describe your approach to A/B testing and experimentation.',
                        answer: 'Experimentation is critical for data-driven decisions. I design experiments carefully, ensure statistical significance, and learn from both positive and negative results. I understand the nuances of holdouts, sample sizes, and interaction effects.'
                    },
                    {
                        question: 'Tell us about a time you improved user retention.',
                        answer: 'I analyzed user behavior data and identified that users who received personalized notifications had higher retention. I worked with the notifications team to implement smarter targeting, which improved 30-day retention by 12%.'
                    },
                    {
                        question: 'What is your approach to working with product and design?',
                        answer: 'Strong collaboration between engineering, product, and design is essential. I actively participate in design reviews, provide technical feasibility input, and work closely to ensure the best possible product outcome.'
                    }
                ]
            };

            if (questionsMap[companyName.toLowerCase()]) {
                return questionsMap[companyName.toLowerCase()];
            } else {
                return generateDefaultInterviewQuestions(capitalizedName);
            }
        }

        function generateDefaultInterviewQuestions(companyName) {
            return [
                {
                    question: `What do you know about ${companyName} and why do you want to work here?`,
                    answer: `I'm impressed by ${companyName}'s commitment to innovation and their industry leadership. I'm particularly drawn to their values and mission. I believe my skills and experience align well with the company's goals, and I'm excited about the opportunity to contribute.`
                },
                {
                    question: 'Describe your greatest professional achievement.',
                    answer: 'In my previous role, I led a project that significantly improved efficiency and delivered measurable results. This experience taught me valuable lessons about project management, teamwork, and delivering quality outcomes under pressure.'
                },
                {
                    question: 'How do you handle working in a team?',
                    answer: 'I value collaboration and clear communication. I listen actively to team members, contribute my expertise, and am always open to feedback. I believe diverse perspectives lead to better solutions and stronger team dynamics.'
                },
                {
                    question: 'What are your career goals?',
                    answer: `I aim to grow my expertise in my field while contributing significantly to my team and company. I see ${companyName} as an ideal place to develop these skills and make a meaningful impact.`
                },
                {
                    question: 'Tell me about a challenge you faced and how you overcame it.',
                    answer: 'I encountered a difficult situation that required creative problem-solving and persistence. I approached it systematically, sought input from colleagues, and implemented a solution that not only resolved the issue but also improved processes for the future.'
                },
                {
                    question: 'How do you stay updated with industry trends?',
                    answer: 'I regularly read industry publications, attend conferences, follow thought leaders, and engage in professional development. I believe continuous learning is essential in today\'s fast-paced business environment.'
                },
                {
                    question: 'What are your salary expectations?',
                    answer: 'Based on my experience, skills, and the current market rate for similar positions in this region, I\'m looking for a competitive salary. However, I\'m open to discussing the complete compensation package including benefits and opportunities for growth.'
                },
                {
                    question: 'Do you have any questions for us?',
                    answer: 'Yes, I\'d like to know more about the team structure, the key projects I\'d be working on in the first 90 days, and how success is measured in this role. I\'m also interested in learning about the company\'s culture and growth opportunities.'
                },
                {
                    question: 'How do you handle pressure and tight deadlines?',
                    answer: 'I prioritize tasks effectively and break them into manageable steps. I communicate proactively about progress and challenges, and I\'m not afraid to ask for help when needed. I stay focused on delivering quality work even under pressure.'
                },
                {
                    question: 'What makes you different from other candidates?',
                    answer: 'My unique combination of technical expertise, proven track record of success, and passion for continuous improvement make me an exceptional candidate. I\'m also committed to being a great team player and contributing to a positive company culture.'
                }
            ];
        }

        function displayResults() {
            // Display company profile
            const shortProfileText = document.getElementById('short-profile-text');
            shortProfileText.textContent = currentCompanyData.shortProfile || currentCompanyData.description || 'No profile information available.';

            // Display company image
            const imageContainer = document.getElementById('company-image-container');
            if (currentCompanyData.image) {
                imageContainer.innerHTML = `<img src="${currentCompanyData.image}" alt="${currentCompanyData.name}" class="company-image" onerror="this.style.display='none'">`;
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
            const rating = parseFloat(currentCompanyData.rating || 3.5);
            const reviews = currentCompanyData.reviews || 0;
            
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
            const areas = currentCompanyData.strongestAreas || [];
            
            if (areas.length === 0) {
                areasList.innerHTML = '<li class="no-data">No areas data available</li>';
                return;
            }

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
                    locationsHTML += `<div class="location-item"><strong>📍 Office ${index}:</strong><br>${location}</div>`;
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

            let questionsHTML = '<table class="interview-table"><tr><th>Question</th></tr>';
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
