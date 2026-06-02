import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, ExternalLink, FolderGit2, Award, Cpu, Sparkles, Layout } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useNavigate } from "react-router";
import { projects } from "../data/projects";

type TabType = "projects" | "certificates" | "techstack";

/* ─────────────── Tech Icon SVGs ─────────────── */


function Html5Icon() {
  return (
    <svg viewBox="0 0 40 40" className="w-9 h-9">
      <polygon points="4,2 36,2 33.5,34 20,38 6.5,34" fill="#E34F26" />
      <polygon points="20,5 20,35.5 31,32.5 33.2,5" fill="#EF8D69" opacity="0.55" />
      <rect x="8" y="13" width="14.5" height="3" rx="0.5" fill="white" />
      <rect x="8.5" y="18.5" width="13.5" height="3" rx="0.5" fill="white" />
      <polygon points="8.8,24 11.5,24 12,28.5 20,30.5 28,28.5 28.5,24 31.2,24 30.5,32 20,35 9.5,32" fill="white" />
      <rect x="17.5" y="13" width="14.5" height="3" rx="0.5" fill="white" opacity="0.5" />
    </svg>
  );
}

function Css3Icon() {
  return (
    <svg viewBox="0 0 40 40" className="w-9 h-9">
      <polygon points="4,2 36,2 33.5,34 20,38 6.5,34" fill="#1572B6" />
      <polygon points="20,5 20,35.5 31,32.5 33.2,5" fill="#33A9DC" opacity="0.55" />
      <rect x="8" y="13" width="14.5" height="3" rx="0.5" fill="white" />
      <rect x="17.5" y="13" width="14.5" height="3" rx="0.5" fill="white" opacity="0.5" />
      <path d="M9,18.5 H23 L22.5,22 H12 L12.5,26 L20,28 L27.5,26 L28,22.5 H31 L30,32 L20,35 L10,32 Z" fill="white" />
    </svg>
  );
}

function JsIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-9 h-9">
      <rect width="40" height="40" rx="3" fill="#F7DF1E" />
      <text x="7" y="31" fill="#000000" fontSize="18" fontWeight="bold" fontFamily="Arial, sans-serif">JS</text>
    </svg>
  );
}

function TsIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-9 h-9">
      <rect width="40" height="40" rx="3" fill="#3178C6" />
      <text x="5" y="31" fill="white" fontSize="18" fontWeight="bold" fontFamily="Arial, sans-serif">TS</text>
    </svg>
  );
}

function ReactIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-9 h-9">
      <circle cx="20" cy="20" r="3.5" fill="#61DAFB" />
      <ellipse cx="20" cy="20" rx="18" ry="6.5" fill="none" stroke="#61DAFB" strokeWidth="2" />
      <ellipse cx="20" cy="20" rx="18" ry="6.5" fill="none" stroke="#61DAFB" strokeWidth="2" transform="rotate(60 20 20)" />
      <ellipse cx="20" cy="20" rx="18" ry="6.5" fill="none" stroke="#61DAFB" strokeWidth="2" transform="rotate(120 20 20)" />
    </svg>
  );
}

function AngularIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-9 h-9">
      <polygon points="20,2 38,9 35,32 20,38 5,32 2,9" fill="#DD0031" />
      <polygon points="20,2 20,38 35,32 38,9" fill="#C3002F" opacity="0.4" />
      <polygon points="20,6 14,28 17,28 18.5,23.5 21.5,23.5 23,28 26,28" fill="white" />
      <rect x="18" y="19.5" width="4" height="2.5" fill="white" />
    </svg>
  );
}

// function VueIcon() {
//   return (
//     <svg viewBox="0 0 40 40" className="w-9 h-9">
//       <polygon points="2,5 12,5 20,20 28,5 38,5 20,37" fill="#42B883" />
//       <polygon points="12,5 20,20 28,5 23,5 20,11 17,5" fill="#35495E" />
//     </svg>
//   );
// }

function NodeIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-9 h-9">
      <polygon points="20,2 36,11 36,29 20,38 4,29 4,11" fill="#215732" />
      <polygon points="20,2 36,11 36,29 20,38" fill="#339933" opacity="0.6" />
      <text x="20" y="24" textAnchor="middle" fill="white" fontSize="7.5" fontWeight="bold" fontFamily="Arial, sans-serif">node</text>
    </svg>
  );
}

function GoIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-9 h-9">
      <ellipse cx="20" cy="20" rx="18" ry="13" fill="#00ADD8" />
      <text x="20" y="26" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" fontFamily="Arial, sans-serif">Go</text>
    </svg>
  );
}

function MongoIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-9 h-9">
      <path d="M20,3 C20,3 7,17 7,26 C7,33.5 12.5,38 20,38 C27.5,38 33,33.5 33,26 C33,17 20,3 20,3Z" fill="#47A248" />
      <path d="M20,3 C20,3 33,17 33,26 C33,33.5 27.5,38 20,38 Z" fill="#2E7D32" opacity="0.5" />
      <rect x="19" y="16" width="2" height="22" rx="1" fill="#AEDEA7" opacity="0.7" />
    </svg>
  );
}

function MysqlIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-9 h-9">
      <rect width="40" height="40" rx="3" fill="#4479A1" />
      <text x="20" y="16" textAnchor="middle" fill="#F29111" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif">My</text>
      <text x="20" y="30" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif">SQL</text>
    </svg>
  );
}

function FirebaseIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-9 h-9">
      <path d="M8,34 L16,14 L21,22 L25,6 L33,34 Z" fill="#FFCA28" />
      <path d="M8,34 L16,14 L24,26 L33,34 Z" fill="#FF8F00" opacity="0.85" />
      <path d="M25,6 L33,34 L23,27 Z" fill="#F57C00" opacity="0.7" />
    </svg>
  );
}

function BootstrapIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-9 h-9">
      <rect width="40" height="40" rx="8" fill="#7952B3" />
      <text x="21" y="32" textAnchor="middle" fill="white" fontSize="26" fontWeight="bold" fontFamily="Georgia, serif" fontStyle="italic">B</text>
    </svg>
  );
}

function PhpIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-9 h-9">
      <ellipse cx="20" cy="20" rx="18" ry="12" fill="#777BB4" />
      <text x="20" y="25" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">PHP</text>
    </svg>
  );
}

function GitIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-9 h-9">
      <circle cx="30" cy="10" r="4.5" fill="#F05032" />
      <circle cx="10" cy="10" r="4.5" fill="#F05032" />
      <circle cx="10" cy="30" r="4.5" fill="#F05032" />
      <line x1="10" y1="14.5" x2="10" y2="25.5" stroke="#F05032" strokeWidth="3" />
      <path d="M10,10 Q22,10 26,14" fill="none" stroke="#F05032" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function DockerIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-9 h-9">
      <rect x="4" y="18" width="7" height="6" rx="1" fill="#2496ED" />
      <rect x="12" y="12" width="7" height="6" rx="1" fill="#2496ED" />
      <rect x="12" y="18" width="7" height="6" rx="1" fill="#1A7BC4" />
      <rect x="20" y="18" width="7" height="6" rx="1" fill="#2496ED" />
      <rect x="20" y="12" width="7" height="6" rx="1" fill="#2496ED" />
      <rect x="28" y="18" width="7" height="6" rx="1" fill="#2496ED" />
      <path d="M4,24 Q3,31 9,33 Q21,38 34,30 Q38,27 37,22" fill="none" stroke="#2496ED" strokeWidth="2" />
      <circle cx="36" cy="18" r="2" fill="#2496ED" />
    </svg>
  );
}

function FigmaIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-9 h-9">
      <rect x="8" y="2" width="12" height="12" rx="6" fill="#F24E1E" />
      <rect x="20" y="2" width="12" height="12" rx="6" fill="#FF7262" />
      <rect x="8" y="14" width="12" height="12" rx="6" fill="#A259FF" />
      <circle cx="26" cy="20" r="6" fill="#1ABCFE" />
      <rect x="8" y="26" width="12" height="12" rx="6" fill="#0ACF83" />
    </svg>
  );
}

function FlutterIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-9 h-9">
      <polygon points="20,3 37,20 31,20 14,3" fill="#54C5F8" />
      <polygon points="20,19 37,36 31,36 14,19" fill="#01579B" />
      <polygon points="14,19 20,25 26,19 31,19 20,30 14,24" fill="#29B6F6" />
    </svg>
  );
}

function MaterialUiIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-9 h-9">
      <polygon points="2,28 14,35 14,8 20,4.5 20,31.5 14,35" fill="#007FFF" />
      <polygon points="26,8 20,4.5 20,31.5 26,28" fill="#007FFF" opacity="0.85" />
      <polygon points="38,28 26,35 26,8 38,14.5" fill="#007FFF" opacity="0.6" />
    </svg>
  );
}

function BitbucketIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-9 h-9">
      <path d="M36,6 L4,6 L8,32 Q20,38 32,32 Z" fill="#2684FF" />
      <path d="M20,10 L13,10 L15,22 Q20,25 25,22 L27,10 Z" fill="white" />
    </svg>
  );
}

function JiraIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-9 h-9">
      <path d="M20,4 L36,20 L20,36 L4,20 Z" fill="#0052CC" />
      <path d="M20,4 L36,20 L20,20 Z" fill="#2684FF" />
    </svg>
  );
}

function PostmanIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-9 h-9">
      <circle cx="20" cy="20" r="18" fill="#FF6C37" />
      <circle cx="20" cy="16" r="5" fill="white" />
      <path d="M10,26 Q20,20 30,26 L30,30 Q20,24 10,30 Z" fill="white" opacity="0.8" />
    </svg>
  );
}

function VsCodeIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-9 h-9">
      <path d="M28,4 L12,14 L6,10 L4,12 L10,20 L4,28 L6,30 L12,26 L28,36 L34,32 L34,8 Z" fill="#007ACC" />
      <path d="M28,4 L12,14 L28,20 Z" fill="#3B82F6" opacity="0.6" />
      <path d="M28,36 L12,26 L28,20 Z" fill="#1E40AF" opacity="0.6" />
    </svg>
  );
}

function DartIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-9 h-9">
      <path d="M20,2 L34,14 L20,38 L6,14 Z" fill="#0175C2" />
      <path d="M20,2 L34,14 L20,20 Z" fill="#13B9FD" />
      <path d="M6,14 L20,20 L20,38 Z" fill="#13B9FD" opacity="0.6" />
    </svg>
  );
}

/* ─────────────── Tech Stack Data ─────────────── */

