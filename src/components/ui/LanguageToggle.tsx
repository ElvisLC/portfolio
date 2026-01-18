import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.button
      onClick={() => setLanguage(language === "es" ? "en" : "es")}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-3 py-1.5 rounded-lg glass glass-hover text-sm font-medium transition-colors"
      aria-label={language === "es" ? "Switch to English" : "Cambiar a Español"}
    >
      <span className={language === "es" ? "text-primary" : "text-muted-foreground"}>ES</span>
      <span className="text-muted-foreground mx-1">/</span>
      <span className={language === "en" ? "text-primary" : "text-muted-foreground"}>EN</span>
    </motion.button>
  );
}
