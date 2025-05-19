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
    period: "2022 - Present",
    title: "Senior AI/ML Engineer",
    company: "Tech Innovations Inc.",
    description: "Leading the development of machine learning models for computer vision and NLP applications. Designed and implemented an image recognition system that improved accuracy by 15%."
  },
  {
    id: 2,
    period: "2020 - 2022",
    title: "Machine Learning Engineer",
    company: "DataSmart Solutions",
    description: "Built and deployed recommendation systems and predictive analytics solutions. Developed a fraud detection system that reduced fraudulent transactions by 32%."
  },
  {
    id: 3,
    period: "2018 - 2020",
    title: "Data Scientist",
    company: "AI Research Labs",
    description: "Conducted research in natural language processing and sentiment analysis. Published two papers on sentiment analysis techniques in leading AI conferences."
  },
  {
    id: 4,
    period: "2017 - 2018",
    title: "Machine Learning Intern",
    company: "GlobalTech",
    description: "Assisted in developing deep learning models for speech recognition. Implemented data preprocessing pipeline that improved model training time by 25%."
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
    period: "2016 - 2018",
    degree: "Master of Science in Artificial Intelligence",
    institution: "Stanford University",
    description: "Specialized in machine learning and computer vision. Thesis on 'Deep Learning Approaches for Medical Image Analysis'."
  },
  {
    id: 2,
    period: "2012 - 2016",
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Indian Institute of Technology",
    description: "Graduated with honors. Final year project on 'Natural Language Processing for Sentiment Analysis'."
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