# Curioo Website

A beautiful, modern landing page for **Curioo** - the kids educational app.

## 🚀 Quick Start

1. Open `index.html` in your browser to preview the website locally
2. Or deploy to any static hosting (Netlify, Vercel, GitHub Pages, etc.)

## 📁 Structure

```
website/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript for interactions
├── assets/             # Images and icons
│   ├── apple-icon.svg
│   ├── google-play-icon.svg
│   └── ... (add your screenshots here)
└── README.md           # This file
```

## 🖼️ Required Assets

You need to add the following images to the `assets/` folder:

1. **App Screenshots** (for phone mockup and gallery):
   - `app-screenshot-1.png` - Main app screenshot for hero
   - `screen-1.png` - Stories screen
   - `screen-2.png` - Games screen
   - `screen-3.png` - Art screen
   - `screen-4.png` - Progress screen

2. **Branding**:
   - `favicon.png` - Browser favicon (32x32 or 64x64)
   - `og-image.png` - Social media sharing image (1200x630)

## 🎨 Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary: #6366F1;       /* Main brand color */
    --secondary: #F472B6;     /* Accent color */
    /* ... more colors */
}
```

### Store Links
Update the App Store and Play Store links in `index.html`:
- Search for `href="#"` in the download buttons
- Replace with actual store URLs

### Content
- Edit testimonials, pricing, FAQ directly in `index.html`
- All text is in plain HTML for easy editing

## 📱 Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth scroll animations
- ✅ FAQ accordion
- ✅ Stats counter animation
- ✅ Phone mockup with tilt effect
- ✅ Floating card parallax
- ✅ Gallery auto-scroll
- ✅ Mobile hamburger menu

## 🌐 Deployment

### Netlify (Recommended)
1. Drag & drop the `website` folder to Netlify
2. Set custom domain to `curioo.in`

### Vercel
1. Connect GitHub repo
2. Set root directory to `website`
3. Deploy

### GitHub Pages
1. Push to `gh-pages` branch
2. Configure custom domain in settings

## 📞 Support

For any questions, contact the Curioo team.

---

Made with ❤️ for Curioo
