import { ScrambleText } from "./ScrambleText";

  export function SectionHeading({ title, className = "" }) {
    return (
      <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-10 lg:mb-12 text-gradient ${className}`}>
        <ScrambleText text={title} />
      </h2>
    );
  }
  