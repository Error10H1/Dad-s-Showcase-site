/* ==========================================
   IMAGE SLIDESHOW COMPONENT
   Automatically cycles through images with fade effect
   ========================================== */

import { useState, useEffect } from 'react';

function ImageSlideshow({ images, alt, className }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        // Only set up slideshow if there are multiple images
        if (images.length <= 1) return;

        // Timer for holding the image (5 seconds)
        const holdTimer = setTimeout(() => {
            // Start fade transition
            setIsTransitioning(true);

            // After fade duration (0.7 seconds), change image and fade back in
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                setIsTransitioning(false);
            }, 700);
        }, 5000);

        return () => {
            clearTimeout(holdTimer);
        };
    }, [currentIndex, images.length]);

    return (
        <div className="slideshow-container">
            <img
                src={images[currentIndex]}
                alt={alt}
                className={`${className} ${isTransitioning ? 'fade-out' : 'fade-in'}`}
            />
        </div>
    );
}

export default ImageSlideshow;
