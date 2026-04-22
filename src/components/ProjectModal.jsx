"use client";
  import { useState, useEffect } from "react";
  import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
  import { ExternalLink, Github, Lock, ChevronLeft, ChevronRight } from "lucide-react";
  import { Button } from "@/components/ui/button";
  import { motion, AnimatePresence } from "framer-motion";

  export function ProjectModal({ project, isOpen, onClose }) {
    const [index, setIndex] = useState(0);
    useEffect(() => { setIndex(0); }, [project?.id]);
    if (!project) return null;

    const gallery = (project.screenshots && project.screenshots.length > 0)
      ? project.screenshots
      : project.image ? [project.image] : [];

    const next = () => setIndex((i) => (i + 1) % gallery.length);
    const prev = () => setIndex((i) => (i - 1 + gallery.length) % gallery.length);

    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[760px] glass-card bg-background/95 max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-2xl font-bold">
              {project.icon && <img src={project.icon} alt="" className="h-7 w-7 rounded-md bg-white/5 p-0.5" />}
              <span className="text-gradient">{project.title}</span>
            </DialogTitle>
            <DialogDescription className="text-muted-foreground mt-3 text-base">
              {project.description}
            </DialogDescription>
          </DialogHeader>

          {gallery.length > 0 && (
            <div className="relative my-4">
              <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-sky-400/20 bg-black/30">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={gallery[index]}
                    src={gallery[index]}
                    alt={`${project.title} screenshot ${index + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="object-cover w-full h-full"
                  />
                </AnimatePresence>

                {gallery.length > 1 && (
                  <>
                    <button onClick={prev} aria-label="Previous" className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 hover:bg-black/80 p-2 text-white">
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button onClick={next} aria-label="Next" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 hover:bg-black/80 p-2 text-white">
                      <ChevronRight className="h-4 w-4" />
                    </button>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {gallery.map((_, i) => (
                        <button key={i} onClick={() => setIndex(i)} aria-label={`Go to screenshot ${i + 1}`} className={`h-1.5 rounded-full transition-all ${i === index ? "w-6 bg-sky-400" : "w-1.5 bg-white/40"}`} />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {gallery.length > 1 && (
                <div className="mt-3 flex gap-2 overflow-x-auto scrollbar-hide">
                  {gallery.map((src, i) => (
                    <button key={src} onClick={() => setIndex(i)} className={`shrink-0 rounded-md overflow-hidden border transition ${i === index ? "border-sky-400" : "border-white/10 opacity-60 hover:opacity-100"}`}>
                      <img src={src} alt="" className="h-14 w-24 object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold mb-2">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs rounded-md bg-sky-400/10 text-sky-300 border border-sky-400/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {project.link && (
                <Button asChild className="bg-gradient-blue text-white hover:opacity-90">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Visit Site
                  </a>
                </Button>
              )}
              {project.github && !project.isPrivate && (
                <Button asChild variant="outline" className="border-sky-400/40 hover:bg-sky-400/10">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Source Code
                  </a>
                </Button>
              )}
              {project.isPrivate && (
                <Button variant="outline" disabled className="border-border/50 opacity-50 cursor-not-allowed">
                  <Lock className="mr-2 h-4 w-4" /> Private Repository
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
  