import { useParams, useNavigate } from "react-router";
import { motion } from "motion/react";
import { 
  Github, 
  ArrowLeft, 
  Code2, 
  Globe, 
  Layout, 
  ShieldCheck, 
  Zap,
  Sparkles,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { projects } from "../data/projects";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from 'embla-carousel-react';

export function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === projectId);
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Project Not Found</h2>
          <button 
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-[#3B82F6] rounded-full font-bold"
          >
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  const galleryImages = project.images || [project.image];

  return (
    <div className="min-h-screen bg-[#0F172A] text-white pt-24 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="group flex items-center gap-2 text-white/60 hover:text-[#3B82F6] transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Portfolio</span>
        </button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column: Image Carousel and Badges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative group">
              <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-white/5" ref={emblaRef}>
                <div className="flex">
                  {galleryImages.map((src, index) => (
                    <div className="flex-[0_0_100%] min-w-0 relative aspect-video" key={index}>
                      <ImageWithFallback
                        src={src}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-40" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel Controls */}
              {galleryImages.length > 1 && (
                <>
                  <button
                    onClick={scrollPrev}
                    disabled={!prevBtnEnabled}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#3B82F6] disabled:cursor-not-allowed disabled:opacity-40"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={scrollNext}
                    disabled={!nextBtnEnabled}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#3B82F6] disabled:cursor-not-allowed disabled:opacity-40"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  
                  {/* Dots */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {galleryImages.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === selectedIndex ? "bg-[#3B82F6] w-6" : "bg-white/30"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/70 text-sm flex items-center gap-2"
                >
                  <Zap className="w-4 h-4 text-[#3B82F6]" />
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="px-3 py-1 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center gap-2">
                <Sparkles className="w-3 h-3 text-[#3B82F6]" />
                <span className="text-[10px] font-bold text-[#3B82F6] uppercase tracking-wider">Showcase</span>
              </div>
              <span className="text-white/40 text-sm">{project.date ? `${project.date} Project` : "Project"}</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              {project.title}
            </h1>
            
            {project.subtitle && (
              <p className="text-[#3B82F6] font-medium mb-6 text-lg">
                {project.subtitle}
              </p>
            )}

            <div className="space-y-8 flex-1">
              <section>
                <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Layout className="w-6 h-6 text-[#3B82F6]" />
                  Overview
                </h4>
                <p className="text-white/70 leading-relaxed text-lg">
                  {project.description}
                </p>
              </section>

              {project.features && (
                <section>
                  <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <ShieldCheck className="w-6 h-6 text-[#3B82F6]" />
                    Key Features
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex gap-3 text-white/70 leading-relaxed">
                        <div className="mt-2 w-2 h-2 rounded-full bg-[#3B82F6] shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {project.responsibilities && (
                <section>
                  <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <Code2 className="w-6 h-6 text-[#3B82F6]" />
                    My Responsibilities
                  </h4>
                  <ul className="space-y-4">
                    {project.responsibilities.map((resp, i) => (
                      <li key={i} className="flex gap-3 text-white/70 leading-relaxed">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            {/* Actions */}
            <div className={`grid ${project.demo ? "sm:grid-cols-2" : "grid-cols-1"} gap-4 mt-12`}>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-[#3B82F6] text-white rounded-2xl font-bold hover:bg-[#2563EB] transition-all shadow-xl shadow-[#3B82F6]/20 group"
                >
                  <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Live Preview
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold hover:bg-white/10 transition-all group"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Source Code
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
