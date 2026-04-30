"use client";
  import { motion } from "framer-motion";
  import { useMemo } from "react";
  import { SectionHeading } from "@/components/SectionHeading";
  import { GlassCard } from "@/components/GlassCard";
  import { educationList } from "@/data/education";

  export function Education() {
    const memoizedEducation = useMemo(() => educationList, []);
    return (
      <section id="education" className="py-14 lg:py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionHeading title="Education" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {memoizedEducation.map((edu, index) => (
                <motion.div key={edu.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <GlassCard className="h-full flex flex-col">
                    <h3 className="text-2xl font-bold text-gradient mb-2">{edu.level}</h3>
                    <div className="text-xl font-semibold mb-4 text-foreground">{edu.score}</div>
                    <p className="text-muted-foreground mt-auto">{edu.institution}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    );
  }
  