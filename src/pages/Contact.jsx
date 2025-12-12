/* ==========================================
   CONTACT PAGE
   Contact information and form
   ========================================== */

import { useEffect } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { applyTextColorsForPage } from '../data/textColors';

function Contact() {

    // Apply page-specific text colors
    useEffect(() => {
        applyTextColorsForPage('contact');
    }, []);

    /* EDIT: Contact Information */
    const contactInfo = {
        email: "contact@yourbusiness.com",
        phone: "(555) 123-4567",
        address: "123 Business Street, City, State 12345",
        hours: "Monday - Friday: 9:00 AM - 5:00 PM"
    };

    /* EDIT: Social Media Links (optional) */
    const socialLinks = [
        { platform: "Facebook", url: "#" },
        { platform: "LinkedIn", url: "#" },
        { platform: "Instagram", url: "#" }
    ];

    return (
        <>
            {/* Hero Section */}
            <SectionWrapper pageKey="contact" sectionKey="hero">
                <section className="hero">
                    <h1>Get In Touch</h1>
                    <p>We'd love to hear from you and discuss how we can help</p>
                </section>
            </SectionWrapper>

            {/* Content Section */}
            <SectionWrapper pageKey="contact" sectionKey="content">
                <section className="section">
                    <div className="contact-container">

                        {/* Contact Details */}
                        <div className="contact-info-section">
                            <h2 className="contact-section-title">Contact Information</h2>

                            <div className="contact-item">
                                <h3 className="contact-label">Email</h3>
                                <p className="contact-value">
                                    <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                                </p>
                            </div>

                            <div className="contact-item">
                                <h3 className="contact-label">Phone</h3>
                                <p className="contact-value">
                                    <a href={`tel:${contactInfo.phone.replace(/[^0-9]/g, '')}`}>
                                        {contactInfo.phone}
                                    </a>
                                </p>
                            </div>

                            <div className="contact-item">
                                <h3 className="contact-label">Address</h3>
                                <p className="contact-value">{contactInfo.address}</p>
                            </div>

                            <div className="contact-item">
                                <h3 className="contact-label">Business Hours</h3>
                                <p className="contact-value">{contactInfo.hours}</p>
                            </div>

                            {/* Social Links */}
                            <div className="contact-item">
                                <h3 className="contact-label">Follow Us</h3>
                                <div className="social-links">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.url}
                                            className="social-link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {social.platform}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Contact Message */}
                        <div className="contact-message">
                            <h2 className="contact-section-title">Send Us a Message</h2>
                            <p className="contact-note">
                                Please reach out via email or phone. We typically respond within 24 hours during business days.
                            </p>
                        </div>

                    </div>
                </section>
            </SectionWrapper>
        </>
    );
}

export default Contact;
