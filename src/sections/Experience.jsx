"use client";
  import { motion } from "framer-motion";
  import { SectionHeading } from "@/components/SectionHeading";
  import { GlassCard } from "@/components/GlassCard";
  import { Briefcase, MapPin, Calendar } from "lucide-react";

  const roles = [
    {
      title: "Full Stack Developer",
      company: "Connecting Dots ERP",
      location: "Pune, India",
      period: "July 2024 – Present",
      current: true,
      bullets: [
        "Architected and shipped production-grade modules of a high-traffic ed-tech platform using Next.js 14 (App Router), Express.js, and MongoDB, serving 10K+ monthly users.",
        "Designed and consumed RESTful APIs with structured request validation, JWT-based auth, role-based access control, and centralised error handling.",
        "Optimised backend logic and database queries (indexing, aggregation pipelines, pagination), cutting average API response time by ~40%.",
        "Implemented SEO best practices — semantic markup, server-side rendering, dynamic Open Graph, sitemap & robots — driving organic traffic growth.",
        "Owned end-to-end CI/CD on Vercel (frontend) and Render (backend) with environment-based configs, preview deployments, and zero-downtime releases.",
        "Collaborated with designers and product on Agile sprints, conducted code reviews, and mentored junior interns on Git workflows and clean-code patterns.",
      ],
      tags: ["Next.js","React","TypeScript","Node.js","Express","MongoDB","REST APIs","JWT Auth","TailwindCSS","SEO","Vercel","Render","CI/CD","Agile","Git"],
    },
  ];

  export function Experience() {
    return (
      <section id="experience" className="py-14 lg:py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionHeading title="Experience" />
            <div className="relative pl-8 md:pl-12 border-l-2 border-sky-400/30 space-y-12">
              {roles.map((role, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="relative">
                  <span className="absolute -left-[42px] md:-left-[54px] top-2 flex h-5 w-5 items-center justify-center">
                    <span className="absolute h-5 w-5 rounded-full bg-sky-400/30 animate-ping" />
                    <span className="relative h-3 w-3 rounded-full bg-gradient-to-br from-sky-400 to-purple-500 shadow-[0_0_12px_rgba(56,189,248,0.6)]" />
                  </span>

                  <GlassCard hoverEffect={false} className="p-6 lg:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold flex items-center gap-3">
                          <Briefcase className="h-6 w-6 text-sky-400" />
                          {role.title}
                        </h3>
                        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sky-300 font-medium">
                          <span>{role.company}</span>
                          <span className="text-muted-foreground inline-flex items-center gap-1 text-sm"><MapPin className="h-3.5 w-3.5" /> {role.location}</span>
                          <span className="text-muted-foreground inline-flex items-center gap-1 text-sm"><Calendar className="h-3.5 w-3.5" /> {role.period}</span>
                        </div>
                      </div>
                      {role.current && (
                        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                          Currently Working
                        </span>
                      )}
                    </div>

                    <ul className="mt-4 space-y-2.5 text-muted-foreground list-disc pl-5 marker:text-sky-400/70 leading-relaxed">
                      {role.bullets.map((b, i) => <li key={i}>{b}</li>)}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {role.tags.map((t) => (
                        <span key={t} className="px-2.5 py-1 text-xs rounded-md bg-sky-400/10 text-sky-300 border border-sky-400/20">{t}</span>
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
  