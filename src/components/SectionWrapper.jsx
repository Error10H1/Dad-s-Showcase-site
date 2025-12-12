/* ==========================================
   SECTION WRAPPER COMPONENT
   
   Wraps individual sections with themed backgrounds
   ========================================== */

import { getSectionBackgroundStyle } from '../data/pageSectionThemes';

function SectionWrapper({ pageKey, sectionKey, children, className = "" }) {
    const backgroundStyle = getSectionBackgroundStyle(pageKey, sectionKey);

    return (
        <div className={`section-wrapper ${className}`}>
            {/* Background Layer */}
            <div className="section-background" style={backgroundStyle}></div>

            {/* Content Layer */}
            <div className="section-content">
                {children}
            </div>
        </div>
    );
}

export default SectionWrapper;
