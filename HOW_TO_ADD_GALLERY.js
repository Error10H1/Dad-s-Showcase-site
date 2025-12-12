/* ==========================================
   HOW TO ADD A NEW PHOTO GALLERY PAGE
   
   Follow these 4 easy steps to create any new gallery
   (Before & After, Commercial Work, Residential, etc.)
   ========================================== */

// EXAMPLE: Creating a "Before & After" gallery page

/* ==========================================
   STEP 1: Create Your Data File
   ========================================== */

// Create: src/data/beforeAfterData.js

export const beforeAfterProjects = [
    {
        folderName: "Kitchen Renovation",
        title: "Kitchen Transformation",
        description: "Complete kitchen remodel from dated to modern",
        images: [
            "before1.jpg",
            "during1.jpg",
            "after1.jpg"
        ]
    },
    {
        folderName: "Bathroom Update",
        title: "Bathroom Upgrade",
        description: "Modern bathroom renovation",
        images: [
            "before.jpg",
            "after.jpg"
        ]
    }
    // Add more projects...
];

// Helper function (copy from projectsData.js)
export function getProjectWithPaths(project) {
    return {
        ...project,
        images: project.images.map(img => `/images/${project.folderName}/${img}`)
    };
}


/* ==========================================
   STEP 2: Create Gallery Page
   ========================================== */

// Create: src/pages/BeforeAfter.jsx

import Gallery from '../components/Gallery';
import { beforeAfterProjects } from '../data/beforeAfterData';

function BeforeAfter() {
    return (
        <Gallery
            data={beforeAfterProjects}
            title="Before & After"
            subtitle="See the amazing transformations we've completed"
            basePath="/before-after"
        />
    );
}

export default BeforeAfter;


/* ==========================================
   STEP 3: Create Detail Page
   ========================================== */

// Create: src/pages/BeforeAfterDetail.jsx

import GalleryDetail from '../components/GalleryDetail';
import { beforeAfterProjects } from '../data/beforeAfterData';

function BeforeAfterDetail() {
    return (
        <GalleryDetail
            data={beforeAfterProjects}
            backPath="/before-after"
            backText="← Back to Before & After"
        />
    );
}

export default BeforeAfterDetail;


/* ==========================================
   STEP 4: Add Routes to App.jsx
   ========================================== */

// In App.jsx, add these imports:
import BeforeAfter from './pages/BeforeAfter';
import BeforeAfterDetail from './pages/BeforeAfterDetail';

// Add to navLinks array:
const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'Before & After', path: '/before-after' },  // NEW
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
];

// Add routes in the Routes section:
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/work" element={<Work />} />
    <Route path="/work/:projectId" element={<ProjectDetail />} />

    {/* NEW ROUTES */}
    <Route path="/before-after" element={<BeforeAfter />} />
    <Route path="/before-after/:projectId" element={<BeforeAfterDetail />} />

    <Route path="/services" element={<Services />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
</Routes>


/* ==========================================
   THAT'S IT! 
   
   Your new gallery is ready with:
   - Thumbnail grid with slideshows
   - Project detail pages
   - Fullscreen lightbox
   - Keyboard navigation
   
   All features work automatically!
   ========================================== */
