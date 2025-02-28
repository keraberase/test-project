import React from 'react';
import {useTranslation} from "react-i18next";
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
    const {t} = useTranslation();
    
    return <div className="gallery" id="gallery">
        <div className="content">
            <h1>{t("gallery.headline")}</h1>
            <div className="galleryBox">
                <div className="galleryImageBox"><img src={gi1} alt=""/></div>
                <div className="galleryImageBox"><img src={gi2} alt=""/></div>
                <div className="galleryImageBox"><img src={gi3} alt=""/></div>
                <div className="galleryImageBox"><img src={gi4} alt=""/></div>
                <div className="galleryImageBox"><img src={gi5} alt=""/></div>
                <div className="galleryImageBox"><img src={gi6} alt=""/></div>
                <div className="galleryImageBox"><img src={gi7} alt=""/></div>
                <div className="galleryImageBox"><img src={gi8} alt=""/></div>
                <div className="galleryImageBox"><img src={gi9} alt=""/></div>
                <div className="galleryImageBox"><img src={gi10} alt=""/></div>
            </div>
        </div>
    </div>
};

export default Gallery;
