import React, { ComponentType } from 'react';

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
  FaDocker,
  FaAws,
  FaWordpress,
  FaNetworkWired,
  FaShieldAlt,
  FaGlobe,
  FaPlug,
  FaCogs,
  FaRobot,
  FaPalette,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiWebgl,
  SiElixir,
  SiRedux,
  SiTrpc,
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
  SiKubernetes,
  SiNextdotjs,
  SiDotnet,
  SiApachekafka,
  SiNginx,
  SiSelenium,
  SiPuppeteer,
  SiJest,
  SiPostman,
  SiPytest,
  SiFigma,
  SiAdobephotoshop,
  SiAdobexd,
  SiBlender,
  SiStorybook,
  SiApache,
  SiThreedotjs,
  SiAdobeillustrator,
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
import { FaGolang } from 'react-icons/fa6';
import { TbBrandBootstrap } from 'react-icons/tb';
import { DiJqueryLogo } from 'react-icons/di';
import { MdVpnLock, MdOutlineSecurity } from 'react-icons/md';
import { GiNetworkBars } from 'react-icons/gi';
import { AiOutlineGlobal } from 'react-icons/ai';
import { IoMdColorPalette } from 'react-icons/io';

type SkillItem = {
  name: string;
  icon: ComponentType;
  color: string;
};

type SkillCategory = {
  title: string;
  icon: ComponentType;
  skills: SkillItem[];
};

export function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      icon: FaCode,
      skills: [
        { name: 'React', icon: FaReact, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#fff' },
        { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
        { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
        { name: 'JavaScript', icon: FaJsSquare, color: '#F7DF1E' },
        { name: 'TypeScript', icon: SiTypescript, color: '#007ACC' },
        { name: 'Redux', icon: SiRedux, color: '#764ABC' },
        { name: 'Tailwind', icon: SiTailwindcss, color: '#38B2AC' },
        { name: 'WebGL', icon: SiWebgl, color: '#fff' },
        { name: 'Three.js', icon: SiThreedotjs, color: '#049EF4' },
        { name: 'WCAG', icon: FaShieldAlt, color: '#005A6F' },
        { name: 'UI/UX', icon: FaPalette, color: '#FF6B6B' },
        { name: 'SASS', icon: SiSass, color: '#CC6699' },
        { name: 'jQuery', icon: DiJqueryLogo, color: '#0769AD' },
        { name: 'Bootstrap', icon: TbBrandBootstrap, color: '#7952B3' },

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
        { name: 'C#', icon: SiDotnet, color: '#239120' },
        { name: 'Django', icon: SiDjango, color: '#092E20' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#fff' },
        { name: 'Redis', icon: SiRedis, color: '#DC382D' },
        { name: 'Kafka', icon: SiApachekafka, color: '#fff' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#336584' },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
        { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
        { name: 'Express', icon: FaNodeJs, color: '#68A063' },
        { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
        { name: 'Flask', icon: FaFlask, color: '#3776AB' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      ],
    },
    {
      title: 'DevOps & Tools',
      icon: FaTools,
      skills: [
        { name: 'Docker', icon: FaDocker, color: '#2496ED' },
        { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
        { name: 'Azure', icon: VscAzure, color: '#0078D4' },
        { name: 'AWS', icon: FaAws, color: '#FF9900' },
        { name: 'Elasticsearch', icon: SiElasticsearch, color: '#005571' },
        { name: 'Logstash', icon: FaCogs, color: '#00BFB3' },
        { name: 'Kibana', icon: FaGlobe, color: '#F04E98' },
        { name: 'Terraform', icon: SiTerraform, color: '#623CE4' },
        { name: 'GCP', icon: SiGooglecloud, color: '#4285F4' },
        { name: 'Heroku', icon: SiHeroku, color: '#430098' },
      ],
    },
    {
      title: 'Networking',
      icon: FaNetworkWired,
      skills: [
        { name: 'Nginx', icon: SiNginx, color: '#009639' },
        { name: 'gRPC', icon: SiTrpc, color: '#fff' },
        { name: 'TCP', icon: FaPlug, color: '#FF6B35' },
        { name: 'Load Balancing', icon: GiNetworkBars, color: '#4CAF50' },
        { name: 'CDN', icon: AiOutlineGlobal, color: '#FF9800' },
        { name: 'Apache', icon: SiApache, color: '#D22128' },
        { name: 'WebSockets', icon: FaPlug, color: '#fff' },
        { name: 'VPC', icon: MdVpnLock, color: '#4285F4' },
        { name: 'MITM', icon: MdOutlineSecurity, color: '#FF5722' },
      ],
    },
    {
      title: 'Test/Automation',
      icon: FaRobot,
      skills: [
        { name: 'Storybook', icon: SiStorybook, color: '#FF4785' },
        { name: 'Selenium', icon: SiSelenium, color: '#43B02A' },
        { name: 'Puppeteer', icon: SiPuppeteer, color: '#40B5A4' },
        { name: 'Playwright', icon: FaRobot, color: '#2EAD33' },
        { name: 'Jest', icon: SiJest, color: '#C21325' },
        { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
        { name: 'pytest', icon: SiPytest, color: '#0A9EDC' },
      ],
    },
    {
      title: 'Design',
      icon: IoMdColorPalette,
      skills: [
        { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
        {
          name: 'Adobe Illustrator',
          icon: SiAdobeillustrator,
          color: '#FF9A00',
        },
        { name: 'Adobe Photoshop', icon: SiAdobephotoshop, color: '#31A8FF' },
        { name: 'Adobe XD', icon: SiAdobexd, color: '#FF61F6' },
        { name: 'Blender', icon: SiBlender, color: '#F5792A' },
      ],
    },
  ];

  return (
    <section id='skills-container' className='text-white pt-36 mb-64'>
      <div className='mx-auto px-4 text-white'>
        {/* Section header */}
        <div className='mb-12'>
          <h2 className='uppercase mb-6 text-4xl md:text-6xl font-bold'>
            Skills
          </h2>
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
                <h3 className='category-title uppercase font-semibold text-4xl text-white truncate'>
                  {category.title}
                </h3>
              </div>

              <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4 justify-start'>
                {category.skills.map((skill, _skillIndex) => (
                  <div key={skill.name} className='flex justify-center'>
                    <div className='relative bg-black border border-gray-700 rounded-md p-6 w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer hover:border-gray-500 hover:-translate-y-1 group'>
                      <div
                        className='text-5xl transition-transform duration-300 mb-2 group-hover:scale-110'
                        style={{ color: skill.color }}
                      >
                        <skill.icon />
                      </div>
                      <span className='text-xl font-bold text-gray-200 leading-tight text-center'>
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {catIndex < skillCategories.length - 1 && (
                <div className='mt-12 border-t border-gray-700 relative'></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
