# 🏢 Check The Company - Modern Edition

A beautiful, modern web application for discovering comprehensive information about any company worldwide. Search any company and get real-time insights including company profiles, employee ratings, locations, and interview preparation guidance.

## ✨ Features

### 🎨 Modern Design
- **Beautiful gradient backgrounds** and smooth animations
- **Colorful UI** with a vibrant purple-to-pink gradient theme
- **Card-based layout** with hover effects and transitions
- **Responsive design** that works on all devices
- **No harsh borders** - soft, rounded corners throughout

### 📊 Company Information
- **Company Profile** - Detailed description and company logo
- **Kununu Ratings** - Star ratings with employee review counts
- **Strongest Areas** - 6 key specializations with checkmarks
- **Global Locations** - Headquarters and office locations
- **Additional Info** - Industry, employee count, founding year

### 💼 Interview Preparation
- **10 Common Questions** - Realistic job interview questions
- **Suggested Answers** - Professional answer examples
- **Company-specific** - Tailored guidance for each company
- **Side-by-side view** - Questions and answers displayed together

### 🌐 Data Access
- **Pre-loaded companies** - 5 major companies with complete data
- **Wikipedia API integration** - Search ANY company with a website
- **Real-time data** - Fetch live company information from the web
- **Fallback database** - Works offline with pre-loaded data

## 🚀 Getting Started

### Super Easy!

1. **Download or Clone**
   ```bash
   git clone https://github.com/SrishtiMehra26/Check-the-company.git
   ```

2. **Open in Browser**
   - Double-click `index.html`
   - Open with any modern web browser

3. **Search for a Company**
   - Type any company name
   - Press Enter or click Search
   - View all information instantly

## 🎯 How to Use

### Search Examples

Try searching for:
- **Apple** - Get complete data with logo
- **Google** - Technology giant insights
- **Microsoft** - Enterprise software leader
- **Amazon** - E-commerce powerhouse
- **Tesla** - Electric vehicle innovation
- **Any company** - Works with most companies that have a website!

### What You'll Get

1. **Company Profile Section**
   - Company logo/image
   - Detailed company description
   - Website link

2. **Company Insights**
   - Kununu rating (⭐ visualization)
   - Number of employee reviews
   - 6 strongest business areas

3. **Locations Information**
   - Headquarters location
   - Additional office locations worldwide
   - Global presence overview

4. **Additional Details**
   - Industry classification
   - Employee count
   - Year founded

5. **Interview Preparation**
   - 10 realistic interview questions
   - Professional suggested answers
   - Company-tailored responses

## 🎨 Design Highlights

### Color Palette
- **Primary Purple**: `#6366f1` - Main brand color
- **Secondary Pink**: `#ec4899` - Accent color
- **Golden Yellow**: `#fbbf24` - Stars and highlights
- **Green Success**: `#10b981` - Confirmation and success
- **Soft White**: `#f9fafb` - Backgrounds

### UI Components
- ✅ Smooth gradient backgrounds
- ✅ Rounded cards with shadow effects
- ✅ Animated loading spinner
- ✅ Slide-in message notifications
- ✅ Hover effects on cards
- ✅ Colorful badges and indicators

## 💻 Technical Stack

- **Pure HTML5** - Semantic markup
- **Modern CSS3** - Gradients, flexbox, grid, animations
- **Vanilla JavaScript** - No frameworks needed
- **Wikipedia API** - Live company data integration
- **Responsive Design** - Mobile, tablet, desktop

## 📱 Browser Support

✅ All modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

## 🔧 Advanced Features

### API Integration

The website uses:
1. **Wikipedia API** - Fetch company summaries and images
2. **Fallback Database** - 5 pre-loaded companies with full data
3. **Smart Search** - Handles typos and variations

### Smart Features
- **Responsive Images** - Automatically loads company logos
- **Error Handling** - Graceful fallbacks if data unavailable
- **Loading States** - Beautiful spinner during search
- **Message Notifications** - Success and error messages
- **Keyboard Support** - Press Enter to search

## 📊 Supported Companies (Pre-loaded)

These have complete data:
- 🍎 **Apple** - Consumer electronics & software
- 🔍 **Google** - Search & cloud services
- 💻 **Microsoft** - Enterprise software
- 📦 **Amazon** - E-commerce & AWS
- ⚡ **Tesla** - Electric vehicles

### Any Other Company!

Search for ANY company with a website:
- ✅ Nike, Coca-Cola, Facebook
- ✅ Samsung, LG, Sony
- ✅ BMW, Audi, Mercedes
- ✅ Netflix, Spotify, Disney
- ✅ JPMorgan, Goldman Sachs
- ✅ And thousands more!

