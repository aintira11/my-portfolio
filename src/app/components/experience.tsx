import { motion } from "motion/react";
import { Briefcase, CheckCircle2 } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Programmer Intern",
      company: "PPCnSEO Co., Ltd. (VooVa Group)",
      period: "Dec 2025 - Mar 2026 [4 months]",
      location: "Chon Buri, Thailand",
      responsibilities: [
        "Fixed critical bugs in legacy PHP applications",
        "Worked extensively with PHP and MySQL systems to optimize database queries",
        "Performed SQL debugging and troubleshooting to resolve complex data issues",
        "Collaborated with agile development team in daily standups and sprint planning",
        
      ],
      technologies: ["PHP","JavaScript", "MySQL", "Git", "HiediSQL","Bitbucket","Docker","Jira", "Agile/Scrum"],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#3B82F6] font-semibold mb-2 block">
            My Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3B82F6] to-[#8B5CF6] hidden md:block"></div>

              {/* Experience Card */}
              <div className="relative md:ml-20 mb-12">
                {/* Timeline Dot */}
                <div className="absolute -left-12 top-8 w-4 h-4 bg-[#3B82F6] rounded-full border-4 border-[#0F172A] hidden md:block"></div>

                <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group hover:border-[#3B82F6]/30 hover:shadow-lg hover:shadow-[#3B82F6]/10">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-[#3B82F6]/20 rounded-lg group-hover:bg-[#3B82F6]/30 transition-all duration-300">
                          <Briefcase className="w-5 h-5 text-[#3B82F6]" />
                        </div>
                        <h3 className="text-2xl font-semibold text-white">
                          {exp.title}
                        </h3>
                      </div>
                      <p className="text-[#3B82F6] text-lg font-medium mb-1">
                        {exp.company}
                      </p>
                      <p className="text-white/60 text-sm">{exp.location}</p>
                    </div>
                    <div className="md:text-right">
                      <span className="inline-block px-4 py-2 bg-[#3B82F6]/20 border border-[#3B82F6]/30 rounded-lg text-[#3B82F6] font-medium text-sm">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">
                      Key Responsibilities:
                    </h4>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.2 + idx * 0.1,
                          }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 text-white/70"
                        >
                          <CheckCircle2 className="w-5 h-5 text-[#3B82F6] mt-0.5 flex-shrink-0" />
                          <span>{resp}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-white/80 text-sm hover:bg-[#3B82F6]/20 hover:border-[#3B82F6]/40 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Additional Note */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 inline-block">
              <p className="text-white/70">
                Looking forward to new opportunities to grow and contribute to
                innovative projects!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
