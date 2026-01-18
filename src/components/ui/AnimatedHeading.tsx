import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface AnimatedHeadingProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4";
  accent?: boolean;
}

export function AnimatedHeading({
  children,
  className,
  as: Component = "h2",
  accent = false,
}: AnimatedHeadingProps) {
  const baseStyles = {
    h1: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight",
    h2: "text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight",
    h3: "text-2xl sm:text-3xl font-semibold",
    h4: "text-xl sm:text-2xl font-semibold",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Component
        className={cn(
          baseStyles[Component],
          accent && "text-gradient",
          className
        )}
      >
        {children}
      </Component>
    </motion.div>
  );
}
