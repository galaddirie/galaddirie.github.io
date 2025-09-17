export type Source = {
  url: string;
  name?: string;
};

export type Project = {
  title: string;
  image: string;
  description: string[];
  tech: string[]; // TODO: Change to Skill[]
  github: Source[];
  demo?: Source[];
};