const techStack = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", color: "#E34F26", bgColor: "rgba(227,79,38,0.15)", icon: <Html5Icon /> },
      { name: "CSS", color: "#1572B6", bgColor: "rgba(21,114,182,0.15)", icon: <Css3Icon /> },
      { name: "JavaScript", color: "#F7DF1E", bgColor: "rgba(247,223,30,0.15)", icon: <JsIcon /> },
      { name: "TypeScript", color: "#3178C6", bgColor: "rgba(49,120,198,0.15)", icon: <TsIcon /> },
      { name: "React", color: "#61DAFB", bgColor: "rgba(97,218,251,0.15)", icon: <ReactIcon /> },
      { name: "Angular", color: "#DD0031", bgColor: "rgba(221,0,49,0.15)", icon: <AngularIcon /> },
    //   { name: "Vue.js", color: "#42B883", bgColor: "rgba(66,184,131,0.15)", icon: <VueIcon /> },
    //   { name: "Tailwind CSS", color: "#06B6D4", bgColor: "rgba(6,182,212,0.15)", icon: <TailwindIcon /> },
      { name: "Bootstrap", color: "#7952B3", bgColor: "rgba(121,82,179,0.15)", icon: <BootstrapIcon /> },
    //   { name: "Vite", color: "#646CFF", bgColor: "rgba(100,108,255,0.15)", icon: <ViteIcon /> },
      { name: "Flutter", color: "#02569B", bgColor: "rgba(2,86,155,0.15)", icon: <FlutterIcon /> },
      { name: "Material UI", color: "#007FFF", bgColor: "rgba(0,127,255,0.15)", icon: <MaterialUiIcon /> },
      { name: "Dart", color: "#00CCAF", bgColor: "rgba(0,204,175,0.15)", icon: <DartIcon /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", color: "#339933", bgColor: "rgba(51,153,51,0.15)", icon: <NodeIcon /> },
      { name: "Go", color: "#00ADD8", bgColor: "rgba(0,173,216,0.15)", icon: <GoIcon /> },
      { name: "PHP", color: "#777BB4", bgColor: "rgba(119,123,180,0.15)", icon: <PhpIcon /> },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", color: "#47A248", bgColor: "rgba(71,162,72,0.15)", icon: <MongoIcon /> },
      { name: "MySQL", color: "#4479A1", bgColor: "rgba(68,121,161,0.15)", icon: <MysqlIcon /> },
      { name: "Firebase", color: "#FFCA28", bgColor: "rgba(255,202,40,0.15)", icon: <FirebaseIcon /> },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", color: "#F05032", bgColor: "rgba(240,80,50,0.15)", icon: <GitIcon /> },
      { name: "Docker", color: "#2496ED", bgColor: "rgba(36,150,237,0.15)", icon: <DockerIcon /> },
      { name: "Figma", color: "#F24E1E", bgColor: "rgba(242,78,30,0.15)", icon: <FigmaIcon /> },
      { name: "Bitbucket", color: "#2684FF", bgColor: "rgba(38,132,255,0.15)", icon: <BitbucketIcon /> },
      { name: "Jira", color: "#0052CC", bgColor: "rgba(0,82,204,0.15)", icon: <JiraIcon /> },
      { name: "Postman", color: "#FF6C37", bgColor: "rgba(255,108,55,0.15)", icon: <PostmanIcon /> },
      { name: "VS Code", color: "#007ACC", bgColor: "rgba(0,122,204,0.15)", icon: <VsCodeIcon /> },
    ],
  },
];

/* ─────────────── Main Component ─────────────── */

