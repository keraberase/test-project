import React from 'react';
import {useTranslation} from "react-i18next";
import sample from "../video/IMG_9500.mp4";


const Story = () => {
    const {t} = useTranslation();

    return <div className="story">
        <h1>{t("stories.headline")}</h1>
        <video className='videoTag' loop controls={true}>
            <source src={sample} type='video/mp4'/>
        </video>
        <div className="content">
            <p className="storyTitle">{t("stories.title")}</p>
        </div>
    </div>
};

export default Story;
