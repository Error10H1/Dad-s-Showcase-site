# Theme System Guide

## 📝 Overview

Your website now has a **complete modular theming system** with two main configuration files:

## 1️⃣ Text Colors (`/src/data/textColors.js`)

Control **ALL text colors globally** from one file:

```javascript
export const textColors = {
  navText: "#ffffff",           // Nav link text
  navTextHover: "#e74c3c",      // Nav hover color
  heroTitle: "#ffffff",         // Hero heading
  projectTitle: "#ffffff",      // Project card titles
  projectDate: "#b8b8b8",       // Date text
  // ... and more!
};
```

**Just edit this file** and all text across the site updates automatically!

## 2️⃣ Section Backgrounds (`/src/data/pageSectionThemes.js`)

Control backgrounds for **each section** of **each page**:

- **Navbar** background
- **Hero** section background  
- **Content** section background

### Example Configuration:

```javascript
home: {
  navbar: {
    backgroundColor: "#2d2d2d",  // Dark nav bar
  },
  hero: {
    backgroundColor: "#1a1a1a",  // Darker hero
  },
  content: {
    backgroundImage: "/images/Grid - Background/your-image.jpg",
    opacity: 1,
    brightness: 79,
    saturate: 125,
    hue: 0,          // Color shift
    rotation: 0,     // Rotate image
  }
}
```

## 🎨 Available Settings

### For Each Section:
- `backgroundImage` - Path to image (or `null`)
- `backgroundColor` - Fallback color
- `opacity` - 0-1 (transparency)
- `blur` - 0-20 (blur in pixels)
- `brightness` - 0-200 (0=black, 100=normal, 200=very bright)
- `contrast` - 0-200
- `saturate` - 0-200 (0=grayscale, 100=normal, 200=super vibrant)
- `hue` - 0-360 (color shift in degrees)
- `rotation` - 0-360 (rotate the background image)

##  Quick Examples

### Subtle Background Image
```javascript
content: {
  backgroundImage: "/images/backgrounds/workshop.jpg",
  opacity: 0.3,     // Very subtle
  brightness: 70,   // Darken it
  blur: 3,          // Slight blur
}
```

### Gradient-Like Effect
```javascript
content: {
  backgroundColor: "#2d2d2d",
  hue: 30,          // Shift colors
  saturate: 150,    // More vibrant
}
```

### Rotated Grid Pattern
```javascript
content: {
  backgroundImage: "/images/grid.jpg",
  rotation: 45,     // Diagonal grid!
  brightness: 80,
}
```

## 📁 File Locations

- **Text Colors**: `/src/data/textColors.js`
- **Section Themes**: `/src/data/pageSectionThemes.js`
- **Page Themes** (legacy): `/src/data/pageThemes.js`

---

**Pro Tip**: Start with the content section and adjust brightness/opacity until text is readable!
