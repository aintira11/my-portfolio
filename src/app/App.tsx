import { BrowserRouter, Routes, Route } from "react-router";
import { Navigation } from "./components/navigation";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Experience } from "./components/experience";
import { Contact } from "./components/contact";
import { PortfolioShowcase } from "./components/portfolio-showcase";
import { ProjectDetail } from "./components/project-detail";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      {/* <Skills /> */}
      <Experience />
      <PortfolioShowcase />
      {/* <Projects /> */}
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0F172A] overflow-x-hidden">
        {/* Background Effects */}
        <div className="fixed inset-0 -z-10">
          {/* Gradient Orbs */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#3B82F6]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#8B5CF6]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.05) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:projectId" element={<ProjectDetail />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}