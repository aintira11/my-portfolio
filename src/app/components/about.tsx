import { motion } from "motion/react";
import { GraduationCap, Sparkles } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#3B82F6] font-semibold mb-2 block">
            Get To Know Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-10 gap-8">
          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-[#3B82F6]/20 rounded-lg group-hover:bg-[#3B82F6]/30 transition-all duration-300">
                  <Sparkles className="w-6 h-6 text-[#3B82F6]" />
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  Professional Summary
                </h3>
              </div>
              <p className="text-white/70 leading-relaxed text-lg">
                Computer Science graduate with experience developing web and mobile applications through academic projects and internship experience.
                Skilled in React, Angular, Node.js, Go, and database design. 
                Interested in full-stack web development and continuously improving my technical skills through hands-on projects and real-world problem solving.
              </p>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300 group hover:border-[#3B82F6]/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#3B82F6]/20 rounded-lg group-hover:bg-[#3B82F6]/30 transition-all duration-300">
                  <GraduationCap className="w-6 h-6 text-[#3B82F6]" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-white font-medium mb-1">
                    Bachelor of Science
                  </p>
                  <p className="text-[#3B82F6] mb-2">Computer Science</p>
                  <p className="text-white/60 text-sm mb-2">
                    Mahasarakham University, Thailand
                  </p>
                  <p className="text-white/50 text-sm">2022 - 2026</p>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-white/60 text-sm">
                    GPAX : 3.61
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
