import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { InfoSection } from '@/components/InfoSection';
import { ProjectSection } from '@/components/ProjectSection';
import { Footer } from '@/components/Footer';
import { Brain, Globe, Gamepad2, FolderOpen } from 'lucide-react';

// Sample project data
const aimlProjects = [
  {
    title: 'Computer Vision Pipeline',
    description: 'Real-time object detection and classification system using YOLOv8 and OpenCV for autonomous vehicle applications.',
    technologies: ['Python', 'PyTorch', 'OpenCV', 'YOLO', 'TensorRT'],
    githubUrl: '#',
    liveUrl: '#',
    featured: true
  },
  {
    title: 'NLP Sentiment Analyzer',
    description: 'Advanced sentiment analysis tool with custom BERT fine-tuning for social media monitoring and brand analysis.',
    technologies: ['Python', 'Transformers', 'BERT', 'FastAPI', 'Docker'],
    githubUrl: '#'
  },
  {
    title: 'Generative AI Chatbot',
    description: 'Intelligent conversational AI built with LangChain and GPT integration for customer service automation.',
    technologies: ['Python', 'LangChain', 'OpenAI', 'Streamlit', 'Vector DB'],
    githubUrl: '#',
    liveUrl: '#'
  }
];

const webdevProjects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    githubUrl: '#',
    liveUrl: '#',
    featured: true
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management with real-time metrics and automated reporting.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'Chart.js', 'Vercel'],
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates, file sharing, and team communication.',
    technologies: ['React', 'Express', 'MongoDB', 'Socket.io', 'Material-UI'],
    githubUrl: '#'
  }
];

const gamingProjects = [
  {
    title: '3D Space Explorer',
    description: 'Interactive 3D space exploration game built with Three.js featuring procedural generation and realistic physics.',
    technologies: ['Three.js', 'JavaScript', 'WebGL', 'Cannon.js', 'Blender'],
    githubUrl: '#',
    liveUrl: '#',
    featured: true
  },
  {
    title: 'Multiplayer Battle Arena',
    description: 'Real-time multiplayer game with WebSocket connections, matchmaking, and competitive ranking system.',
    technologies: ['Node.js', 'Socket.io', 'Phaser', 'Redis', 'Docker'],
    githubUrl: '#'
  }
];

const otherProjects = [
  {
    title: 'IoT Home Automation',
    description: 'Smart home system with IoT sensors, mobile app control, and machine learning for energy optimization.',
    technologies: ['Raspberry Pi', 'Python', 'React Native', 'MQTT', 'InfluxDB'],
    githubUrl: '#',
    featured: true
  },
  {
    title: 'Blockchain Voting System',
    description: 'Decentralized voting platform ensuring transparency and security using smart contracts.',
    technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'IPFS'],
    githubUrl: '#',
    liveUrl: '#'
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <InfoSection />
      
      <ProjectSection
        id="ai-ml"
        title="AI/ML Projects"
        subtitle="Cutting-edge artificial intelligence and machine learning solutions that push the boundaries of what's possible with data and automation."
        projects={aimlProjects}
        icon={<Brain className="w-8 h-8 text-primary-foreground" />}
      />
      
      <ProjectSection
        id="web-dev"
        title="Web Development"
        subtitle="Modern web applications built with the latest technologies, focusing on performance, scalability, and exceptional user experiences."
        projects={webdevProjects}
        icon={<Globe className="w-8 h-8 text-primary-foreground" />}
      />
      
      <ProjectSection
        id="gaming"
        title="Gaming Projects"
        subtitle="Interactive gaming experiences that blend creativity with technical innovation, from 3D adventures to multiplayer competitions."
        projects={gamingProjects}
        icon={<Gamepad2 className="w-8 h-8 text-primary-foreground" />}
      />
      
      <ProjectSection
        id="other"
        title="Other Projects"
        subtitle="Diverse portfolio of experimental and innovative projects spanning IoT, blockchain, mobile development, and emerging technologies."
        projects={otherProjects}
        icon={<FolderOpen className="w-8 h-8 text-primary-foreground" />}
      />
      
      <Footer />
    </div>
  );
};

export default Index;
