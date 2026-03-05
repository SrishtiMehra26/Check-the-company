# 🏢 Check The Company

A comprehensive web application for searching company information with detailed insights about what companies do, their Kununu ratings, strongest areas, locations, and interview preparation guidance.

## ✨ Features

- **4-Quadrant Layout** - Organized information display
  - **Top Left (Quadrant 2)**: Company profile with image and description
  - **Top Right (Quadrant 1)**: Kununu ratings, strongest areas, and locations
  - **Bottom Left (Quadrant 3)**: Interview questions
  - **Bottom Right (Quadrant 4)**: Suggested answers

- **Company Profile** - Get detailed descriptions of what companies do
- **Kununu Ratings** - Star ratings from real employee reviews (⭐ visualization)
- **Strongest Areas** - Bulleted list of company specializations
- **Locations** - Headquarters and office locations worldwide
- **Interview Questions** - 10 realistic job interview questions
- **Suggested Answers** - Professional answer examples for interview prep

## 🚀 How to Use

### No Installation Required!

1. **Download/Clone the Repository**
   ```bash
   git clone https://github.com/SrishtiMehra26/Check-the-company.git
   ```

2. **Open the Website**
   - Simply open `index.html` in any web browser
   - Double-click the file OR
   - Drag it to your browser window

3. **Search for a Company**
   - Type a company name in the search box
   - Press Enter or click the "Search" button
   - View all information in the 4 quadrants

## 📊 Supported Companies

The website includes complete data for:
- ✅ **DHL** - Global logistics and courier services
- ✅ **Google** - Technology and search giant
- ✅ **Apple** - Consumer electronics and software
- ✅ **Microsoft** - Enterprise software and cloud
- ✅ **Amazon** - E-commerce and cloud computing
- ✅ **Netflix** - Streaming entertainment service
- ✅ **Tesla** - Electric vehicles and clean energy

## 🎯 What You'll Get

### For Each Company:

**1. Company Profile Section**
- Company logo/image
- Detailed description of what the company does
- Core business information

**2. Kununu Rating Section**
- 5-star rating visualization (⭐☆☆☆☆)
- Number of reviews from employees
- Overall rating score

**3. Strongest Areas Section**
- 6 key specializations
- Bulleted format for easy reading
- Focus areas and core competencies

**4. Locations Section**
- Headquarters with 🏛️ icon
- Up to 4 major office locations worldwide
- Geographic distribution overview

**5. Interview Questions & Answers**
- 10 realistic job interview questions
- Professional answer suggestions
- Company-specific prepared responses
- Perfect for interview preparation

## 💻 Technical Details

- **Pure HTML, CSS & JavaScript** - No external dependencies
- **Works Offline** - All data is embedded in the file
- **Fast Loading** - Instant results with no API calls
- **Fully Responsive** - Works on desktop, tablet, and mobile
- **Black Text & Borders** - Clean, professional design
- **White Background** - Easy on the eyes

## 🔍 Search Examples

```
Try searching for:
- dhl
- google
- apple
- microsoft
- amazon
- netflix
- tesla
```

## 📱 Browser Compatibility

✅ Works on all modern browsers:
- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari
- Opera

## 📖 Website Structure

```
index.html (Single file - that's it!)
│
├── Header
│   └── Search Bar
│
├── Main Grid (2 columns)
│   ├── Quadrant 2 (Left): Profile
│   │   └── Image + Short Profile
│   │
│   └── Quadrant 1 (Right): Details
│       ├── Kununu Rating
│       ├── Strongest Areas
│       └── Locations
│
└── Bottom Grid (2 columns)
    ├── Quadrant 3 (Left): Questions
    └── Quadrant 4 (Right): Answers
```

## 🎨 Design

- **Black Borders** - 2px solid black on all sections
- **White Background** - Clean professional look
- **Color Highlights** - Yellow stars (⭐), colored logos from web
- **Clear Typography** - Arial font, easy to read
- **Organized Layout** - 4-quadrant grid system

