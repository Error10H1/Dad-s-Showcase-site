/* ==========================================
   ABOUT PAGE
   Tell your business story and showcase team
   ========================================== */

import { useEffect } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { applyTextColorsForPage } from '../data/textColors';

function About() {

    // Apply page-specific text colors
    useEffect(() => {
        applyTextColorsForPage('about');
    }, []);

    /* EDIT: Company/Business Information */
    const companyInfo = {
        name: "Your Business Name",
        founded: "2020",
        mission: "Our mission is to provide exceptional services and exceed client expectations through dedication, expertise, and innovation.",
        story: "Founded with a passion for quality and customer satisfaction, we have grown to become a trusted partner for businesses and individuals seeking professional services. Our commitment to excellence drives everything we do."
    };

    /* EDIT: Team Members */
    const teamMembers = [
        {
            name: "John Doe",
            role: "Founder & CEO",
            bio: "Brief bio about this team member and their expertise",
            image: "https://via.placeholder.com/300x300/34495e/ffffff?text=Team+Member"
        },
        {
            name: "Jane Smith",
            role: "Lead Specialist",
            bio: "Brief bio about this team member and their expertise",
            image: "https://via.placeholder.com/300x300/2c3e50/ffffff?text=Team+Member"
        },
        {
            name: "Mike Johnson",
            role: "Senior Consultant",
            bio: "Brief bio about this team member and their expertise",
            image: "https://via.placeholder.com/300x300/7f8c8d/ffffff?text=Team+Member"
        }
    ];

    /* EDIT: Company Values or Stats */
    const stats = [
        { number: "500+", label: "Projects Completed" },
        { number: "10+", label: "Years Experience" },
        { number: "100%", label: "Client Satisfaction" },
        { number: "24/7", label: "Support Available" }
    ];

    return (
        <>
            {/* Hero Section */}
            <SectionWrapper pageKey="about" sectionKey="hero">
                <section className="hero">
                    <h1>About {companyInfo.name}</h1>
                    <p>{companyInfo.mission}</p>
                </section>
            </SectionWrapper>

            {/* Content Section */}
            <SectionWrapper pageKey="about" sectionKey="content">
                {/* Company Story */}
                <section className="section">
                    <div className="content-container">
                        <h2 className="section-title">Our Story</h2>
                        <p className="about-text">{companyInfo.story}</p>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="section stats-section">
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <div className="stat-card" key={index}>
                                <div className="stat-number">{stat.number}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Team Section */}
                <section className="section">
                    <h2 className="section-title">Meet The Team</h2>
                    <div className="team-grid">
                        {teamMembers.map((member, index) => (
                            <div className="team-card" key={index}>
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="team-image"
                                />
                                <h3 className="team-name">{member.name}</h3>
                                <p className="team-role">{member.role}</p>
                                <p className="team-bio">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </SectionWrapper>
        </>
    );
}

export default About;
