import { motion } from "motion/react";
import { Code, Server, Database, Wrench } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      color: "#3B82F6",
      skills: [
        { name: "React", level: 85 },
        { name: "Angular", level: 80 },
        { name: "HTML/CSS", level: 90 },
        { name: "Bootstrap", level: 85 },
        { name: "Flutter", level: 70 },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      color: "#8B5CF6",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Go", level: 75 },
        { name: "PHP", level: 70 },
      ],
    },
    {
      title: "Database",
      icon: Database,
      color: "#10B981",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 85 },
        { name: "Firebase", level: 75 },
      ],
    },
    {
      title: "Tools",
      icon: Wrench,
      color: "#F59E0B",
      skills: [
        { name: "Git", level: 85 },
        { name: "GitHub", level: 85 },
        { name: "Postman", level: 80 },
        { name: "Docker", level: 70 },
        { name: "Figma", level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#3B82F6] font-semibold mb-2 block">
            My Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 transition-all duration-300 group hover:border-[#3B82F6]/30 hover:shadow-lg hover:shadow-[#3B82F6]/10">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="p-3 rounded-lg transition-all duration-300"
                      style={{
                        backgroundColor: `${category.color}20`,
                      }}
                    >
                      <IconComponent
                        className="w-6 h-6"
                        style={{ color: category.color }}
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white/80 text-sm font-medium">
                            {skill.name}
                          </span>
                          <span className="text-white/60 text-xs">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 1,
                              delay: categoryIndex * 0.1 + skillIndex * 0.05,
                              ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                            className="h-full rounded-full"
                            style={{
                              background: `linear-gradient(90deg, ${category.color}, ${category.color}CC)`,
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-white/60 text-lg">
            Always learning and exploring new technologies to stay ahead in the
            ever-evolving web development landscape
          </p>
        </motion.div>
      </div>
    </section>
  );
}