## 🎓 Interview Preparation

The app includes:
- 10 carefully selected interview questions
- Professional answer suggestions
- General company-interview format
- Customizable for specific roles

Perfect for:
- Job seekers preparing for interviews
- Career changers researching companies
- Students learning about industries
- Professionals considering new opportunities

## 📁 File Structure

```
Check-the-company/
├── index.html      # Complete website (everything in one file!)
├── README.md       # This file
└── .gitignore      # Git configuration
```

## 🚀 Deployment

### Host Online for Free

**Option 1: GitHub Pages**
```bash
git push origin main
# Then enable GitHub Pages in repository settings
```

**Option 2: Any Web Host**
- Upload `index.html` to your server
- Share the URL
- Everyone can access it!

## 🛠️ Customization

### Add Your API Keys

To enable live company data:

1. Get Google Search API key from: https://console.cloud.google.com
2. Get OpenAI API key from: https://platform.openai.com/api-keys
3. Replace in the `API_CONFIG` section:

```javascript
const API_CONFIG = {
    GOOGLE_SEARCH_API: 'YOUR_KEY_HERE',
    OPENAI_API: 'YOUR_KEY_HERE',
};
```

### Add More Companies

Edit the `companyDatabase` object:

```javascript
'companyname': {
    name: 'Company Name',
    description: 'Company description...',
    website: 'https://example.com',
    image: 'https://logo-url.png',
    rating: 4.2,
    reviews: 500,
    areas: ['Area 1', 'Area 2', ...],
    locations: ['Location 1', 'Location 2', ...],
    industry: 'Industry Name',
    employees: '50,000+',
    founded: '2020'
}
```

### Customize Colors

Edit CSS variables:

```css
:root {
    --primary: #6366f1;      /* Main color */
    --secondary: #ec4899;    /* Accent */
    --accent: #f59e0b;       /* Highlights */
    --success: #10b981;      /* Success */
}
```

## 📈 Performance

- ⚡ **Instant Loading** - Single file, < 200KB
- 🚀 **Fast Searches** - Results in milliseconds
- 📱 **Responsive** - Works on all screen sizes
- 🔄 **API Cached** - Reduces redundant requests

## 🔒 Privacy

- ✅ No user data collection
- ✅ No tracking or analytics
- ✅ No cookies stored
- ✅ Fully private searches
- ✅ Offline capable

## 🎯 Use Cases

**For Job Seekers**
- Research companies before applying
- Prepare for interviews
- Understand company culture
- Explore career opportunities

**For Students**
- Learn about different industries
- Study company structures
- Prepare for career fairs
- Research for presentations

**For HR Professionals**
- Research competitors
- Benchmark company information
- Provide candidate resources
- Support employee development

**For Investors**
- Quick company overviews
- Industry research
- Market analysis
- Competitive landscape

## 🌟 Why Use This?

✨ **Beautiful Modern Design** - Eye-catching gradients and smooth animations
🎨 **Colorful Interface** - Vibrant, professional color scheme
📱 **Mobile Friendly** - Works perfectly on all devices
🌐 **Search Any Company** - Not limited to pre-loaded data
⚡ **Lightning Fast** - Instant results
🔓 **No Signup Required** - Start using immediately
📚 **Interview Ready** - Built-in preparation content
🎓 **Educational** - Learn about companies worldwide

## 🆘 Troubleshooting

**Company not found?**
- Try different spelling
- Use official company name
- Check if company has website

**Images not loading?**
- Check internet connection
- URL might be outdated
- Try refreshing page

**Search not working?**
- Ensure proper spelling
- Try simpler company names
- Clear browser cache

**Slow performance?**
- Close other browser tabs
- Reduce number of searches
- Check internet speed

## 📞 Support & Feedback

Found a bug or have a suggestion?
1. Check GitHub Issues
2. Create a new issue with details
3. Include screenshots if possible

## 📄 License

This project is open source and free to use.
Modify and share as you wish!

## 👨‍💻 Author

**Srishti Mehra**
- GitHub: [@SrishtiMehra26](https://github.com/SrishtiMehra26)
- Project: [Check The Company](https://github.com/SrishtiMehra26/Check-the-company)

## 🙏 Acknowledgments

Built with:
- HTML5 & CSS3
- Vanilla JavaScript
- Wikipedia API
- Modern web standards

## 🎉 Get Started Now!

1. Open `index.html`
2. Search for any company
3. Get instant insights
4. Prepare for interviews
5. Share with friends!

---

**Version**: 2.0.0  
**Last Updated**: March 2026  
**Status**: ✅ Production Ready  
**Theme**: Modern, Creative, User-Friendly

Enjoy discovering companies! 🚀
