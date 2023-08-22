import React from "react";
import './Projects.scss';
import "@src/index.scss";
import "@assets/css/bootstrap.min.css"
import { Project } from "@src/types/Project";
import  ProjectCard from "@components/Cards/Cards";

import projectsData from './projects.json';


export function Projects() {
    return (
        <section id="projects-container" className="projects text-light" style={{ paddingTop: "150px", paddingBottom: "150px" }}>
            <div id="projects" className="container">
                <h2>PROJECTS</h2>
            
                <div className=" row">
                    {projectsData.map((project: Project, index: number) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>

    );
};