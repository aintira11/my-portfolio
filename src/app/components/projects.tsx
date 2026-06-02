import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";

export function Projects() {
  const projects = [
    {
      title: "Job Tracker",
      description:
        "A comprehensive job application tracking system that helps users manage their job search process. Features include application status tracking, interview scheduling, company research notes, and analytics dashboard to visualize job search progress.",
      image:
        "https://images.unsplash.com/photo-1763718528755-4bca23f82ac3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb2IlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3ODAzOTM2OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["React", "Go", "MongoDB", "JWT", "Firebase", "Cloudinary"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Shutter Seek",
      description:
        "A modern photography portfolio platform where photographers can showcase their work, create galleries, and connect with clients. Features include image optimization, watermarking, contact forms, and booking system for photography sessions.",
      image:
        "https://images.unsplash.com/photo-1621600411688-4be93cd68504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHBvcnRmb2xpbyUyMHdlYnNpdGV8ZW58MXx8fHwxNzgwMzkzNzAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Angular", "Node.js", "MySQL", "Firebase"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Voting Website",
      description:
        "An interactive voting platform implementing the Elo Rating Algorithm for fair and dynamic ranking systems. Users can create polls, vote on various topics, and see real-time results with intelligent ranking based on voting patterns and user engagement.",
      image:
        "https://images.unsplash.com/photo-1730808822974-b21a29d64055?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b3RpbmclMjBwb2xsJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc4MDM5MzcwMHww&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Angular", "Node.js", "Elo Rating Algorithm"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Pizza Ordering Website",
      description:
        "A full-featured e-commerce platform for a pizza restaurant with online ordering capabilities. Includes menu management, shopping cart, order customization, payment integration, order tracking, and admin dashboard for managing orders and inventory.",
      image:
        "https://images.unsplash.com/photo-1614442042855-e17d53875286?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMG9yZGVyaW5nJTIwYXBwfGVufDF8fHx8MTc4MDM5MzcwMHww&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["PHP", "MySQL", "Bootstrap"],
      github: "https://github.com",
      demo: "https://example.com",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#3B82F6] font-semibold mb-2 block">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:border-[#3B82F6]/30 hover:shadow-xl hover:shadow-[#3B82F6]/10 h-full flex flex-col">
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-video">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-transparent opacity-60"></div>

                  {/* Overlay Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg hover:bg-[#3B82F6] transition-all duration-300 text-white transform hover:scale-110"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg hover:bg-[#3B82F6] transition-all duration-300 text-white transform hover:scale-110"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-[#3B82F6] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-white/70 mb-4 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIdx) => (
                      <Badge
                        key={techIdx}
                        variant="secondary"
                        className="bg-white/5 border border-white/10 text-white/80 hover:bg-[#3B82F6]/20 hover:border-[#3B82F6]/40 transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-white/10">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 text-white rounded-lg hover:bg-[#3B82F6]/20 hover:border-[#3B82F6]/40 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2.5 bg-[#3B82F6] text-white rounded-lg hover:bg-[#2563EB] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#3B82F6]/20 hover:shadow-[#3B82F6]/40"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-white/70 mb-4">
            Want to see more of my work?
          </p>
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
      </div>
    </section>
  );
}
