"use client";
  import { motion } from "framer-motion";
  import { CONSTANTS } from "@/data/constants";
  import { ScrambleText } from "@/components/ScrambleText";
  import { Github, Linkedin, FileText, Code2 } from "lucide-react";

  export function Hero() {
    return (
      <section id="about" className="relative pt-28 lg:pt-32 pb-12 lg:pb-16 flex items-center min-h-[calc(100dvh-4rem)]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-20">
            <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: "easeOut" }} className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 shrink-0">
              <div className="relative w-full h-full rounded-full p-1.5 bg-gradient-primary shadow-[0_0_60px_rgba(168,85,247,0.4)]">
                <img src={CONSTANTS.profileImage} alt={CONSTANTS.name} className="w-full h-full object-cover rounded-full border-4 border-background" />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }} className="flex-1 text-center md:text-left">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-5 text-gradient leading-[1.05]">
                <ScrambleText text={CONSTANTS.name} />
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 font-medium">{CONSTANTS.role}</h2>
              <p className="text-base md:text-lg lg:text-xl leading-relaxed text-muted-foreground mb-8 max-w-3xl">{CONSTANTS.description}</p>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <SocialLink href={CONSTANTS.socials.linkedin} icon={<Linkedin />} label="LinkedIn" />
                <SocialLink href={CONSTANTS.socials.github} icon={<Github />} label="GitHub" />
                <SocialLink href={CONSTANTS.socials.leetcode} icon={<Code2 />} label="LeetCode" />
                <SocialLink href={CONSTANTS.resumeUrl} icon={<FileText />} label="Resume" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  function SocialLink({ href, icon, label }) {
    return (
      <a href={href} target="_blank" rel="noreferrer" aria-label={label} title={label} className="w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-full glass-card text-foreground hover:text-sky-300 transition-colors">
        {icon}
      </a>
    );
  }
  