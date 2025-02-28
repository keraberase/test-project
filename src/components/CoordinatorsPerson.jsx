import React from 'react';
import {useTranslation} from "react-i18next";
import img1 from "../img/Гаврилюк_А.П 2.png";
import img2 from "../img/IMG_5072 1.png";


const CoordinatorsPerson = (props) => {
    const {t} = useTranslation();
    const id = props.id;
    if (id === "1"){
        return <div className="coordinatorsPerson">
            <div className="personImage">
                <img src={img1} alt=""/>
            </div>
            <div className="personTitle">
                <h2 className="personTitleHeadline">{t("SeniorBishop")}</h2>
                <p className="personPosition">{t("SeniorBishopPosition")}</p>
                <p className="personTitle">{t("SeniorBishopTitle")}</p>
            </div>
        </div>
    } else{
        return <div className="coordinatorsPerson">
            <div className="personTitle">
                <h2 className="personTitleHeadline">{t("HumanitarianCoordinator")}</h2>
                <p className="personPosition">{t("HumanitarianCoordinatorPosition")}</p>
            </div>
            <div className="personImage">
                <img src={img2} alt=""/>
            </div>
        </div>
    }
};

export default CoordinatorsPerson;
