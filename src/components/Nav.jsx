"use client";
  import { useState, useEffect } from "react";
  import { Menu, X } from "lucide-react";
  import { GradientText } from "./GradientText";

  const NAV_LINKS = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Resume", href: "#resume" },
  ];

  export function Nav() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
      const handleScroll = () => setIsScrolled(window.scrollY > 20);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <a href="#about" className="text-3xl lg:text-4xl font-bold tracking-tighter">
            <GradientText>VS</GradientText>
          </a>
          <nav className="hidden md:flex gap-8 lg:gap-10">
            {NAV_LINKS.map((link) => (
              <a key={link.name} href={link.href} className="text-base lg:text-lg font-medium text-muted-foreground hover:text-foreground transition-colors">
                {link.name}
              </a>
            ))}
          </nav>
          <button className="md:hidden text-foreground p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
        {mobileOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border/50 p-6 flex flex-col gap-4 md:hidden">
            {NAV_LINKS.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setMobileOpen(false)} className="text-lg font-medium text-foreground py-2 border-b border-border/20">
                {link.name}
              </a>
            ))}
          </div>
        )}
      </header>
    );
  }
  