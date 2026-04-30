"use client";
  import { useEffect, useState, useRef } from "react";

  const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

  export function ScrambleText({ text, className = "" }) {
    const [displayText, setDisplayText] = useState(text);
    const frameRef = useRef(null);
    const iterationRef = useRef(0);
    const maxIterations = 15;

    useEffect(() => {
      iterationRef.current = 0;
      const scramble = () => {
        if (iterationRef.current >= maxIterations) {
          setDisplayText(text);
          return;
        }
        const iteration = iterationRef.current;
        const newText = text.split("").map((char, index) => {
          if (char === " ") return " ";
          if (index < (iteration / maxIterations) * text.length) return text[index];
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        }).join("");
        setDisplayText(newText);
        iterationRef.current++;
        frameRef.current = requestAnimationFrame(() => setTimeout(scramble, 30));
      };

      scramble();
      return () => {
        if (frameRef.current) cancelAnimationFrame(frameRef.current);
      };
    }, [text]);

    return (
      <span className={`inline-block font-mono ${className}`}>
        {displayText}
      </span>
    );
  }
  