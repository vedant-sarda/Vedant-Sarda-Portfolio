"use client";
  import { motion } from "framer-motion";

  export function GlassCard({ children, className = "", onClick, hoverEffect = true }) {
    const cardContent = (
      <div
        className={`glass-card rounded-xl p-6 ${className}`}
        onClick={onClick}
      >
        {children}
      </div>
    );
    
    return hoverEffect ? (
      <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }} className="cursor-pointer">
        {cardContent}
      </motion.div>
    ) : (
      cardContent
    );
  }
  