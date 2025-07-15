export interface Project {
  name: string;
  description: string;
  url: string;
};

export interface WorkItem {
  company: string;
  period: string;
  description: string;
  tech: string[];
};