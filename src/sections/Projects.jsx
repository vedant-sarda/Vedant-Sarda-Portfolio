"use client";
  import { useState, useMemo, useCallback } from "react";
  import { motion, AnimatePresence } from "framer-motion";
  import { SectionHeading } from "@/components/SectionHeading";
  import { GlassCard } from "@/components/GlassCard";
  import { ProjectModal } from "@/components/ProjectModal";
  import { projects } from "@/data/projects";

  export function Projects() {
    const [filter, setFilter] = useState("fullstack");
    const [selectedProject, setSelectedProject] = useState(null);
    
    const filteredProjects = useMemo(() => {
      return projects.filter((p) => p.category === filter);
    }, [filter]);
    
    const handleFilterChange = useCallback((newFilter) => {
      setFilter(newFilter);
    }, []);

    return (
      <section id="projects" className="pt-6 pb-14 lg:pt-10 lg:pb-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionHeading title="Projects" />
            <div className="flex gap-4 mb-12">
              <button onClick={() => handleFilterChange("fullstack")} className={`px-6 py-2 rounded-full font-medium transition-all ${filter === "fullstack" ? "bg-gradient-blue text-white shadow-[0_0_15px_rgba(56,189,248,0.45)]" : "glass-card text-muted-foreground hover:text-foreground"}`}>Fullstack</button>
              <button onClick={() => handleFilterChange("integration")} className={`px-6 py-2 rounded-full font-medium transition-all ${filter === "integration" ? "bg-gradient-blue text-white shadow-[0_0_15px_rgba(56,189,248,0.45)]" : "glass-card text-muted-foreground hover:text-foreground"}`}>Mulesoft / Integration</button>
            </div>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div key={project.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }}>
                    <GlassCard onClick={() => setSelectedProject(project)} className="h-full flex flex-col">
                      {project.image ? (
                        <div className="relative aspect-video rounded-md overflow-hidden mb-4 border border-border/50">
                          <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
                        </div>
                      ) : (
                        <div className="relative aspect-video rounded-md mb-4 bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center border border-primary/20">
                          <span className="font-bold text-gradient text-xl">{project.title}</span>
                        </div>
                      )}
                      <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                        {project.icon && <img src={project.icon} alt="" className="h-5 w-5 rounded-sm bg-white/5 p-0.5" />}
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm flex-1 line-clamp-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.stack.slice(0, 3).map((tech) => (
                          <span key={tech} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10">{tech}</span>
                        ))}
                        {project.stack.length > 3 && (
                          <span className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10">+{project.stack.length - 3}</span>
                        )}
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
        <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />
      </section>
    );
  }
  