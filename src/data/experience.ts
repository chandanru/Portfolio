export interface Experience {
  id: number;
  period: string;
  title: string;
  company: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    period: "2025 - Present",
    title: "Senior AI/ML Engineer",
    company: "Tech Innovations Inc.",
    description: "Leading the development of machine learning models for computer vision and NLP applications. Designed and implemented an image recognition system that improved accuracy by 15%."
  }
];

export interface Education {
  id: number;
  period: string;
  degree: string;
  institution: string;
  description: string;
}

export const education: Education[] = [
  {
    id: 1,
    period: "2021 - 2025",
    degree: "Bachelor of Engineering (B.E.) in Artificial Intelligence and Machine Learning",
    institution: "MVJ College of Engineering",
    description: "Specialized in Artificial intelligence and machine learning.focusing on advanced algorithms, data science, and intelligent system development."
  },
  {
    id: 2,
    period: "2019 - 2021",
    degree: " Senior Secondary School Certificate",
    institution: "Sri chaitanya",
    description: "Completed 12th grade with a focus on Physics, Chemistry, Mathematics, and Biology (PCMB) stream."
  }
];

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  year: number;
  link?: string;
}

export const certifications: Certification[] = [
  {
    id: 1,
    name: "Deep Learning Specialization",
    issuer: "Coursera (deeplearning.ai)",
    year: 2021,
    link: "https://www.coursera.org"
  },
  {
    id: 2,
    name: "TensorFlow Developer Certificate",
    issuer: "Google",
    year: 2020,
    link: "https://www.tensorflow.org/certificate"
  },
  {
    id: 3,
    name: "AWS Certified Machine Learning – Specialty",
    issuer: "Amazon Web Services",
    year: 2019,
    link: "https://aws.amazon.com/certification/certified-machine-learning-specialty/"
  },
  {
    id: 4,
    name: "Professional Data Engineer",
    issuer: "Google Cloud",
    year: 2019,
    link: "https://cloud.google.com/certification/data-engineer"
  }
];