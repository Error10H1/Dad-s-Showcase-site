import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProjectWithPaths } from '../data/projectsData';
import Lightbox from '../components/Lightbox';
import SectionWrapper from '../components/SectionWrapper';
import { applyTextColorsForPage } from '../data/textColors';

function GalleryDetail({ data, backPath, backText = "← Back to Gallery", pageKey = "projectDetail" }) {
    const { projectId } = useParams();
    const [lightboxIndex, setLightboxIndex] = useState(null);

    // Apply page-specific text colors
    useEffect(() => {
        applyTextColorsForPage(pageKey);
    }, [pageKey]);

    // Find the project by index
    const projectIndex = parseInt(projectId);
    const project = data[projectIndex];

    if (!project) {
        return (
            <SectionWrapper pageKey={pageKey} sectionKey="hero">
                <section className="hero">
                    <h1>Project Not Found</h1>
                    <p><Link to={backPath}>{backText}</Link></p>
                </section>
            </SectionWrapper>
        );
    }

    const projectWithPaths = getProjectWithPaths(project);

    const openLightbox = (index) => {
        setLightboxIndex(index);
    };

    const closeLightbox = () => {
        setLightboxIndex(null);
    };

    const nextImage = () => {
        setLightboxIndex((prev) => (prev + 1) % projectWithPaths.images.length);
    };

    const prevImage = () => {
        setLightboxIndex((prev) =>
            prev === 0 ? projectWithPaths.images.length - 1 : prev - 1
        );
    };

    return (
        <>
            {/* Hero Section */}
            <SectionWrapper pageKey={pageKey} sectionKey="hero">
                <section className="hero">
                    <h1>{project.title} {project.date && <span style={{ color: '#b8b8b8', fontWeight: 'normal', fontSize: '0.8em' }}>• {project.date}</span>}</h1>
                    <p>{project.description}</p>
                    <Link to={backPath} className="back-link">{backText}</Link>
                </section>
            </SectionWrapper>

            {/* Content Section */}
            <SectionWrapper pageKey={pageKey} sectionKey="content">
                <section className="section">
                    <div className="project-images-grid">
                        {projectWithPaths.images.map((image, index) => (
                            <div className="project-image-item" key={index} onClick={() => openLightbox(index)}>
                                <img
                                    src={image}
                                    alt={`${project.title} - Image ${index + 1}`}
                                    className="project-detail-image"
                                />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Lightbox */}
                {lightboxIndex !== null && (
                    <Lightbox
                        images={projectWithPaths.images}
                        currentIndex={lightboxIndex}
                        onClose={closeLightbox}
                        onNext={nextImage}
                        onPrev={prevImage}
                    />
                )}
            </SectionWrapper>
        </>
    );
}

export default GalleryDetail;
