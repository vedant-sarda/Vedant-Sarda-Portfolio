"use client";
  import { useState, useEffect } from "react";
  import { motion, AnimatePresence } from "framer-motion";
  import { SectionHeading } from "@/components/SectionHeading";
  import { CONSTANTS } from "@/data/constants";
  import { Download, Maximize2, X, ExternalLink, FileText } from "lucide-react";
  import { Button } from "@/components/ui/button";

  const RESUME_IMAGE = "/resume-preview.png";

  export function ResumeSection() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
      if (!open) return;
      const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKey);
      };
    }, [open]);

    return (
      <section id="resume" className="py-14 lg:py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }}>
            <SectionHeading title="Resume" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10 lg:gap-14 items-center">
              <div className="flex flex-col gap-5 md:col-span-2">
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-md">
                  A snapshot of my experience, skills, certifications, and education.
                  Preview the document on the right, open it full-screen, or download the PDF.
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 max-w-md">
                  <Button onClick={() => setOpen(true)} className="bg-gradient-blue text-white hover:opacity-90">
                    <Maximize2 className="mr-2 h-4 w-4" /> Enlarge Preview
                  </Button>
                  <Button asChild variant="outline" className="border-sky-400/40 text-sky-300 hover:bg-sky-400/10">
                    <a href={CONSTANTS.resumeUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Open PDF
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-sky-400/40 text-sky-300 hover:bg-sky-400/10">
                    <a href={CONSTANTS.resumeUrl} download>
                      <Download className="mr-2 h-4 w-4" /> Download
                    </a>
                  </Button>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <FileText className="h-3.5 w-3.5" /> Vedant_Sarda_2026.pdf
                </div>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 200, damping: 25 }} onClick={() => setOpen(true)} className="md:col-span-3 group relative cursor-zoom-in glass-card rounded-xl overflow-hidden w-full max-w-2xl mx-auto md:ml-auto md:mr-0 shadow-[0_0_50px_rgba(56,189,248,0.18)]">
                <img src={RESUME_IMAGE} alt="Resume preview" className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-black/70 backdrop-blur px-2.5 py-1 text-[11px] text-sky-200 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="h-3 w-3" /> Click to enlarge
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8" onClick={() => setOpen(false)}>
              <button onClick={() => setOpen(false)} className="absolute top-4 right-4 z-10 rounded-full bg-white/10 hover:bg-white/20 p-2 text-white transition" aria-label="Close">
                <X className="h-6 w-6" />
              </button>
              <motion.img initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} transition={{ duration: 0.25 }} src={RESUME_IMAGE} alt="Resume full view" onClick={(e) => e.stopPropagation()} className="max-h-full max-w-full md:max-w-3xl object-contain rounded-lg shadow-2xl" />
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    );
  }
  