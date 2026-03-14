# Company Insight Explorer

A modern, user‑friendly web application that lets you search **any company that exists on the internet and has its own website**. The app displays:

- What the company does (short profile)
- Kununu‑style rating (stars + review count)
- Strongest focus areas
- Headquarters + up to 4 major locations
- Company‑specific interview questions
- Company‑specific strong example answers
- Extra “good to know” facts and achievements
- A company‑specific multiple‑choice quiz (AI chatbot style)

The design is colorful, soft, and professional — no harsh quadrants, no rigid layout.

---

## How it works

1. The user enters a company name.
2. The frontend sends a request to your backend:
POST /api/company-insights
Content-Type: application/json

{
"companyName": "Example GmbH"
}

3. Your backend must:
- Find the official company website
- Collect information from the web
- Use AI to generate:
  - A short profile
  - Kununu rating
  - Strongest areas
  - HQ + locations
  - Company‑specific interview questions
  - Company‑specific answers
  - Extra info + achievements
  - A multiple‑choice quiz about the company

4. The frontend displays everything beautifully.

---

## Expected backend response format

Your backend should return JSON like this:

```json
{
"companyName": "Example GmbH",
"logoUrl": "https://example.com/logo.png",
"hqImageUrl": "https://example.com/hq.jpg",
"shortProfile": "Example GmbH develops secure cloud solutions for European SMEs.",
"rating": {
 "source": "kununu",
 "score": 4.1,
 "maxScore": 5,
 "reviewCount": 128
},
"strongestAreas": [
 "Cloud infrastructure",
 "IT security consulting",
 "Managed services"
],
"headquarters": "Cologne, Germany",
"locations": [
 "Cologne, Germany",
 "Berlin, Germany",
 "Munich, Germany",
 "Vienna, Austria"
],
"interview": {
 "questions": [
   "How do you stay up to date with cloud security trends?",
   "Describe a migration project you led.",
   "How do you communicate technical topics to non‑technical clients?"
 ],
 "answers": [
   "I follow security blogs, attend webinars, and regularly review vendor best practices...",
   "In my last role, I led a migration from on‑premise systems to a hybrid cloud setup...",
   "I use clear, simple language and visual explanations to make complex topics accessible..."
 ]
},
"extraInfo": [
 "Awarded for cloud security innovation in 2023.",
 "Supports local tech meetups.",
 "Offers flexible remote work options."
],
"quiz": [
 {
   "question": "What is a core focus area of Example GmbH?",
   "options": [
     "Cloud security",
     "Fashion retail",
     "Automotive design",
     "Restaurant management"
   ],
   "correctIndex": 0,
   "explanation": "The company specializes in cloud security."
 }
]
}
