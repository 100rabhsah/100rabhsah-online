import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import {
  ClevertechLogo,
  JojoMobileLogo,
  MonitoLogo,
  ParabolLogo,
} from "@/images/logos";

export const RESUME_DATA = {
  name: "Sourabh Sah",
  initials: "SS",
  location: "Ranchi, Jharkhand, India",
  locationLink: "https://www.google.com/maps/place/Ranchi,+Jharkhand",
  about:
    "AI-enthusiast and problem solver with industry experience and a passion for real-world impact through ML.",
  summary:
    "M.Tech CSE (Data Science & AI) student at IIIT Ranchi, former Software Engineer at Tech Mahindra with hands-on experience in automation, AI projects, and deep learning applications. Proficient in Python, Streamlit, and machine learning pipelines.",
  avatarUrl: "https://avatars.githubusercontent.com/u/116707431?s=400&u=3620555caf27b2494cbc4dbefa87a8cf822c8e75&v=4",
  personalWebsiteUrl: "https://100rabhsah-blog.vercel.app/",
  contact: {
    email: "sourabh.2024pg104@iiitranchi.ac.in",
    tel: "+91 9777273449",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/100rabhsah",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/sourabhsah",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/100rabhsah",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Indian Institute of Information Technology, Ranchi",
      degree: "M.Tech in Computer Science and Engineering (Data Science and AI)",
      start: "2024",
      end: "2026",
    },
    {
      school: "Biju Patnaik University of Technology, Rourkela",
      degree: "B.Tech in Electronics and Communication (Minor in CSE)",
      start: "2016",
      end: "2020",
    },
  ],
  work: [
    {
      company: "Tech Mahindra",
      badges: ["Full-time", "Onsite"],
      title: "Software Engineer",
      start: "Jun 2021",
      end: "May 2023",
      description:
        "Worked on Samsung Electronics America projects: improved automation efficiency by 20%, reduced post-release issues by 15%, and built internal tools that reduced issue resolution time by 30%. Led onboarding and improved system data integrity.",
      logo: ClevertechLogo,
    },
  ],
  skills: [
    "Python",
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "SQL",
    "MongoDB",
    "Data Structures & Algorithms",
    "Streamlit",
    "FastAPI",
    "Docker (basic)",
    "OpenCV",
    "Linux/Unix",
  ],
  achievements: [
    {
      title: "Machine Learning with Python Certification",
      description:
        "Earned from Ardent Computech Pvt. Ltd., covering ML algorithms, data preprocessing, and model evaluation.",
      during: "2019",
    },
  ],
  projects: [
    {
      title: "AI News Aggregator",
      techStack: ["Python", "NLP", "Streamlit"],
      description:
        "An AI-powered app that autonomously crawls, summarizes, and displays news using NLP techniques.",
      logo: ParabolLogo,
      link: {
        label: "Live Demo",
        href: "https://ai-news-aggregator-uvrdowgyt2uzjrz8ahovzk.streamlit.app/",
      },
    },
    {
      title: "OpenCV Attendance Project",
      techStack: ["OpenCV", "Python", "Streamlit"],
      description:
        "Face recognition-based attendance system with real-time logging and cross-device support.",
      logo: JojoMobileLogo,
      link: {
        label: "GitHub Repo",
        href: "https://github.com/100rabhsah/opencv-attendance-project",
      },
    },
    {
      title: "Fake News Detector",
      techStack: ["BERT", "BiLSTM", "NLP", "Deep Learning"],
      description:
        "Hybrid deep learning model combining BERT and BiLSTM with attention for detecting fake news.",
      logo: MonitoLogo,
      link: {
        label: "Live Demo",
        href: "https://huggingface.co/spaces/dev100rabh/FakeNews",
      },
    },
  ],
} as const;
