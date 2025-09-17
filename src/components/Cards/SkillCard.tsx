import React from 'react';
import { SkillCardProps, Skill } from '@src/types/Skills';

export default function SkillCard({
  name,
  skills,
  description: _description,
  image,
}: SkillCardProps) {
  return (
    <div className='lg:w-1/3 w-full mb-3'>
      <div className='bg-black rounded border border-gray-700 p-5 h-75'>
        <img
          className='w-12 h-12 rounded bg-cover bg-no-repeat bg-center'
          src={image}
          alt='Card image cap'
        />
        <p className='font-semibold text-2xl py-3 uppercase'>{name}</p>
        {/* <p className="font-normal text-lg leading-5">{description}</p> */}

        <div className='mb-3'>
          {skills.map((skill: Skill, index: number) => (
            <div className='skill-icon' key={index}>
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
