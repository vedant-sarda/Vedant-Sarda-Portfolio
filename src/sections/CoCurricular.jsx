"use client";
  import { motion } from "framer-motion";
  import { memo, useMemo } from "react";
  import { SectionHeading } from "@/components/SectionHeading";
  import { Palette, Compass, Sparkles } from "lucide-react";

  const ActivityCard = memo(function ActivityCard({ title, description, Icon, index }) {
    return (
      <motion.div key={index} whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 200, damping: 20 }} className="snap-center shrink-0 w-[85vw] md:w-[380px]">
        <div className="relative h-full rounded-2xl p-[1px] bg-gradient-to-br from-sky-400/40 via-pink-400/20 to-fuchsia-500/30">
          <div className="h-full rounded-2xl bg-card/70 backdrop-blur-md p-6 flex flex-col">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400/20 to-fuchsia-500/20 border border-sky-400/20">
              <Icon size={24} className="text-sky-300" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-foreground">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
          </div>
        </div>
      </motion.div>
    );
  });

  export function CoCurricular() {
    const activities = useMemo(() => [
      { title: "Artist", description: "I am a passionate cartoonist running a small-scale art business, creating unique and creative illustrations.", Icon: Palette },
      { title: "Adventurer", description: "Explorer, trekker, and nature enthusiast who enjoys discovering new places and experiences.", Icon: Compass },
      { title: "Coming Soon", description: "More experiences to be added.", Icon: Sparkles },
    ], []);

    return (
      <section id="co-curricular" className="py-14 lg:py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionHeading title="Co-Curricular" />
            <div className="flex overflow-x-auto pb-8 snap-x snap-mandatory gap-6 scrollbar-hide -mx-6 px-6">
              {activities.map((act, index) => (
                <ActivityCard key={index} title={act.title} description={act.description} Icon={act.Icon} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    );
  }
  