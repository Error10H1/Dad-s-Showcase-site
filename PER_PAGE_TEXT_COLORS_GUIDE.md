# Per-Page Text Colors Guide

## 📝 How It Works

You can now set **different text colors for each page**!

## Configuration File: `/src/data/textColors.js`

### Structure:

```javascript
// GLOBAL DEFAULTS (used on all pages unless overridden)
export const defaultTextColors = {
  heroTitle: "#ffffff",      // White by default
  heroSubtitle: "#b8b8b8",   // Gray by default
  // ... etc
};

// PER-PAGE OVERRIDES
export const pageTextColors = {
  home: {
    heroTitle: "#000000",    // Black on home page only!
    heroSubtitle: "#000000", // Black on home page only!
  },
  
  work: {
    // Add work page overrides here
  },
  
  services: {
    // Add services page overrides here
  },
};
```

## Available Text Color Options

- `navText` - Navigation link text
- `navTextHover` - Nav link hover color
- `navBrandText` - Business name in navbar
- `heroTitle` - Main hero heading (H1)
- `heroSubtitle` - Hero description text
- `sectionTitle` - Section headings (H2, H3)
- `bodyText` - Main body text
- `bodyTextSecondary` - Secondary/muted text
- `projectTitle` - Project card titles
- `projectDate` - Project dates
- `projectDescription` - Project descriptions
- `linkColor` - Links
- `linkHover` - Link hover state
- `buttonText` - Button text
- `buttonBackground` - Button background
- `buttonHover` - Button hover background

## Examples

### Dark Text for Bright Background
```javascript
home: {
  heroTitle: "#000000",
  heroSubtitle: "#333333",
  sectionTitle: "#1a1a1a",
}
```

### Colored Accent Text
```javascript
work: {
  sectionTitle: "#e74c3c",  // Red section titles
  projectTitle: "#ffffff",
}
```

### Different Link Colors Per Page
```javascript
services: {
  linkColor: "#3498db",     // Blue links
  linkHover: "#2980b9",
}
```

## 💡 Pro Tips

1. **Only override what you need** - If you don't specify a color, it uses the global default
2. **Test readability** - Make sure text is readable against your page backgrounds
3. **Consistency** - Keep related text colors similar for better UX

---

**Current Setup:**
- Home page has **black** hero text for the bright background
- All other pages use **white** text (global defaults)
