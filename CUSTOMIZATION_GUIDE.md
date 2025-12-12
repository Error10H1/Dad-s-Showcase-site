# Customization Guide

## 📸 Adding New Photo Galleries

The system is **fully modular**! You can easily create new gallery pages (Before & After, Commercial Work, etc.) by following these steps:

### Quick Steps:
1. **Create data file** in `/src/data/` (copy `projectsData.js` format)
2. **Create page file** in `/src/pages/` (copy `Work.jsx` and update imports)
3. **Create detail page** in `/src/pages/` (copy `ProjectDetail.jsx` and update imports)
4. **Add routes** in `App.jsx`

📖 **See detailed examples in:** `HOW_TO_ADD_GALLERY.js` (in project root)

## 📝 Editing Existing Content

### Changing Titles and Text

**Navigation/Business Name** - `src/App.jsx` line 34:
```javascript
const businessName = "Your Business Name";
```

**Homepage Text** - `src/pages/Home.jsx`:
- Lines 15-18: Hero section title and subtitle
- Lines 24-115: Showcase items and latest work

**Work Page** - Just change props in `src/pages/Work.jsx`:
```javascript
<Gallery 
  title="New Title"
  subtitle="New description"
/>
```

**Other Pages** - Each has clearly marked editable sections:
- `src/pages/Services.jsx` - Service cards and features
- `src/pages/About.jsx` - Company info and team
- `src/pages/Contact.jsx` - Contact details

## 🖼️ Adding Images

### For Work/Gallery Pages:
1. Create folder: `/public/images/Your Project Name/`
2. Add images to that folder
3. Edit `/src/data/projectsData.js`:
   ```javascript
   {
     folderName: "Your Project Name",
     title: "Display Title",
     description: "Project description",
     images: ["photo1.jpg", "photo2.jpg", "photo3.jpg"]
   }
   ```

**That's it!** The system automatically:
- Creates thumbnail with slideshow
- Creates detail page
- Sets up lightbox navigation

### For Other Pages:
- Place images in `/public/images/`
- Reference as `/images/your-image.jpg` in the code

## 🎨 Changing Theme Colors

Edit `/src/index.css` lines 12-19:

```css
:root {
  --bg-primary: #1a1a1a;      /* Page background */
  --bg-secondary: #2d2d2d;    /* Navigation bar */
  --bg-card: #242424;         /* Card backgrounds */
  --text-primary: #ffffff;    /* Main text */
  --text-secondary: #b8b8b8;  /* Secondary text */
  --accent-color: #e74c3c;    /* Links, highlights */
  --accent-hover: #c0392b;    /* Hover state */
}
```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Gallery.jsx      # Generic gallery grid
│   ├── GalleryDetail.jsx # Generic detail page
│   ├── ImageSlideshow.jsx
│   └── Lightbox.jsx
├── data/               # All your content data
│   └── projectsData.js
├── pages/              # Your website pages
│   ├── Work.jsx
│   ├── ProjectDetail.jsx
│   ├── Home.jsx
│   ├── Services.jsx
│   ├── About.jsx
│   └── Contact.jsx
└── index.css          # All styling

public/
└── images/            # All your images
    └── First Project/ # Each project folder
```

## ✅ Quick Checklist

**First Time Setup:**
- [ ] Change business name in `App.jsx`
- [ ] Update homepage text in `Home.jsx`
- [ ] Change accent color in `index.css`
- [ ] Add your project images to `/public/images/`
- [ ] Update `projectsData.js` with your projects
- [ ] Edit contact info in `Contact.jsx`
- [ ] Update services in `Services.jsx`
- [ ] Add team members in `About.jsx`

## 💡 Tips

- **Image Sizes**: Use at least 1920x1080 for best quality
- **Color Codes**: Use hex format like `#e74c3c`
- **Testing**: Always check in browser after changes
- **File Names**: Avoid spaces and special characters in image names

## 🚀 Running the Site

Development server:
```bash
npm run dev
```

Visit: `http://localhost:5173/`

---

**Need help?** Check `HOW_TO_ADD_GALLERY.js` for step-by-step gallery creation examples!
