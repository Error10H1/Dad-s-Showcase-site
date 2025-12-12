import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import ImageSlideshow from '../components/ImageSlideshow';
import { getProjectWithPaths } from '../data/projectsData';
import SectionWrapper from '../components/SectionWrapper';
import { applyTextColorsForPage } from '../data/textColors';

function Gallery({ data, title, subtitle, basePath, pageKey = "work" }) {

    // Apply page-specific text colors
    useEffect(() => {
        applyTextColorsForPage(pageKey);
    }, [pageKey]);

    // Convert project data to include full image paths
    const projectsWithPaths = data.map(getProjectWithPaths);

    return (
        <>
            {/* Hero Section */}
            <SectionWrapper pageKey={pageKey} sectionKey="hero">
                <section className="hero">
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                </section>
            </SectionWrapper>

            {/* Content Section */}
            <SectionWrapper pageKey={pageKey} sectionKey="content">
                <section className="section">
                    <div className="work-grid">
                        {projectsWithPaths.map((project, index) => (
                            <Link to={`${basePath}/${index}`} key={index} className="work-thumbnail">
                                <div className="work-thumbnail-image">
                                    <ImageSlideshow
                                        images={project.images}
                                        alt={project.title}
                                        className="thumbnail-image"
                                    />
                                </div>
                                <div className="work-thumbnail-title">
                                    {project.title} {project.date && <span style={{ color: '#b8b8b8', fontSize: '0.9rem' }}>• {project.date}</span>}
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </SectionWrapper>
        </>
    );
}

export default Gallery;
