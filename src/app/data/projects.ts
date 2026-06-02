export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  images?: string[];
  date?: string;
  technologies: string[];
  github: string;
  demo?: string;
  features?: string[];
  responsibilities?: string[];
}

export const projects: Project[] = [
  {
    id: "job-tracker",
    title: "Job Tracker",
    date: "Apr 2026 - present",
    description:
      "A full-stack web application for tracking job applications. Users can manage their job search process, including adding, updating, and tracking application status in one place.",
    image:
      "https://images.unsplash.com/photo-1763718528755-4bca23f82ac3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb2IlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3ODAzOTM2OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://res.cloudinary.com/dtrqbzv6r/image/upload/v1780421577/9e2c1f22-aa43-462e-944a-a1dd282f5924.png",
      "https://res.cloudinary.com/dtrqbzv6r/image/upload/v1780421815/3ef8486f-5b52-4247-ab97-60d3c5715469.png",
      "https://res.cloudinary.com/dtrqbzv6r/image/upload/v1780421478/05f13811-5bcf-408b-9dc4-499186ee7d77.png" ],
    technologies: ["React", "Vite", "Go", "Gin", "MongoDB", "Firebase", "Cloudinary", "Vercel", "Render"],
    github: "https://github.com/aintira11/job_tracker",
    demo: "https://job-tracker-nu-jade.vercel.app",
    features: [
      "Authentication (Email/Password + Google Login)",
      "JWT-based session management",
      "Create, update, delete job applications (CRUD)",
      "Filter jobs by status (Open, Applied, Interview, etc.)",
      "Profile management (update name, avatar)",
      "Upload profile image via Cloudinary",
      "Persistent login using localStorage",
      "Protected routes with middleware"
    ]
  },
  {
    id: "shutter-seek",
    title: "Shutter Seek",
    date: "2024",
    subtitle: "Academic Capstone Project (Team of 2)",
    description:
      "A photographer finder platform that connects clients with photographers through an online marketplace. Users can search photographers by category, location, and pricing, browse portfolios, and communicate through real-time chat.",
    image:
      "https://images.unsplash.com/photo-1621600411688-4be93cd68504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHBvcnRmb2xpbyUyMHdlYnNpdGV8ZW58MXx8fHwxNzgwMzkzNzAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://res.cloudinary.com/dtrqbzv6r/image/upload/v1780423412/81d22c1d-f519-49a8-848f-8293acd3dcdd.png",
      "https://res.cloudinary.com/dtrqbzv6r/image/upload/v1780423344/c59d7de2-6f1a-43bb-a6e9-abde8d63b344.png",
      "https://res.cloudinary.com/dtrqbzv6r/image/upload/v1780423378/05e61a41-e89e-4595-b255-40c61b7c11db.png",
      "https://res.cloudinary.com/dtrqbzv6r/image/upload/v1780423447/0bc2020b-40b1-4828-974f-e280309f5529.png",
      "https://res.cloudinary.com/dtrqbzv6r/image/upload/v1780423476/3d298836-f154-4730-92cc-ee8c6d94a7e2.png",
      "https://res.cloudinary.com/dtrqbzv6r/image/upload/v1780423564/1c6b8bfb-ed01-4a78-846e-09e267d6df93.png",
      "https://res.cloudinary.com/dtrqbzv6r/image/upload/v1780423514/978c7730-1e21-42cf-b0eb-2336ed14d020.png"
    ],
    technologies: ["Angular", "Node.js", "TypeScript", "MySQL", "Firebase", "Google Auth", "ImgBB"],
    github: "https://github.com/aintira11/shutter_seek",
    demo: "https://shutter-seek.firebaseapp.com/",
    features: [
      "Photographer search and filtering by category, province, and pricing",
      "Photographer portfolio and package management",
      "Real-time chat between clients and photographers",
      "Google Authentication (Firebase)",
      "Follow, favorite, and review system",
      "Photographer approval workflow",
      "Role-based access control (Admin, Member, Photographer)",
      "Responsive design for desktop and mobile devices"
    ],
    responsibilities: [
      "Developed and maintained backend APIs using Node.js and TypeScript",
      "Designed and managed MySQL database structure and relationships",
      "Integrated RESTful APIs between Angular frontend and backend services",
      "Developed major frontend modules and user interfaces using Angular",
      "Implemented Google Authentication and user authorization flows",
      "Integrated Firebase Realtime Database for real-time messaging",
      "Managed image upload and storage using ImgBB",
      "Deployed frontend application via Firebase Hosting",
      "Deployed backend services to production server using FileZilla and DirectAdmin",
      "Configured and managed hosting services and production environment"
    ]
  },
  {
    id: "voting-website",
    title: "Voting Website",
    subtitle: "Academic Project (Team of 2)",
    date: "2023",
    description:
      "An interactive voting platform implementing the Elo Rating Algorithm for fair and dynamic ranking systems. Users can create polls, vote on various topics with intelligent ranking based on voting patterns and user engagement.",
    image:
      "https://images.unsplash.com/photo-1730808822974-b21a29d64055?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b3RpbmclMjBwb2xsJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc4MDM5MzcwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://res.cloudinary.com/dtrqbzv6r/image/upload/v1780428032/cb16b76d-5523-4792-a3d0-d0b665203bad.png",
      ],
    technologies: ["Angular", "Node.js","Firebase", "Elo Rating Algorithm","MySQL"],
    github: "https://github.com/aintira11/fontvote-project",
    demo: "https://vote-projectadv.web.app/",
    features: [
      "Elo Rating Algorithm for intelligent ranking",
      "Anti-fraud voting protection systems",
      "Multiple poll types (binary, multiple choice, ranking)",
      "Detailed voting analytics and heatmaps"
    ]
  },
  {
    id: "delivery-app",
    title: "Delivery Mobile Application",
    subtitle: "Academic Project",
    date: "2023",
    description:
      "A mobile application developed to explore delivery service workflows. The project focused on product management, order processing, and role-based delivery operations.",
    image:
      "https://images.unsplash.com/photo-1614442042855-e17d53875286?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMG9yZGVyaW5nJTIwYXBwfGVufDF8fHx8MTc4MDM5MzcwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://res.cloudinary.com/dtrqbzv6r/image/upload/v1780427255/7b5701ad-a912-4590-84a1-f0ab41d43618.png",
      "https://res.cloudinary.com/dtrqbzv6r/image/upload/v1780427333/40114e67-691f-4cac-bdc1-c4e68f6d7cfc.png",
      "https://res.cloudinary.com/dtrqbzv6r/image/upload/v1780427495/40067f19-93f7-40d8-85ab-ffdafe136ad4.png",
      "https://res.cloudinary.com/dtrqbzv6r/image/upload/v1780427503/d23c853c-ac36-4fbc-ab0e-94a8f767039f.png",
      "https://res.cloudinary.com/dtrqbzv6r/image/upload/v1780427384/b8f12980-b62a-4bbd-9ffe-67d0dca678ca.png",
    ],
    technologies: ["Flutter", "Dart", "Firebase", "Firestore", "Figma"],
    github: "https://github.com/aintira11/delivery_1_app",
    features: [
      "Multi-role user interface (Sender, Receiver, Rider)",
      "Product and delivery order management",
      "Image upload using Firebase Storage",
      "Order status management",
      "Delivery workflow simulation",
      "Mobile-responsive user interface"
    ],
    responsibilities: [
      "Designed UI/UX prototypes using Figma",
      "Developed frontend screens and navigation using Flutter",
      "Implemented product management functionality",
      "Designed and managed Firebase database structure",
      "Integrated Firebase services for data storage and retrieval",
      "Developed order management and delivery workflow features",
      "Connected application screens with backend services"
    ]
  },
];
