# Top Companies Search — Static Demo

This is a client-side static website that lets you search company profiles (sample dataset) and view:
- Company logo and kununu-like rating
- Core business areas
- Recent achievements
- Locations and headquarters
- Interview preparation questions with recommended answers
- A quick interactive quiz about the company

## Files
- `index.html` — main page
- `styles.css` — styling
- `script.js` — application logic
- `companies.json` — company dataset (sample). Expand this with up to 100 entries for your "Top 100 companies".

## Run locally
Because the app fetches `companies.json`, run it from a local static server:
1. With Python 3:
   - python -m http.server 8000
   - Open http://localhost:8000
2. Or use any static server (Live Server VSCode extension, serve npm package, etc.)

## Adding / Extending companies
- Open `companies.json` and add entries following the sample structure. Each company object should include:
  - id: unique id (string)
  - name: display name
  - logo: URL to a logo image (Clearbit logo service often works, e.g. `https://logo.clearbit.com/example.com`)
  - kununu_rating: { score: number (0-5), reviews: integer }
  - core_business_areas: array of strings
  - achievements: array of strings
  - locations: array of strings
  - headquarters: string
  - interview_prep: array of { q: string, recommended: string }
  - quiz: array of { q: string, choices: [..], correct: index }

To populate the "Top 100", you can:
- Manually add entries to `companies.json`.
- Or generate entries programmatically from a CSV or wherever you have a dataset and export to JSON.

## Notes on real kununu data and images
- kununu does not provide a public, free API for ratings. If you want official ratings, you must use their API (if available) or partner data and follow their terms.
- For logos, the demo uses Clearbit's logo service (no guarantees). Replace with your own hosted images to avoid hotlinking issues.

## Next steps I can help with
- Populate companies.json with the full Top 100 (static), curated data and basic summaries (I can create this dataset for you).
- Add an admin UI to add/edit companies in the browser (stored in localStorage) or a simple backend.
- Integrate a backend to pull live ratings from permitted APIs (requires API keys).
- Improve visuals and add company pages, bookmarking, and share links.

If you'd like, tell me:
- Do you want me to generate a full Top 100 static dataset?
- Or should I add an admin form to let you paste company data straight into the site?
``` ````

How to proceed
- If you want a full Top 100 dataset, tell me whether you want me to create static content for each company (I can draft short profiles and quizzes) or whether you'll provide a list and I should format them.
- If you want dynamic, real-time ratings/images from third-party APIs, tell me which APIs/keys you have and I'll integrate them.

Would you like me to:
1) Generate the full Top 100 static dataset now (I will create companies.json with 100 entries), or
2) Add an in-browser editor to manage companies locally, or
3) Integrate with external APIs for live ratings (provide APIs)?

Pick one and I'll continue.
