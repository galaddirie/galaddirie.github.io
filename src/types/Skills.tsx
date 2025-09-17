export type Skill = {
  name: string;
  icon?: string;
  color?: string;
};

export interface SkillCardProps {
  name: string;
  skills: Skill[];
  description?: string;
  image?: string;
}
