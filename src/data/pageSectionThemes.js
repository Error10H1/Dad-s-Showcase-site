/* ==========================================
   SECTION-BASED THEMES CONFIGURATION
   
   Control backgrounds for each section independently:
   - Navbar
   - Hero
   - Content sections
   
   Each page can have different settings for each section
   ========================================== */

export const sectionThemes = {

    // HOME PAGE SECTIONS
    home: {
        navbar: {
            backgroundImage: null,
            backgroundColor: "#2d2d2d",
            opacity: 1,
            blur: 0,
            brightness: 100,
            contrast: 100,
            saturate: 100,
            hue: 0,
        },
        hero: {
            backgroundImage: "/images/Grid - Background/pexels-lamiko-3616764.jpg",
            backgroundColor: "#1a1a1a",
            opacity: 1,
            blur: 0,
            brightness: 95,
            contrast: 100,
            saturate: 100,
            hue: 0,
        },
        content: {
            backgroundImage: "/images/Grid - Background/pexels-fwstudio-33348-129733.jpg",
            backgroundColor: "#1a1a1a",
            opacity: 1,
            blur: 0,
            brightness: 70,
            contrast: 100,
            saturate: 125,
            hue: 0,
            rotation: 0,
        }
    },

    // WORK PAGE SECTIONS
    work: {
        navbar: {
            backgroundImage: null,
            backgroundColor: "#2d2d2d",
            opacity: 1,
            blur: 0,
            brightness: 100,
            contrast: 100,
            saturate: 100,
            hue: 0,
        },
        hero: {
            backgroundImage: null,
            backgroundColor: "#1a1a1a",
            opacity: 1,
            blur: 0,
            brightness: 100,
            contrast: 100,
            saturate: 100,
            hue: 0,
        },
        content: {
            backgroundImage: null,
            backgroundColor: "#1a1a1a",
            opacity: 1,
            blur: 0,
            brightness: 100,
            contrast: 100,
            saturate: 100,
            hue: 0,
            rotation: 0,
        }
    },

    // SERVICES PAGE SECTIONS
    services: {
        navbar: {
            backgroundImage: null,
            backgroundColor: "#2d2d2d",
            opacity: 1,
            blur: 0,
            brightness: 100,
            contrast: 100,
            saturate: 100,
            hue: 0,
        },
        hero: {
            backgroundImage: null,
            backgroundColor: "#1a1a1a",
            opacity: 1,
            blur: 0,
            brightness: 100,
            contrast: 100,
            saturate: 100,
            hue: 0,
        },
        content: {
            backgroundImage: null,
            backgroundColor: "#1a1a1a",
            opacity: 1,
            blur: 0,
            brightness: 100,
            contrast: 100,
            saturate: 100,
            hue: 0,
            rotation: 0,
        }
    },

    // ABOUT PAGE SECTIONS
    about: {
        navbar: {
            backgroundImage: null,
            backgroundColor: "#2d2d2d",
            opacity: 1,
            blur: 0,
            brightness: 100,
            contrast: 100,
            saturate: 100,
            hue: 0,
        },
        hero: {
            backgroundImage: null,
            backgroundColor: "#1a1a1a",
            opacity: 1,
            blur: 0,
            brightness: 100,
            contrast: 100,
            saturate: 100,
            hue: 0,
        },
        content: {
            backgroundImage: null,
            backgroundColor: "#1a1a1a",
            opacity: 1,
            blur: 0,
            brightness: 100,
            contrast: 100,
            saturate: 100,
            hue: 0,
            rotation: 0,
        }
    },

    // CONTACT PAGE SECTIONS
    contact: {
        navbar: {
            backgroundImage: null,
            backgroundColor: "#2d2d2d",
            opacity: 1,
            blur: 0,
            brightness: 100,
            contrast: 100,
            saturate: 100,
            hue: 0,
        },
        hero: {
            backgroundImage: null,
            backgroundColor: "#1a1a1a",
            opacity: 1,
            blur: 0,
            brightness: 100,
            contrast: 100,
            saturate: 100,
            hue: 0,
        },
        content: {
            backgroundImage: null,
            backgroundColor: "#1a1a1a",
            opacity: 1,
            blur: 0,
            brightness: 100,
            contrast: 100,
            saturate: 100,
            hue: 0,
            rotation: 0,
        }
    },

    // PROJECT DETAIL PAGE SECTIONS
    projectDetail: {
        navbar: {
            backgroundImage: null,
            backgroundColor: "#2d2d2d",
            opacity: 1,
            blur: 0,
            brightness: 100,
            contrast: 100,
            saturate: 100,
            hue: 0,
        },
        hero: {
            backgroundImage: null,
            backgroundColor: "#1a1a1a",
            opacity: 1,
            blur: 0,
            brightness: 100,
            contrast: 100,
            saturate: 100,
            hue: 0,
        },
        content: {
            backgroundImage: null,
            backgroundColor: "#1a1a1a",
            opacity: 1,
            blur: 0,
            brightness: 100,
            contrast: 100,
            saturate: 100,
            hue: 0,
            rotation: 0,
        }
    },

    // Add more pages as needed...
};

// Helper function to get section background style
export function getSectionBackgroundStyle(pageKey, sectionKey) {
    const pageSections = sectionThemes[pageKey];
    if (!pageSections) return {};

    const section = pageSections[sectionKey];
    if (!section) return {};

    const style = {};

    // Set background
    if (section.backgroundImage) {
        style.backgroundImage = `url('${section.backgroundImage}')`;
        style.backgroundSize = 'cover';
        style.backgroundPosition = 'center';
        style.backgroundAttachment = 'fixed';
    } else if (section.backgroundColor) {
        style.backgroundColor = section.backgroundColor;
    }

    // Build filter string
    const filters = [];
    if (section.blur > 0) filters.push(`blur(${section.blur}px)`);
    if (section.brightness !== 100) filters.push(`brightness(${section.brightness}%)`);
    if (section.contrast !== 100) filters.push(`contrast(${section.contrast}%)`);
    if (section.saturate !== 100) filters.push(`saturate(${section.saturate}%)`);
    if (section.hue !== 0) filters.push(`hue-rotate(${section.hue}deg)`);

    if (filters.length > 0) {
        style.filter = filters.join(' ');
    }

    // Build transform for rotation
    const transforms = [];
    if (section.rotation && section.rotation !== 0) {
        transforms.push(`rotate(${section.rotation}deg)`);
    }

    if (transforms.length > 0) {
        style.transform = transforms.join(' ');
        style.transformOrigin = 'center center';
    }

    if (section.opacity !== 1) {
        style.opacity = section.opacity;
    }

    return style;
}
