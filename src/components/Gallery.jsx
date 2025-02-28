import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import gi1 from "../img/gi1.png";
import gi2 from "../img/gi2.png";
import gi3 from "../img/gi3.png";
import gi4 from "../img/gi4.png";
import gi5 from "../img/gi5.png";
import gi6 from "../img/gi6.png";
import gi7 from "../img/gi7.png";
import gi8 from "../img/gi8.png";
import gi9 from "../img/gi9.png";
import gi10 from "../img/gi10.png";

const Gallery = () => {
    const { t } = useTranslation();
    const images = [gi1, gi2, gi3, gi4, gi5, gi6, gi7, gi8, gi9, gi10];
    
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    return (
        <div className="gallery" id="gallery">
            <div className="content">
                <h1>{t("gallery.headline")}</h1>
                <div className="galleryBox">
                    {images.map((imgSrc, index) => (
                        <div key={index} className="galleryImageBox">
                            <img 
                                src={imgSrc} 
                                alt="" 
                                onClick={() => { setPhotoIndex(index); setIsOpen(true); }}
                                style={{ cursor: 'pointer' }}
                            />
                        </div>
                    ))}
                </div>
            </div>
            
            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                />
            )}
        </div>
    );
};

export default Gallery;
