/* ==========================================
   SERVICES PAGE
   List all services offered by the business
   ========================================== */

import { useEffect } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { applyTextColorsForPage } from '../data/textColors';

function Services() {

    // Apply page-specific text colors
    useEffect(() => {
        applyTextColorsForPage('services');
    }, []);

    /* EDIT: Add your services here */
    const services = [
        {
            title: "Service Category 1",
            description: "Detailed description of the first service offering and what it includes",
            features: [
                "Key feature or benefit 1",
                "Key feature or benefit 2",
                "Key feature or benefit 3"
            ]
        },
        {
            title: "Service Category 2",
            description: "Detailed description of the second service offering and what it includes",
            features: [
                "Key feature or benefit 1",
                "Key feature or benefit 2",
                "Key feature or benefit 3"
            ]
        },
        {
            title: "Service Category 3",
            description: "Detailed description of the third service offering and what it includes",
            features: [
                "Key feature or benefit 1",
                "Key feature or benefit 2",
                "Key feature or benefit 3"
            ]
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <SectionWrapper pageKey="services" sectionKey="hero">
                <section className="hero">
                    <h1>Our Services</h1>
                    <p>Professional solutions tailored to your needs</p>
                </section>
            </SectionWrapper>

            {/* Content Section */}
            <SectionWrapper pageKey="services" sectionKey="content">
                <section className="section">
                    <div className="services-container">
                        {services.map((service, index) => (
                            <div className="service-card" key={index}>
                                <h2 className="service-title">{service.title}</h2>
                                <p className="service-description">{service.description}</p>
                                <ul className="service-features">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
            </SectionWrapper>
        </>
    );
}

export default Services;
