import React from 'react';
import {useTranslation} from "react-i18next";
// import background from "../img/backgroundImage.png"
import sample from "../video/remont.MP4";


const ProjectCard = () => {
    const {t, i18n} = useTranslation();

    return <div className="projectCardBox videoProjectCard">
        {/*<img src={background} alt="" className="projectCardBackgroundImage"/>*/}
        <div className="projectVideoBox">
            <video className='videoTag' autoPlay loop muted>
                <source src={sample} type='video/mp4'/>
            </video>
        </div>
        <div className="projectCardTitleBox">
            <p className="projectCardTitle">{t("project.remont-title")}</p>
        </div>
    </div>
};

export default ProjectCard;
