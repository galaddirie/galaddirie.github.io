import React, { useEffect, useState } from 'react';
import { Project } from '@src/types/Project';
import './card-animations.css';

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
    };
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
      totalBrightness += (red + green + blue) / 3;
    }

    const avgBrightness = totalBrightness / (image.width * image.height);
    return avgBrightness;
  };

  return (
    <div
      className={`lg:w-1/2 w-full my-2 px-2 card-container ${isBright ? 'bright-background' : 'dark-background'}`}
    >
      <a
        href={
          project.demo && project.demo.length > 0
            ? project.demo[0].url
            : project.github && project.github.length > 0
              ? project.github[0].url
              : '#'
        }
        target='_blank'
        rel='noopener noreferrer'
      >
        <div className='project-card'>
          <div className='card-img-container'>
            <div
              className='card-img'
              style={{ backgroundImage: `url(${project.image})` }}
            />
          </div>

          <div className='p-4 flex flex-col justify-between h-full'>
            <div>
              <div className='card-title'>
                <h3 className='text-xl font-bold'>{project.title}</h3>
              </div>
              <div className='flex flex-wrap gap-2 mb-3'>
                {project.tech.map(tech => (
                  <div
                    key={tech}
                    className={`${tech} skill-icon px-2 py-1 bg-gray-800 text-white text-sm rounded`}
                  >
                    {tech.charAt(0).toUpperCase() + tech.slice(1)}
                  </div>
                ))}
              </div>
              {/* <div className="pt-2 border-t border-gray-600">
                                <ul>
                                    {project.description.map((desc, index) => (
                                        <li key={index}>{desc}</li>
                                    ))}
                                </ul>
                            </div> */}
            </div>

            <div className='flex justify-end gap-2'>
              {project.github &&
                project.github.map((source, index) => (
                  <a
                    key={index}
                    href={source.url}
                    className='bg-black text-white px-3 py-2 rounded hover:bg-gray-800 transition-colors'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='bi bi-github'></i>{' '}
                    {source.name ? source.name : 'Github'}
                  </a>
                ))}
              {/* {project.demo.map((source, index) => (
                            <a key={index} href={source.url} className="bg-red-500 text-white px-3 py-2 rounded opacity-50 cursor-not-allowed" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-link-45deg"></i> {source.name ? source.name : 'Live'}
                            </a>
                            ))} */}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
