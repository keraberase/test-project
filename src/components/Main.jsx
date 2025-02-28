import React from 'react';
import {useTranslation} from "react-i18next";
import sample from '../video/back-video.mp4';


const Main = () => {
    const {t} = useTranslation();

    return <div className="main">
        <div className="dark-mode-video">{}</div>
        <div className="background">
            <video className='videoTag' autoPlay loop muted>
                <source src={sample} type='video/mp4'/>
            </video>
        </div>
        <h1>{t("header.part1")}<br/>
            {t("header.part2")}</h1>
        <div className="mainCounterBox">
            <div className="counterItem">
                <p><span>193+</span><br/>{t("Tons.1")} <br/>{t("Tons.2")}</p>

            </div>
            <div className="counterItem">
                <p><span>390+</span><br/>{t("Settled people.1")} <br/>{t("Settled people.2")}</p>
            </div>
            <div className="counterItem">
                <p><span>83 000+</span><br/>{t("Received help.0")}<br/>{t("Received help.1")} <br/>{t("Received help.2")}</p>
            </div>
        </div>
    </div>
};
export default Main;