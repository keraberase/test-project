import React from 'react';
import LogoInHeader from "../img/logo_HOCCCU.svg";
import Nav from "./Nav";
import { useTranslation } from "react-i18next";
import { useLanguage } from '../LanguageContext';

const Header = () => {
    const { t, i18n } = useTranslation();
    const { changeLanguage } = useLanguage();

    const handleButtonClickUa = () => {
        changeLanguage('uk_UA');
        i18n.changeLanguage('ua');
    };
    const handleButtonClickEn = () => {
        changeLanguage('en');
        i18n.changeLanguage('en');
    };

    return <header className='header'>
        <div className="content">
            <a href={"#main"}>
                <div className="logo-box">
                    <img src={LogoInHeader} alt="logo"/>
                    <p className="logo-text">{t("header.part1")}<br/>
                        {t("header.part2")}</p>
                </div>
            </a>
            <Nav/>
            <div className="mobileLanguageChange">
                <div className="changeLeng">
                    <button className='leng-links-mobile' onClick={handleButtonClickUa}>Українська</button>
                    <button className='leng-links-mobile' onClick={handleButtonClickEn}>English</button>
                </div>
            </div>
        </div>

    </header>;
}

export default Header;