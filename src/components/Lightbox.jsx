/* ==========================================
   LIGHTBOX COMPONENT
   Fullscreen image viewer with navigation
   ========================================== */

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

function Lightbox({ images, currentIndex, onClose, onNext, onPrev }) {
    useEffect(() => {
        // Close on Escape key
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        // Arrow key navigation
        const handleArrowKeys = (e) => {
            if (e.key === 'ArrowLeft') {
                onPrev();
            } else if (e.key === 'ArrowRight') {
                onNext();
            }
        };

        document.addEventListener('keydown', handleEscape);
        document.addEventListener('keydown', handleArrowKeys);

        // Prevent body scroll when lightbox is open
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.removeEventListener('keydown', handleArrowKeys);
            document.body.style.overflow = 'unset';
        };
    }, [onClose, onNext, onPrev]);

    const handleBackgroundClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return createPortal(
        <div className="lightbox-overlay" onClick={handleBackgroundClick}>
            <button className="lightbox-close" onClick={onClose}>
                ✕
            </button>

            {images.length > 1 && (
                <>
                    <button className="lightbox-nav lightbox-nav-prev" onClick={(e) => { e.stopPropagation(); onPrev(); }}>
                        &lt;
                    </button>
                    <button className="lightbox-nav lightbox-nav-next" onClick={(e) => { e.stopPropagation(); onNext(); }}>
                        &gt;
                    </button>
                </>
            )}

            <div className="lightbox-content">
                <img
                    src={images[currentIndex]}
                    alt={`Image ${currentIndex + 1}`}
                    className="lightbox-image"
                />
                {images.length > 1 && (
                    <div className="lightbox-counter">
                        {currentIndex + 1} / {images.length}
                    </div>
                )}
            </div>
        </div>,
        document.body
    );
}

export default Lightbox;
