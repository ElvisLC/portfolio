import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="py-8 border-t border-border">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground text-sm"
        >
          <p>© {currentYear} Elvis La Cruz. {t("footer.rights")}</p>
          <p className="font-mono text-xs">
            {t("footer.built")}
          </p>
        </motion.div>
      </Container>
    </footer>
  );
}
