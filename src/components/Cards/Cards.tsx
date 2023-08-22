import React, { useEffect, useState } from "react";

import './Cards.scss';
import "@src/index.scss";
import "@assets/css/bootstrap.min.css"
import { Project } from "@src/types/Project";




interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const [isBright, setIsBright] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = project.image;
        img.onload = () => {
            const brightness = getAverageBrightness(img);
            setIsBright(brightness > 128); // 128 is midway between 0 and 255
        }
    }, [project.image]);

    const getAverageBrightness = (image: HTMLImageElement) => {
        const canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;

        const ctx = canvas.getContext('2d');
        ctx!.drawImage(image, 0, 0);

        const imageData = ctx!.getImageData(0, 0, canvas.width, canvas.height).data;
        let totalBrightness = 0;

        for (let i = 0; i < imageData.length; i += 4) {
            const red = imageData[i];
            const green = imageData[i + 1];
            const blue = imageData[i + 2];
            // Average the three color channels
            totalBrightness += (red + green + blue) / 3;
        }

        const avgBrightness = totalBrightness / (image.width * image.height);
        return avgBrightness;
    }

    return (
        <div className={`col-lg-6 col-12  my-2 card-container ${isBright ? 'bright-background' : 'dark-background'}`}>
            <div className="card-hoverable card">
                <div className="card-img-container">
                    <div className="card-img"  style={{ backgroundImage: `url(${project.image})` }} />
                </div>

                <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                        <div className="card-title">
                            <h3>{project.title}</h3>
                        </div>
                        <div className="card-tags mb-3">
                            {project.tech.map(tech => (
                                <div key={tech} className={`${tech} skill-icon`}></div>
                            ))}
                        </div>
                        {/* <div className="card-text pt-2 border-top">
                            <ul>
                                {project.description.map((desc, index) => (
                                    <li key={index}>{desc}</li>
                                ))}
                            </ul>
                        </div> */}
                    </div>

                    <div className="card-buttons d-flex justify-content-end">
                        {project.github.map((source, index) => (
                            <a key={index} href={source.url} className="btn btn-black" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-github"></i> {source.name ? source.name : 'Github'}
                            </a>
                        ))}
                        {project.demo.map((source, index) => (
                        <a key={index} href={source.url} className="btn btn-danger" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-link-45deg"></i> {source.name ? source.name : 'Live'}
                        </a>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProjectCard;



