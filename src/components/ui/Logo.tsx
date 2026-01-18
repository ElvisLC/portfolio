import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <motion.a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      whileHover={{ scale: 1.05 }}
      className={`flex items-center gap-2 ${className}`}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        {/* Hexagon background */}
        <path
          d="M20 2L36.5 11.5V30.5L20 40L3.5 30.5V11.5L20 2Z"
          fill="currentColor"
          fillOpacity="0.1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        {/* E letter stylized */}
        <path
          d="M13 13H27M13 20H24M13 27H27M13 13V27"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Accent dot */}
        <circle cx="30" cy="27" r="2" fill="currentColor" />
      </svg>
      <span className="text-lg font-bold tracking-tight">
        <span className="text-gradient">Elvis</span>
        <span className="text-foreground">.dev</span>
      </span>
    </motion.a>
  );
}
