import React from "react";

import './Cards.scss';
import "@src/index.scss";
import "@assets/css/bootstrap.min.css"

import { SkillCardProps } from "@src/types/Skills";


    

export default function SkillCard({name, skills, description, image}: SkillCardProps) {
    return (
        <div className="col-lg-4 col-12 mb-3">
            <div className="card pe-3 ">
                <img className="card-image" src={image} alt="Card image cap" />
                <p className="card-title py-3 text-uppercase">
                    {name}
                </p>
                {/* <p className="card-info">{description}</p> */}
                
                <div className="card-tags mb-3">
                    {skills.map((skill:any, index:any) => (
                        <div className="skill-icon" key={index}>
                                {skill.name}
                        </div>
                    ))}
            </div>
        </div>
        </div>
    );
}