export interface Project {
  title: string;
  description: string;
  technologies: string[];
  url?: string;
  github?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: '项目示例 1',
    description: '这是一个示例项目的描述。你可以在这里描述项目的功能、解决的问题等。',
    technologies: ['TypeScript', 'React', 'Astro'],
    url: 'https://example.com',
    github: 'https://github.com/yourusername/project1',
  },
  {
    title: '项目示例 2',
    description: '另一个示例项目，展示你的技能和作品。',
    technologies: ['Python', 'FastAPI', 'PostgreSQL'],
    github: 'https://github.com/yourusername/project2',
  },
  // 添加更多项目...
];