export function PortfolioShowcase() {
  const [activeTab, setActiveTab] = useState<TabType>("projects");
  const navigate = useNavigate();

  const tabs = [
    { id: "projects" as TabType, label: "Projects", icon: FolderGit2 },
    // { id: "certificates" as TabType, label: "Certificates", icon: Award },
    { id: "techstack" as TabType, label: "Tech Stack", icon: Cpu },
  ];

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-[#3B82F6] font-semibold mb-2 block">Showcase</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Portfolio Showcase
          </h2>
          <p className="text-white/50 max-w-xl mx-auto leading-relaxed">
            Explore my journey through projects, certifications and technical expertise.
            Each section represents a milestone in my continuous learning path.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] mx-auto rounded-full mt-4"></div>
        </motion.div>

        {/* Tab Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className="flex justify-center gap-2 mb-12"
        >
          <div className="flex gap-1 p-1.5 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all duration-300 ${
                    active
                      ? "bg-[#3B82F6] text-white shadow-lg shadow-[#3B82F6]/30"
                      : "text-white/50 hover:text-white/80 hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium text-sm">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "projects" && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:border-[#3B82F6]/30 hover:shadow-xl hover:shadow-[#3B82F6]/10 h-full flex flex-col">
                      {/* Image */}
                      <div className="relative overflow-hidden aspect-video">
                        <ImageWithFallback
                          src={project.images?.[0] || project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-transparent opacity-60" />
                        
                        {/* Project Badge */}
                        <div className="absolute top-4 left-4 z-10">
                          <div className="px-3 py-1 rounded-full bg-[#3B82F6]/20 backdrop-blur-md border border-[#3B82F6]/30 flex items-center gap-2">
                            <Sparkles className="w-3 h-3 text-[#3B82F6]" />
                            <span className="text-[10px] font-bold text-[#3B82F6] uppercase tracking-wider">Project</span>
                          </div>
                        </div>

                        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <button
                            onClick={() => navigate(`/project/${project.id}`)}
                            className="px-6 py-2 bg-white text-[#0F172A] rounded-full font-bold text-sm transform hover:scale-105 transition-all shadow-xl"
                          >
                            View Detail
                          </button>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-2xl font-semibold text-white group-hover:text-[#3B82F6] transition-colors">
                            {project.title}
                          </h3>
                        </div>
                        <p className="text-white/70 mb-4 leading-relaxed flex-1 line-clamp-2">
                          {project.description}
                        </p>

                        {/* Tech badges */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.slice(0, 4).map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-[10px] font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-[10px] font-medium">
                              +{project.technologies.length - 4}
                            </span>
                          )}
                        </div>

                        <div className="flex gap-3 pt-4 border-t border-white/10">
                          <button
                            onClick={() => navigate(`/project/${project.id}`)}
                            className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-[#3B82F6]/20 hover:border-[#3B82F6]/40 transition-all duration-300 flex items-center justify-center gap-2 text-sm font-medium"
                          >
                            <Layout className="w-4 h-4" />
                            Detail
                          </button>
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 px-4 py-2.5 bg-[#3B82F6] text-white rounded-xl hover:bg-[#2563EB] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#3B82F6]/20 text-sm font-medium"
                            >
                              <ExternalLink className="w-4 h-4" />
                              Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center mt-12"
              >
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-lg hover:bg-[#3B82F6]/20 hover:border-[#3B82F6]/40 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                  View More on GitHub
                </a>
              </motion.div>
            </motion.div>
          )}

          {activeTab === "certificates" && (
            <motion.div
              key="certificates"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center justify-center py-24 gap-6"
            >
              <div className="w-20 h-20 rounded-2xl bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center">
                <Award className="w-10 h-10 text-[#3B82F6]" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Coming Soon</h3>
              <p className="text-white/50 text-center max-w-sm">
                Certificates and achievements will be showcased here as they are earned.
              </p>
            </motion.div>
          )}

          {activeTab === "techstack" && (
            <motion.div
              key="techstack"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-10"
            >
              {techStack.map((group, groupIndex) => (
                <div key={group.category} className="space-y-6">
                  <div className="flex items-center gap-4">
                    <h4 className="text-xl font-semibold text-white/90 whitespace-nowrap">
                      {group.category}
                    </h4>
                    <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent"></div>
                  </div>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4">
                    {group.items.map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.35,
                          delay: groupIndex * 0.1 + index * 0.035,
                        }}
                        whileHover={{ scale: 1.08, y: -6 }}
                        className="flex flex-col items-center gap-3 p-4 rounded-2xl cursor-default transition-colors duration-200"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.08)",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLDivElement).style.borderColor = `${tech.color}40`;
                          (e.currentTarget as HTMLDivElement).style.background = `${tech.bgColor}`;
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.08)";
                          (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.04)";
                        }}
                      >
                        <div
                          className="w-14 h-14 rounded-xl flex items-center justify-center"
                          style={{ background: tech.bgColor }}
                        >
                          {tech.icon}
                        </div>
                        <span className="text-white/70 text-xs font-medium text-center leading-tight">
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
