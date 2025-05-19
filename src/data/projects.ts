export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered Image Recognition System",
    description: "Deep learning model that identifies objects in images with 97% accuracy using CNN architecture and transfer learning.",
    technologies: ["TensorFlow", "Python", "OpenCV", "Flask"],
    imageUrl: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    category: "Machine Learning"
  },
  {
    id: 2,
    title: "Natural Language Processing Chatbot",
    description: "Conversational AI chatbot that understands user intent and responds with contextually relevant information.",
    technologies: ["PyTorch", "NLTK", "React", "Node.js"],
    imageUrl: "https://images.pexels.com/photos/4126724/pexels-photo-4126724.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    githubUrl: "https://github.com",
    category: "Natural Language Processing"
  },
  {
    id: 3,
    title: "Predictive Analytics Dashboard",
    description: "Business intelligence tool that provides forecasting and trend analysis for sales and marketing data.",
    technologies: ["Python", "Pandas", "Scikit-learn", "D3.js"],
    imageUrl: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    category: "Data Science"
  },
  {
    id: 4,
    title: "Sentiment Analysis API",
    description: "API service that analyzes customer reviews and social media mentions to determine sentiment and emotional context.",
    technologies: ["Python", "FastAPI", "BERT", "Docker"],
    imageUrl: "https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    category: "Natural Language Processing"
  },
  {
    id: 5,
    title: "Recommender System",
    description: "Content-based and collaborative filtering recommendation engine for an e-commerce platform.",
    technologies: ["Python", "Surprise", "PostgreSQL", "Redis"],
    imageUrl: "https://images.pexels.com/photos/5912599/pexels-photo-5912599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    githubUrl: "https://github.com",
    category: "Machine Learning"
  },
  {
    id: 6,
    title: "Fraud Detection System",
    description: "Real-time anomaly detection system that identifies fraudulent transactions with high precision and recall.",
    technologies: ["PySpark", "Kafka", "Scikit-learn", "ElasticSearch"],
    imageUrl: "https://images.pexels.com/photos/930530/pexels-photo-930530.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    category: "Data Science"
  }
];

export const categories = [
  "All",
  "Machine Learning",
  "Natural Language Processing",
  "Data Science"
];