import { CONSTANTS } from "@/data/constants";
  import { ScrambleText } from "@/components/ScrambleText";
  import { Github, Linkedin, Instagram, Mail, Phone } from "lucide-react";
  import { memo } from "react";

  const SocialLink = memo(function SocialLink({ href, icon }) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full glass-card text-foreground hover:text-primary transition-colors">
        {icon}
      </a>
    );
  });

  export function Footer() {
    return (
      <footer className="py-12 border-t border-border/50 bg-background/50 backdrop-blur-md">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-3xl font-bold text-gradient mb-6">
                <ScrambleText text="Get In Touch" />
              </h3>
              <div className="space-y-4">
                <a href={`tel:${CONSTANTS.phone}`} className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors w-fit">
                  <Phone size={18} /> {CONSTANTS.phone}
                </a>
                {CONSTANTS.emails.map((email) => (
                  <a key={email} href={`mailto:${email}`} className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors w-fit">
                    <Mail size={18} /> {email}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex md:justify-end items-end gap-4">
              <SocialLink href={CONSTANTS.socials.linkedin} icon={<Linkedin />} />
              <SocialLink href={CONSTANTS.socials.github} icon={<Github />} />
              <SocialLink href={CONSTANTS.socials.instagram} icon={<Instagram />} />
            </div>
          </div>
          <div className="text-center pt-8 border-t border-border/50 text-sm text-muted-foreground">
            © {new Date().getFullYear()} {CONSTANTS.name}. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }
  