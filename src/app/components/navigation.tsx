import { useState } from "react";
import { Menu, X, FileDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    // { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl px-6 py-4 shadow-lg">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <button
                onClick={() => scrollToSection("home")}
                className="text-xl font-bold text-white hover:text-[#3B82F6] transition-colors"
              >
                Aintira
              </button>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-white/80 hover:text-[#3B82F6] transition-all duration-300 relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3B82F6] group-hover:w-full transition-all duration-300"></span>
                  </button>
                ))}
              </div>

              {/* Resume Button */}
              <div className="hidden md:block">
                <button className="px-6 py-2.5 bg-[#3B82F6] text-white rounded-lg hover:bg-[#2563EB] transition-all duration-300 flex items-center gap-2 shadow-lg shadow-[#3B82F6]/20 hover:shadow-[#3B82F6]/40">
                  <FileDown className="w-4 h-4" />
                  Resume
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-white p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-[#0F172A]/95 backdrop-blur-lg">
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.id)}
                    className="text-2xl text-white/80 hover:text-[#3B82F6] transition-all duration-300"
                  >
                    {item.label}
                  </motion.button>
                ))}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="px-8 py-3 bg-[#3B82F6] text-white rounded-lg hover:bg-[#2563EB] transition-all duration-300 flex items-center gap-2 shadow-lg shadow-[#3B82F6]/20"
                >
                  <FileDown className="w-5 h-5" />
                  Resume
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
