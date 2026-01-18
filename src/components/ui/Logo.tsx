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

      <span className="text-lg font-bold tracking-tight">
        <span className="text-gradient">elvis</span>
        <span className="text-foreground">.dev</span>
      </span>
    </motion.a>
  );
}
