"use client";
  import { motion } from "framer-motion";
  import { useMemo } from "react";
  import { SectionHeading } from "@/components/SectionHeading";
  import { certifications } from "@/data/certifications";
  import { ExternalLink } from "lucide-react";

  export function Certifications() {
    const memoizedCerts = useMemo(() => certifications, []);
    return (
      <section id="certifications" className="py-14 lg:py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionHeading title="Certifications" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {memoizedCerts.map((cert, index) => (
                <motion.a key={cert.id} href={cert.link} target="_blank" rel="noreferrer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -6 }} className="group block">
                  <div className="relative h-full rounded-2xl p-[1px] bg-gradient-to-br from-sky-400/40 via-purple-500/30 to-fuchsia-500/30 hover:from-sky-400/70 hover:via-purple-500/60 hover:to-fuchsia-500/60 transition">
                    <div className="h-full rounded-2xl bg-card/70 backdrop-blur-md p-6 lg:p-8 flex flex-col">
                      <div className="relative aspect-square w-full mb-5 overflow-hidden rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-6">
                        <img src={cert.image} alt={cert.title} loading="lazy" className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" />
                      </div>
                      <h3 className="text-lg lg:text-xl font-bold text-foreground mb-3 leading-snug">{cert.title}</h3>
                      <div className="mt-auto flex items-center justify-between text-sm">
                        <span className="text-sky-300 inline-flex items-center gap-2 font-medium">
                          View Credential
                          <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    );
  }
  