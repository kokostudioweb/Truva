// src/components/Gallery.jsx
import React, { useEffect } from "react";
import AOS from "aos";

const Gallery = ({ places }) => {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    return (
        <div className="gallery-container">
            <div className="masonry-grid">
                {places.map((place, index) => (
                    <div className="masonry-item" key={index} data-aos="fade-up">
                        <div className="image-wrapper">
                            <img src={place.image} alt={place.title} />
                            <div className="image-title">{place.title}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