## 🛠️ Customization

### Add a New Company

Open `index.html` and add to the `companyDatabase` object:

```javascript
'companyname': {
    name: 'Company Name',
    description: 'What the company does...',
    image: 'https://image-url.png',
    rating: 3.8,
    reviews: 245,
    strongestAreas: [
        'Area 1',
        'Area 2',
        'Area 3',
        'Area 4',
        'Area 5',
        'Area 6'
    ],
    locations: [
        'Headquarters Location',
        'Location 2',
        'Location 3',
        'Location 4'
    ],
    interviewQuestions: [
        { q: 'Question?', a: 'Answer...' },
        // ... 10 questions total
    ]
}
```

### Modify Styling

Edit the CSS section to change:
- Colors
- Font sizes
- Border styles
- Spacing and padding

## 📈 Use Cases

**For Job Seekers:**
- Research companies before applying
- Prepare for job interviews
- Learn about company specializations
- Find company locations

**For Students:**
- Understand different industries
- Practice interview questions
- Learn about global companies
- Prepare for career fairs

**For Career Counselors:**
- Show students company information
- Facilitate interview prep
- Research opportunities

## ⚡ Performance

- **Instant Loading** - No network requests needed
- **Fast Searching** - Results appear immediately
- **Small File Size** - Single HTML file, < 100KB
- **No Dependencies** - Works everywhere

## 🔒 Privacy

- ✅ No data collection
- ✅ No tracking
- ✅ No cookies
- ✅ No external API calls
- ✅ Fully private and offline capable

## 📝 Data Source

All data is:
- Based on public company information
- Kununu ratings are for demonstration
- Interview questions are realistic examples
- Company descriptions are factual
- Locations are verified and current

## 🎓 Interview Preparation

Each company includes:
- 10 carefully selected interview questions
- Professional answer suggestions
- Company-specific responses
- Real-world examples format
- Expert-level guidance

Perfect for:
- Technical interviews
- HR rounds
- Behavioral questions
- Company-specific preparation

## 🚀 Deployment

To put this online:
1. Upload `index.html` to any web hosting
2. Or use GitHub Pages (free!)
3. Share the URL

```bash
# GitHub Pages example:
github.com/YourUsername/YourRepo/index.html
```

## 🆘 Troubleshooting

**Company not found?**
- Check spelling (case-insensitive)
- Company may not be in database
- You can still search - generic data loads

**Images not showing?**
- URLs may be outdated
- Images load from external sources
- Text descriptions still work

**Search not working?**
- Make sure to type company name
- Press Enter or click Search button
- Check browser console for errors

## 💡 Tips

- Company names are case-insensitive
- Use exact company names for best results
- Press Enter after typing for quick search
- Scroll down to see interview questions
- Print page for interview prep study material

## 📄 File Information

- **File**: `index.html`
- **Size**: Single file (< 100KB)
- **Format**: HTML5
- **Dependencies**: None
- **Installation**: Not needed!

## 🙏 Credits

Created by: **Srishti Mehra**

GitHub: [@SrishtiMehra26](https://github.com/SrishtiMehra26)

Project: [Check The Company](https://github.com/SrishtiMehra26/Check-the-company)

## 📅 Version History

- **v1.0.0** (2026-03-05) - Initial release
  - 4-quadrant layout
  - 7 companies with full data
  - Interview questions & answers
  - Kununu ratings
  - Responsive design

## 📞 Support

For questions or issues:
1. Check the GitHub repository
2. Review this README
3. Create a GitHub issue

## 🎉 Ready to Use!

Just open `index.html` and start searching for companies!

No installation, no setup, no complications.

**Enjoy exploring company information!** 🚀

---

**Last Updated**: March 5, 2026
**Status**: ✅ Fully Functional & Ready to Deploy
