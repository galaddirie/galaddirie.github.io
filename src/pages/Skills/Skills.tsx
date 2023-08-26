import React from "react";
import './Skills.scss';
import "@src/index.scss";
import "@assets/css/bootstrap.min.css"

import SkillCard from "@src/components/Cards/SkillCard";
import { SkillCardProps } from "@src/types/Skills";

import frontendImage  from "@src/assets/img/skills/frontend-downscale.png"
import backendImage  from "@src/assets/img/skills/backend-downscale.png"
import devopsImage  from "@src/assets/img/skills/devops-downscale.png"

const SKILLS = [
    { 
        name: "Frontend",
        skills: [
            { name: "React", icon: "fab fa-react" },
            { name: "HTML", icon: "fab fa-html5" },
            { name: "CSS", icon: "fab fa-css3-alt" },
            { name: "Javascript", icon: "fab fa-js-square" },
            { name: "Typescript", icon: "fab fa-js-square" },
            { name: "Tailwind", icon: "" },
            { name: "SASS", icon: "" },
            { name: "Material UI", icon: "" },
            { name: "Bootstrap", icon: "fab fa-bootstrap" },
            { name: "jQuery", icon: "fab fa-js-square" },
            { name: "WordPress", icon: "fab fa-wordpress" },
            { name: "WCAG", icon: "" },
        ],
        description: "Your description here...",
        image: frontendImage
    },
    { 
        name: "Backend",
        skills: [
            { name: "Python", icon: "fab fa-python" },
            { name: "Go (Golang)", icon: "" },
            { name: "NodeJS", icon: "fab fa-node-js" },
            { name: "ExpressJS", icon: "fab fa-node-js" },
            { name: "Django", icon: "fab fa-python" },
            { name: "Django REST Framework", icon: "fab fa-python" },
            { name: "Flask", icon: "fab fa-python" },
            { name: "Redis", icon: "" },
            { name: "Kafka", icon: "" },
            { name: "MySQL", icon: "fab fa-mysql" },
            { name: "PostgreSQL", icon: "fab fa-postgresql" },
            { name: "MongoDB", icon: "fab fa-mdb" },
            { name: "GraphQL", icon: "fab fa-graphql" }
        ],
        description: "Your description here...",
        image: backendImage
    },
    { 
        name: "DevOps",
        skills: [
            { name: "Docker", icon: "fab fa-docker" },
            { name: "Terraform", icon: "" },
            { name: "Google Cloud Platform", icon: "fab fa-google" },
            { name: "Azure", icon: "fab fa-windows" },
            { name: "AWS", icon: "fab fa-aws" },
            { name: "Heroku", icon: "fab fa-heroku" },
            { name: "Elasticsearch", icon: "" },
            { name: "Logstash", icon: "" },
            { name: "Kibana", icon: "" }
        ],
        description: "Your description here...",
        image: devopsImage
    },
]




export function Skills() {
    return (
        <section id="skills-container" className="skills text-light" style={{ paddingTop: "200px", paddingBottom: "50px" }}>
            <div id="skills" className="container text-light">
                <h2>Skills</h2>
                <div className="skill-cards row">
                    {SKILLS.map((card: SkillCardProps, index: number) => (
                        <SkillCard key={index} name={card.name} skills={card.skills} description={card.description} image={card.image} />
                    ))}
                </div>
            </div>
        </section>

    );
}