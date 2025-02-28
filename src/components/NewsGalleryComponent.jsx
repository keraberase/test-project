import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const NewsGalleryComponent = (props) => {
    const { t } = useTranslation();
    const { id, title, date, mediaType, mediaUrl } = props;

    const [isImageOpen, setIsImageOpen] = useState(false);

    return (
        <div className="newsGalleryBox">
            {/* Якщо це зображення, додаємо функцію відкриття повноекранного перегляду */}
            {mediaType === "image" ? (
                <>
                    <div 
                        className="newsGalleryImageBox" 
                        onClick={() => setIsImageOpen(true)} 
                        style={{ cursor: 'pointer' }}
                    >
                        <img src={mediaUrl} alt="" />
                    </div>
                    <div className="newsGalleryTitleBox">
                        <p className="newsGalleryTitle">{title}</p>
                    </div>
                    <div className="newsDate">
                        <p>{date}</p>
                    </div>
                    {/* Модальне вікно для зображення */}
                    {isImageOpen && (
                        <Lightbox
                            mainSrc={mediaUrl}
                            onCloseRequest={() => setIsImageOpen(false)}
                        />
                    )}
                </>
            ) : (
                <>
                    <video className='videoTag' autoPlay loop muted>
                        <source src={mediaUrl} type='video/mp4' />
                    </video>
                    <div className="newsGalleryTitleBox">
                        <p className="newsGalleryTitle">{title}</p>
                    </div>
                    <div className="newsDate">
                        <p>{date}</p>
                    </div>
                </>
            )}
        </div>
    );
};

export default NewsGalleryComponent;
