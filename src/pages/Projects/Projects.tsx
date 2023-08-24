import React from "react";
import './Projects.scss';
import "@src/index.scss";
import "@assets/css/bootstrap.min.css"
import { Project } from "@src/types/Project";
import { CTA } from "@components/CTA/CTA";
import  ProjectCard from "@src/components/Cards/ProjectCards";

import projectsData from '@pages/Projects/ProjectsList';


export function Projects() {
    return (
        <>
        <section id="projects-container" className="projects text-light" style={{ paddingTop: "100px", paddingBottom: "50px" }}>
            <div id="projects" className="container">
                <h2>PROJECTS</h2>
            
                <div className=" row">
                    {projectsData.map((project: Project, index: number) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
        <CTA />
        </>

    );
};