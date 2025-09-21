export interface TrendData {
  month: string;
  'Frontend Developer': number;
  'Backend Developer': number;
  'Full Stack Developer': number;
  'Data Scientist': number;
  'DevOps Engineer': number;
  'Mobile Developer': number;
  'ML Engineer': number;
}

export interface SkillTrend {
  skill: string;
  demand: number;
  growth: number;
  category: string;
}

export interface SalaryTrend {
  career: string;
  junior: number;
  mid: number;
  senior: number;
  growth: number;
}

export const jobDemandTrends: TrendData[] = [
  { month: 'Jan 2023', 'Frontend Developer': 120, 'Backend Developer': 100, 'Full Stack Developer': 85, 'Data Scientist': 60, 'DevOps Engineer': 45, 'Mobile Developer': 40, 'ML Engineer': 35 },
  { month: 'Feb 2023', 'Frontend Developer': 125, 'Backend Developer': 105, 'Full Stack Developer': 90, 'Data Scientist': 65, 'DevOps Engineer': 48, 'Mobile Developer': 42, 'ML Engineer': 38 },
  { month: 'Mar 2023', 'Frontend Developer': 130, 'Backend Developer': 110, 'Full Stack Developer': 95, 'Data Scientist': 70, 'DevOps Engineer': 52, 'Mobile Developer': 45, 'ML Engineer': 42 },
  { month: 'Apr 2023', 'Frontend Developer': 135, 'Backend Developer': 115, 'Full Stack Developer': 100, 'Data Scientist': 75, 'DevOps Engineer': 55, 'Mobile Developer': 48, 'ML Engineer': 45 },
  { month: 'May 2023', 'Frontend Developer': 140, 'Backend Developer': 120, 'Full Stack Developer': 105, 'Data Scientist': 80, 'DevOps Engineer': 58, 'Mobile Developer': 50, 'ML Engineer': 48 },
  { month: 'Jun 2023', 'Frontend Developer': 145, 'Backend Developer': 125, 'Full Stack Developer': 110, 'Data Scientist': 85, 'DevOps Engineer': 62, 'Mobile Developer': 52, 'ML Engineer': 52 },
  { month: 'Jul 2023', 'Frontend Developer': 150, 'Backend Developer': 130, 'Full Stack Developer': 115, 'Data Scientist': 90, 'DevOps Engineer': 65, 'Mobile Developer': 55, 'ML Engineer': 55 },
  { month: 'Aug 2023', 'Frontend Developer': 155, 'Backend Developer': 135, 'Full Stack Developer': 120, 'Data Scientist': 95, 'DevOps Engineer': 68, 'Mobile Developer': 58, 'ML Engineer': 58 },
  { month: 'Sep 2023', 'Frontend Developer': 160, 'Backend Developer': 140, 'Full Stack Developer': 125, 'Data Scientist': 100, 'DevOps Engineer': 72, 'Mobile Developer': 60, 'ML Engineer': 62 },
  { month: 'Oct 2023', 'Frontend Developer': 165, 'Backend Developer': 145, 'Full Stack Developer': 130, 'Data Scientist': 105, 'DevOps Engineer': 75, 'Mobile Developer': 62, 'ML Engineer': 65 },
  { month: 'Nov 2023', 'Frontend Developer': 170, 'Backend Developer': 150, 'Full Stack Developer': 135, 'Data Scientist': 110, 'DevOps Engineer': 78, 'Mobile Developer': 65, 'ML Engineer': 68 },
  { month: 'Dec 2023', 'Frontend Developer': 175, 'Backend Developer': 155, 'Full Stack Developer': 140, 'Data Scientist': 115, 'DevOps Engineer': 82, 'Mobile Developer': 68, 'ML Engineer': 72 },
];

export const skillTrends: SkillTrend[] = [
  { skill: 'React', demand: 95, growth: 15, category: 'Frontend' },
  { skill: 'TypeScript', demand: 88, growth: 25, category: 'Programming' },
  { skill: 'Python', demand: 92, growth: 18, category: 'Programming' },
  { skill: 'AWS', demand: 85, growth: 22, category: 'Cloud' },
  { skill: 'Docker', demand: 78, growth: 20, category: 'DevOps' },
  { skill: 'Kubernetes', demand: 72, growth: 28, category: 'DevOps' },
  { skill: 'Machine Learning', demand: 68, growth: 30, category: 'Data' },
  { skill: 'GraphQL', demand: 65, growth: 12, category: 'Backend' },
  { skill: 'Next.js', demand: 82, growth: 35, category: 'Frontend' },
  { skill: 'Node.js', demand: 80, growth: 8, category: 'Backend' },
  { skill: 'PostgreSQL', demand: 75, growth: 10, category: 'Database' },
  { skill: 'MongoDB', demand: 70, growth: 5, category: 'Database' },
];

export const salaryTrends: SalaryTrend[] = [
  { career: 'Frontend Developer', junior: 55000, mid: 85000, senior: 120000, growth: 15 },
  { career: 'Backend Developer', junior: 60000, mid: 90000, senior: 130000, growth: 12 },
  { career: 'Full Stack Developer', junior: 65000, mid: 95000, senior: 140000, growth: 18 },
  { career: 'Data Scientist', junior: 70000, mid: 110000, senior: 160000, growth: 25 },
  { career: 'DevOps Engineer', junior: 70000, mid: 105000, senior: 150000, growth: 23 },
  { career: 'Mobile Developer', junior: 60000, mid: 90000, senior: 125000, growth: 18 },
  { career: 'ML Engineer', junior: 80000, mid: 120000, senior: 170000, growth: 30 },
];

export const chartConfig = {
  'Frontend Developer': {
    label: 'Frontend Developer',
    color: 'hsl(var(--primary))',
  },
  'Backend Developer': {
    label: 'Backend Developer',
    color: 'hsl(var(--accent))',
  },
  'Full Stack Developer': {
    label: 'Full Stack Developer',
    color: 'hsl(var(--success))',
  },
  'Data Scientist': {
    label: 'Data Scientist',
    color: 'hsl(var(--destructive))',
  },
  'DevOps Engineer': {
    label: 'DevOps Engineer',
    color: 'hsl(var(--muted-foreground))',
  },
  'Mobile Developer': {
    label: 'Mobile Developer',
    color: 'hsl(var(--secondary))',
  },
  'ML Engineer': {
    label: 'ML Engineer',
    color: 'hsl(var(--popover))',
  },
};
