import React from 'react';
import {useTranslation} from "react-i18next";
import ProjectCard from "./ProjectCard";


const Projects = () => {
    const {t} = useTranslation();

    return <div className="projects_section" id="projects">
        <div className="content">
            <h1>{t("projects")}</h1>
            <div className="projectCardsWrapper">
                <ProjectCard/>
            </div>
        </div>
    </div>

};

export default Projects;
