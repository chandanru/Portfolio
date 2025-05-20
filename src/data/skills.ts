export interface Skill {
  name: string;
  percentage: number;
  category: 'technical' | 'framework' | 'tools';
}

export const skills: Skill[] = [
  // Technical Skills
  { name: 'Python', percentage: 95, category: 'technical' },
  { name: 'TensorFlow', percentage: 90, category: 'technical' },
  { name: 'PyTorch', percentage: 85, category: 'technical' },
  { name: 'Scikit-learn', percentage: 92, category: 'technical' },
  { name: 'NLP', percentage: 88, category: 'technical' },
  { name: 'Computer Vision', percentage: 85, category: 'technical' },
  
  // Frameworks & Libraries
  { name: 'Pandas', percentage: 92, category: 'framework' },
  { name: 'NumPy', percentage: 94, category: 'framework' },
  
  { name: 'Flask', percentage: 85, category: 'framework' },
 
  
  // Tools & Technologies
  { name: 'Docker', percentage: 88, category: 'tools' },
  { name: 'Git', percentage: 90, category: 'tools' },
  { name: 'AWS', percentage: 85, category: 'tools' },
  { name: 'SQL', percentage: 87, category: 'tools' },
 
];