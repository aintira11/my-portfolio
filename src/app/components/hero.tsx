import { motion } from "motion/react";
import { Github, Linkedin, Mail, ArrowDown, ExternalLink, Moon, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";


export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-32 pb-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6] inline-block">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-4"
            >
              <span className="text-white/60 block mb-2">Hello, I'm</span>
              <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-white block mb-2">
                Aintira
              </span>
              <span className="text-2xl md:text-3xl text-[#3B82F6] block">
                Full Stack Web Developer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white/70 text-lg mb-8 leading-relaxed"
            >
              Computer Science graduate with experience building web and mobile applications using React, Angular, Node.js, Go, and Flutter.
Interested in full-stack development and creating practical solutions for real-world users.
            </motion.p>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-8"
            >
              {/* <p className="text-white/60 mb-3">Tech Stack:</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <Badge
                      variant="secondary"
                      className="bg-white/5 border border-white/10 text-white hover:bg-[#3B82F6]/20 hover:border-[#3B82F6]/40 transition-all duration-300 px-4 py-2"
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div> */}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <button
                onClick={scrollToProjects}
                className="px-8 py-4 bg-[#3B82F6] text-white rounded-lg hover:bg-[#2563EB] transition-all duration-300 shadow-lg shadow-[#3B82F6]/30 hover:shadow-[#3B82F6]/50 hover:scale-105 flex items-center gap-2"
              >
                View Projects
                <ExternalLink className="w-5 h-5" />
              </button>
              <button onClick={scrollToContact} className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                Contact
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4"
            >
              <a
                href="https://github.com/aintira11"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-[#3B82F6]/20 hover:border-[#3B82F6]/40 transition-all duration-300 text-white"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/aintira-saengsrirueang-bb4148373"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-[#3B82F6]/20 hover:border-[#3B82F6]/40 transition-all duration-300 text-white"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:aintira.saengsri@gmail.com"
                className="p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-[#3B82F6]/20 hover:border-[#3B82F6]/40 transition-all duration-300 text-white"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image as ID Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center"
          >
            {/* Lanyard String */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-1.5 h-40 bg-gradient-to-b from-[#3B82F6]/0 via-[#3B82F6]/40 to-[#3B82F6] rounded-full z-0"></div>

            {/* ID Card Wrapper with Swinging Animation */}
            <motion.div
              animate={{ 
                rotate: [2, -2, 2],
                y: [0, 5, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative z-10"
            >
              {/* Lanyard Clip */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-8 bg-gray-400 rounded-lg shadow-lg flex items-center justify-center z-20 border-t border-white/30">
                <div className="w-4 h-4 rounded-full bg-gray-600 border-2 border-gray-500"></div>
              </div>

              {/* The Card */}
              <div className="w-72 bg-white rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] overflow-hidden border border-gray-200">
                {/* Card Header */}
                <div className="h-16 bg-[#3B82F6] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '12px 12px' }}></div>
                  </div>
                  <span className="text-white font-black tracking-widest text-sm italic">DEV IDENTITY</span>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col items-center">
                  {/* Portrait */}
                  <div className="w-32 h-32 rounded-xl overflow-hidden border-4 border-gray-100 shadow-xl mb-4 bg-gray-100 relative group">
                    <ImageWithFallback
                      src="https://res.cloudinary.com/dtrqbzv6r/image/upload/v1780429388/MEITU_20260406_143847718_pbayof.jpg"
                      alt="Aintira Profile"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/20 to-transparent"></div>
                  </div>

                  {/* Info */}
                  <div className="text-center space-y-1 mb-6">
                    <h3 className="text-xl font-bold text-gray-900 tracking-tight uppercase">Aintira S.</h3>
                    <p className="text-[] font-bold text-[10px] uppercase tracking-widest">Aintira Saengsrirueang</p>
                    <p className="text-[#3B82F6] font-bold text-[10px] uppercase tracking-widest">Full Stack Web Developer</p>
                  </div>

                  {/* Mock Barcode */}
                  <div className="w-full h-10 bg-gray-50 rounded border border-gray-100 flex items-center justify-center gap-1 p-2 mb-4">
                    {[1,2,4,2,6,1,3,2,5,1,3,4,2].map((w, i) => (
                      <div key={i} className="h-full bg-gray-300 rounded-full" style={{ width: `${w}px` }}></div>
                    ))}
                  </div>

                  {/* Night Shift Badge */}
                  <div className="w-full py-2 bg-gray-900 rounded-xl flex items-center justify-center gap-2 shadow-inner border border-gray-800">
                    <Moon className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                    <span className="text-white font-bold text-[9px] uppercase tracking-tighter">Late Night Worker</span>
                    <Sparkles className="w-3 h-3 text-blue-400 animate-pulse" />
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="h-1 bg-green-500 w-full animate-pulse"></div>
              </div>
            </motion.div>

            {/* Background Glow behind the card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#3B82F6]/20 rounded-full blur-[80px] -z-10"></div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-white/40 cursor-pointer hover:text-white/60 transition-colors"
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
