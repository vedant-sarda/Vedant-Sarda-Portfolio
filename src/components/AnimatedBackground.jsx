"use client";
  import { useEffect, useRef } from "react";

  export function AnimatedBackground() {
    const ref = useRef(null);
    const throttleRef = useRef(null);

    useEffect(() => {
      const el = ref.current;
      if (!el) return;
      
      const onMove = (e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        el.style.setProperty("--mx", `${x}%`);
        el.style.setProperty("--my", `${y}%`);
      };
      
      const throttledMove = (e) => {
        if (!throttleRef.current) {
          throttleRef.current = true;
          onMove(e);
          requestAnimationFrame(() => {
            throttleRef.current = null;
          });
        }
      };
      
      window.addEventListener("pointermove", throttledMove, { passive: true });
      return () => window.removeEventListener("pointermove", throttledMove);
    }, []);

    return (
      <div
        ref={ref}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        style={{ "--mx": "50%", "--my": "50%", willChange: "--mx, --my" }}
      >
        <div
          className="absolute inset-0 transition-[background] duration-300"
          style={{
            background:
              "radial-gradient(600px circle at var(--mx) var(--my), rgba(168,85,247,0.18), transparent 60%)",
          }}
        />
        <div className="absolute inset-0 bg-grid opacity-[0.18]" />
        <div className="absolute inset-0 bg-grid-mask" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="aurora" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)]" />
      </div>
    );
  }
  