import React from 'react';
import { Project } from '@src/types/Project';
import { CTA } from '@components/CTA/CTA';
import ProjectCard from '@src/components/Cards/ProjectCards';

import projectsData from '@pages/Projects/ProjectsList';

export function Projects() {
  return (
    <>
      <section id='projects-container' className='text-white pt-36 pb-12'>
        <div id='projects' className='mx-auto px-4'>
          <h2 className='text-6xl font-bold uppercase mb-8'>PROJECTS</h2>

          <div className='flex flex-wrap -mx-2'>
            {projectsData.map((project: Project, index: number) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
