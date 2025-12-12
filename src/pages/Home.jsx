import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { projects, getProjectWithPaths } from '../data/projectsData';
import SectionWrapper from '../components/SectionWrapper';
import { applyTextColorsForPage } from '../data/textColors';

function Home() {

    // Apply page-specific text colors
    useEffect(() => {
        applyTextColorsForPage('home');
    }, []);

    // Get projects with full image paths
    const projectsWithPaths = projects.map(getProjectWithPaths);

    // Featured: Show first 3 projects (or all if less than 3)
    const featuredProjects = projectsWithPaths.slice(0, 3);

    return (
        <>
            {/* HERO SECTION - Separate background */}
            <SectionWrapper pageKey="home" sectionKey="hero">
                <section className="hero">
                    <h1>Professional Business Services</h1>
                    <p>Quality work and exceptional results</p>
                </section>
            </SectionWrapper>

            {/* CONTENT SECTIONS - Separate background */}
            <SectionWrapper pageKey="home" sectionKey="content">
                {/* FEATURED PROJECTS SECTION */}
                <section className="section">
                    <h2 className="section-title">Recent Projects</h2>
                    <div className="work-grid">
                        {featuredProjects.map((project, index) => (
                            <Link to={`/work/${index}`} key={index} className="work-thumbnail">
                                <div className="work-thumbnail-image">
                                    <img
                                        src={project.images[0]}
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

                {/* LATEST WORK SECTION - Shows all projects */}
                <section className="section">
                    <h2 className="section-title">All Projects</h2>
                    <div className="work-grid">
                        {projectsWithPaths.map((project, index) => (
                            <Link to={`/work/${index}`} key={index} className="work-thumbnail">
                                <div className="work-thumbnail-image">
                                    <img
                                        src={project.images[0]}
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

export default Home;
