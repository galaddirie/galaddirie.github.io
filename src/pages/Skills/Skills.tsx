import React from 'react';

import {
  FaCode,
  FaServer,
  FaTools,
  FaReact,
  FaFlask,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
  FaNodeJs,
  FaDatabase,
  FaDocker,
  FaAws,
  FaWordpress,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiElixir,
  SiRedux,
  SiTailwindcss,
  SiFastapi,
  SiSass,
  SiMongodb,
  SiGraphql,
  SiDjango,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiTerraform,
  SiGooglecloud,
  SiHeroku,
  SiElasticsearch,
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
import { FaGolang } from 'react-icons/fa6';

import { TbBrandBootstrap } from 'react-icons/tb';
import { DiJqueryLogo } from 'react-icons/di';

type SkillItem = {
  name: string;
  icon: any;
  color: string;
};

type SkillCategory = {
  title: string;
  icon: any;
  skills: SkillItem[];
};

export function Skills() {
  // Skill categories with icons
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      icon: FaCode,
      skills: [
        { name: 'React', icon: FaReact, color: '#61DAFB' },
        { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
        { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
        { name: 'JavaScript', icon: FaJsSquare, color: '#F7DF1E' },
        { name: 'TypeScript', icon: SiTypescript, color: '#007ACC' },
        { name: 'Redux', icon: SiRedux, color: '#764ABC' },
        { name: 'Tailwind', icon: SiTailwindcss, color: '#38B2AC' },
        { name: 'SASS', icon: SiSass, color: '#CC6699' },
        { name: 'Bootstrap', icon: TbBrandBootstrap, color: '#7952B3' },
        { name: 'jQuery', icon: DiJqueryLogo, color: '#0769AD' },
        { name: 'WordPress', icon: FaWordpress, color: '#21759B' },
      ],
    },
    {
      title: 'Backend',
      icon: FaServer,
      skills: [
        { name: 'Python', icon: FaPython, color: '#3776AB' },
        { name: 'Go', icon: FaGolang, color: '#00ADD8' },
        { name: 'Elixir', icon: SiElixir, color: '#4B275F' },
        { name: 'Node.js', icon: FaNodeJs, color: '#6FA660' },
        { name: 'Express', icon: FaNodeJs, color: '#68A063' },
        { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
        { name: 'Django', icon: SiDjango, color: '#092E20' },
        { name: 'Flask', icon: FaFlask, color: '#3776AB' },
        { name: 'Redis', icon: SiRedis, color: '#DC382D' },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#336584' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
      ],
    },
    {
      title: 'DevOps & Tools',
      icon: FaTools,
      skills: [
        { name: 'Docker', icon: FaDocker, color: '#2496ED' },
        { name: 'Terraform', icon: SiTerraform, color: '#623CE4' },
        { name: 'GCP', icon: SiGooglecloud, color: '#4285F4' },
        { name: 'Azure', icon: VscAzure, color: '#0078D4' },
        { name: 'AWS', icon: FaAws, color: '#FF9900' },
        { name: 'Heroku', icon: SiHeroku, color: '#430098' },
        { name: 'Elasticsearch', icon: SiElasticsearch, color: '#005571' },
      ],
    },
  ];

  return (
    <section id='skills-container' className='text-white pt-36 mb-72'>
      <div className='mx-auto px-4 text-white'>
        {/* Section header */}
        <div className='mb-12'>
          <h2 className='uppercase mb-6 text-6xl font-bold'>Skills</h2>
          <p className='text-gray-400 max-w-2xl'>
            I'm proficient in a range of modern technologies for building
            robust, scalable, and user-friendly applications.
          </p>
        </div>

        {/* Skills categories */}
        <div className='skills-categories'>
          {skillCategories.map((category, catIndex) => (
            <div key={category.title} className='skill-category mb-12'>
              <div className='category-header flex items-center mb-6'>
                <span className='category-icon mr-3 flex items-center justify-center text-white text-3xl transition-all duration-300 hover:text-gray-300 hover:scale-110'>
                  <category.icon />
                </span>
                <h3 className='category-title uppercase font-semibold text-4xl text-white'>
                  {category.title}
                </h3>
              </div>

              <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4 justify-start'>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className='flex justify-center'>
                    <div className='relative bg-black border border-gray-700 rounded-md p-6 w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer hover:border-gray-500 hover:-translate-y-1 group'>
                      <div
                        className='text-5xl transition-transform duration-300 mb-2 group-hover:scale-110'
                        style={{ color: skill.color }}
                      >
                        <skill.icon />
                      </div>
                      <span className='text-xs font-medium text-gray-200 leading-tight text-center'>
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider except for the last category */}
              {catIndex < skillCategories.length - 1 && (
                <div className='mt-12 border-t border-gray-700 relative'>
                  <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-px w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-500 to-transparent'></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className='mt-12 flex justify-center'>
          <div className='w-24 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent'></div>
        </div>
      </div>
    </section>
  );
}
