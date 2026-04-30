"use client";
  import { motion } from "framer-motion";
  import { useMemo } from "react";
  import { SectionHeading } from "@/components/SectionHeading";
  import { GlassCard } from "@/components/GlassCard";
  import { skillCategories } from "@/data/skills";

  export function Skills() {
    const memoizedCategories = useMemo(() => skillCategories, []);
    return (
      <section id="skills" className="py-14 lg:py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionHeading title="Skills" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {memoizedCategories.map((category, index) => (
                <motion.div key={category.title} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
                  <GlassCard hoverEffect={false} className="h-full">
                    <h3 className="text-xl font-bold mb-6 text-gradient">{category.title}</h3>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-primary/30 transition-colors">
                          <skill.icon className="text-lg text-primary" />
                          <span className="text-sm font-medium">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    );
  }
  