/* ==========================================
   WORK PAGE
   Uses the generic Gallery component
   ========================================== */

import Gallery from '../components/Gallery';
import { projects } from '../data/projectsData';

function Work() {
    return (
        <Gallery
            data={projects}
            title="Our Work"
            subtitle="Browse through our completed projects and see quality in action"
            basePath="/work"
        />
    );
}

export default Work;
