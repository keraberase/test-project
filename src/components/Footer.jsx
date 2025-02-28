import React from 'react';
import LogoInHeader from "../img/logo_HOCCCU.svg";
import {useTranslation} from "react-i18next";


const Footer = () => {
    const {t, i18n} = useTranslation();


    return <footer className="footer">
        <div className="content">
            <div className="logo-box">
                <img src={LogoInHeader} alt="logo"/>
                <p className="logo-text">{t("header.part1")}<br/>
                    {t("header.part2")}</p>
            </div>
            <div className="vertical-nav">
                <div>
                    <a href={"#news"} className='footer-nav-links'>{t("nav.news")}</a>
                </div>
                <div>
                    <a href={"#projects"} className='footer-nav-links'>{t("nav.projects")}</a>
                </div>
                <div>
                    <a href={"#gallery"} className='footer-nav-links'>{t("nav.gallery")}</a>
                </div>

            </div>
            <div className="footer-contacts">
                <p className="adress">{t("adress")}</p>
                <div className="footer-numbers">
                    <a href="tel:+380 (44) 549-05-14" className='footer-cont-num'>+380 (44) 549-05-14</a>
                    <a href="tel:+380 (50) 102-22-81" className='footer-cont-num'>+380 (50) 102-22-81</a>
                </div>
                <p className="footer-email"><a href="mailto:office@assoc.org.ua">E-mail: office@assoc.org.ua</a></p>
            </div>
            <div className="changeLeng-footer">
                <button className='leng-links-footer' onClick={() => i18n.changeLanguage("ua")}>Українська</button>
                <button className='leng-links-footer' onClick={() => i18n.changeLanguage("en")}>English</button>
            </div>
        </div>
    </footer>
}

export default Footer;