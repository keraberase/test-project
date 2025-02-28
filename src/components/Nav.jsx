import React from 'react';
import { useTranslation } from "react-i18next";
import { useLanguage } from '../LanguageContext';

const Nav = () => {
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


    return <nav className='nav'>
        <div>
            <a href="#news" className='nav-links'>{t("nav.news")}</a>
        </div>
        <div>
            <a href="#projects" className='nav-links'>{t("nav.projects")}</a>
        </div>
        <div>
            <a href="#gallery" className='nav-links'>{t("nav.gallery")}</a>
        </div>
        <div className="nav-contacts">
            <a href="tel:+380 (44) 549-05-14" className='contact-numbers'>+380 (44) 549-05-14</a>
            <a href="tel:+380 (50) 102-22-81" className='contact-numbers'>+380 (50) 102-22-81</a>
        </div>
        <div className="changeLeng">
            <button className='leng-links' onClick={handleButtonClickUa}>Українська</button>
            <button className='leng-links' onClick={handleButtonClickEn}>English</button>
        </div>
    </nav>;
}

export default Nav;