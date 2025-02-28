import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const NewsPreview = (props) => {
    const { t } = useTranslation();
    const { id, title, date, mediaType, mediaUrl } = props;
    
    const [isOpen, setIsOpen] = useState(false);

    // Функція для закриття модального вікна
    const handleClose = () => setIsOpen(false);

    return (
        <div className="newsPreviewBox">
            <div className="content">
                <div className="newsImageBox" onClick={() => setIsOpen(true)} style={{ cursor: 'pointer' }}>
                    {mediaType === "image" ? (
                        <img src={mediaUrl} alt="" />
                    ) : mediaType === "video" ? (
                        <video className='videoTag' autoPlay loop muted>
                            <source src={mediaUrl} type='video/mp4' />
                        </video>
                    ) : null}
                </div>
                <div className="newsPreviewTitleBox">
                    <div className="date">
                        <p className="date-text">{date}</p>
                    </div>
                    <h3>{title}</h3>
                    <div className="newsPreviewTitle hidden"></div>
                </div>
            </div>

            {/* Модальне вікно для зображення */}
            {isOpen && mediaType === "image" && (
                <Lightbox
                    mainSrc={mediaUrl}
                    onCloseRequest={handleClose}
                />
            )}

            {/* Модальне вікно для відео */}
            {isOpen && mediaType === "video" && (
                <div className="videoLightbox" onClick={handleClose}>
                    <div className="videoContent">
                        <video controls autoPlay style={{ width: '100%', height: '100%' }}>
                            <source src={mediaUrl} type="video/mp4" />
                        </video>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NewsPreview;
