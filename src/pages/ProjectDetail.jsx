/* ==========================================
   PROJECT DETAIL PAGE (WORK)
   Uses the generic GalleryDetail component
   ========================================== */

import GalleryDetail from '../components/GalleryDetail';
import { projects } from '../data/projectsData';

function ProjectDetail() {
    return (
        <GalleryDetail
            data={projects}
            backPath="/work"
            backText="← Back to All Work"
        />
    );
}

export default ProjectDetail;
