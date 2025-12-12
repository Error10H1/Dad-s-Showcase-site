/* ==========================================
   GLOBAL & PER-PAGE TEXT COLORS CONFIGURATION
   
   Control text colors globally and override per-page
   ========================================== */

// DEFAULT GLOBAL COLORS (used unless overridden per-page)
export const defaultTextColors = {
    navText: "#ffffff",
    navTextHover: "#e74c3c",
    navBrandText: "#ffffff",
    heroTitle: "#ffffff",
    heroSubtitle: "#b8b8b8",
    sectionTitle: "#ffffff",
    bodyText: "#ffffff",
    bodyTextSecondary: "#b8b8b8",
    projectTitle: "#ffffff",
    projectDate: "#b8b8b8",
    projectDescription: "#b8b8b8",
    linkColor: "#e74c3c",
    linkHover: "#c0392b",
    buttonText: "#ffffff",
    buttonBackground: "#e74c3c",
    buttonHover: "#c0392b",
};

// PER-PAGE COLOR OVERRIDES
// Only specify colors you want to change from defaults
export const pageTextColors = {

    // HOME PAGE - Black text for bright hero background
    home: {
        heroTitle: "#000000",
        heroSubtitle: "#000000",
    },

    // WORK PAGE - Use defaults
    work: {},

    // Add more pages as needed...
};

// Get text colors for a specific page (merges defaults with page overrides)
export function getPageTextColors(pageKey) {
    const pageOverrides = pageTextColors[pageKey] || {};
    return { ...defaultTextColors, ...pageOverrides };
}

// Apply text colors for a specific page
export function applyTextColorsForPage(pageKey) {
    const colors = getPageTextColors(pageKey);
    const root = document.documentElement;

    root.style.setProperty('--nav-text', colors.navText);
    root.style.setProperty('--nav-text-hover', colors.navTextHover);
    root.style.setProperty('--nav-brand-text', colors.navBrandText);
    root.style.setProperty('--hero-title', colors.heroTitle);
    root.style.setProperty('--hero-subtitle', colors.heroSubtitle);
    root.style.setProperty('--section-title', colors.sectionTitle);
    root.style.setProperty('--body-text', colors.bodyText);
    root.style.setProperty('--body-text-secondary', colors.bodyTextSecondary);
    root.style.setProperty('--project-title', colors.projectTitle);
    root.style.setProperty('--project-date', colors.projectDate);
    root.style.setProperty('--project-desc', colors.projectDescription);
    root.style.setProperty('--link-color', colors.linkColor);
    root.style.setProperty('--link-hover', colors.linkHover);
    root.style.setProperty('--button-text', colors.buttonText);
    root.style.setProperty('--button-bg', colors.buttonBackground);
    root.style.setProperty('--button-hover', colors.buttonHover);
}

// Legacy function for backwards compatibility
export function applyTextColors() {
    applyTextColorsForPage('default');
}
