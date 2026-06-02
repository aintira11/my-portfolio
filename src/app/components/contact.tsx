import { motion } from "motion/react";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "aintira.saengsri@gmail.com",
      link: "mailto:aintira.saengsri@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "aintira11",
      link: "https://github.com/aintira11",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Aintira Saengsrirueang",
      link: "https://www.linkedin.com/in/aintira-saengsrirueang-bb4148373",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "khon kaen, Thailand",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#3B82F6] font-semibold mb-2 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-12 max-w-6xl mx-auto justify-items-center">
          {/* Contact Info */}
          <motion.div
            className="w-full lg:max-w-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Let's work together
              </h3>
              <p className="text-white/70 mb-8 leading-relaxed">
                I'm currently looking for new opportunities to contribute my
                skills and grow as a developer. Whether you have a question or
                just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  const content = (
                    <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 group hover:border-[#3B82F6]/30">
                      <div className="p-3 bg-[#3B82F6]/20 rounded-lg group-hover:bg-[#3B82F6]/30 transition-all duration-300">
                        <IconComponent className="w-5 h-5 text-[#3B82F6]" />
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">{item.label}</p>
                        <p className="text-white font-medium">{item.value}</p>
                      </div>
                    </div>
                  );

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {item.link ? (
                        <a
                          href={item.link}
                          target={item.link.startsWith("http") ? "_blank" : undefined}
                          rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Social Media Links */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-white/60 mb-4">Follow me on:</p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/aintira11"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-[#3B82F6]/20 hover:border-[#3B82F6]/40 transition-all duration-300 text-white hover:scale-110"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aintira-saengsrirueang-bb4148373"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-[#3B82F6]/20 hover:border-[#3B82F6]/40 transition-all duration-300 text-white hover:scale-110"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:aintira.saengsri@gmail.com"
                    className="p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-[#3B82F6]/20 hover:border-[#3B82F6]/40 transition-all duration-300 text-white hover:scale-110"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          {/* <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Send me a message
              </h3>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="How can I help you?"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Your message..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-[#3B82F6] text-white rounded-lg hover:bg-[#2563EB] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#3B82F6]/30 hover:shadow-[#3B82F6]/50 hover:scale-105"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div> */}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-white/60">
            © {new Date().getFullYear()} Aintira. Built with React, Tailwind CSS, and Motion
          </p>
          <p className="text-white/40 text-sm mt-2">
            Designed & Developed with ❤️
          </p>
        </motion.div>
      </div>
    </section>
  );
}
