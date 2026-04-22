"use client";
  import { useEffect, useState } from "react";

  const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

  export function ScrambleText({ text, className = "" }) {
    const [displayText, setDisplayText] = useState(text);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
      let frameId;
      let iteration = 0;
      const maxIterations = 15;

      const scramble = () => {
        if (iteration >= maxIterations) {
          setDisplayText(text);
          return;
        }
        const newText = text.split("").map((char, index) => {
          if (char === " ") return " ";
          if (index < (iteration / maxIterations) * text.length) return text[index];
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        }).join("");
        setDisplayText(newText);
        iteration++;
        frameId = requestAnimationFrame(() => setTimeout(scramble, 30));
      };

      scramble();
      return () => cancelAnimationFrame(frameId);
    }, [text, isHovered]);

    return (
      <span
        className={`inline-block font-mono ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {displayText}
      </span>
    );
  }
  