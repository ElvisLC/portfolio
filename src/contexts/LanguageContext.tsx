import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  es: {
    // Navbar
    "nav.about": "Sobre Mí",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.skills": "Habilidades",
    "nav.contact": "Contacto",

    // Hero
    "hero.greeting": "Hola, soy",
    "hero.role": "Desarrollador Full Stack",
    "hero.description": "Desarrollador Full Stack orientado a producto, enfocado en construir soluciones claras, mantenibles y alineadas a objetivos de negocio.",
    "hero.viewProjects": "Ver Proyectos",
    "hero.contactMe": "Contáctame",

    // About
    "about.title": "Sobre Mí",
    "about.description": "Soy un Desarrollador Full Stack orientado a producto con pasión por construir soluciones digitales que generen un impacto real. Mi enfoque combina experiencia técnica con una profunda comprensión de los objetivos de negocio, asegurando que cada funcionalidad que desarrollo agregue valor genuino.",
    "about.technicalExcellence": "Excelencia Técnica",
    "about.technicalExcellenceDesc": "Experiencia en proyectos de mediana y gran escala con enfoque en código limpio y mantenible.",
    "about.collaboration": "Colaboración Multidisciplinaria",
    "about.collaborationDesc": "Fuerte colaboración con equipos de diseño y producto para entregar soluciones alineadas.",
    "about.productMindset": "Mentalidad de Producto",
    "about.productMindsetDesc": "Responsabilidad total de funcionalidades desde la concepción hasta el despliegue, siempre alineado con objetivos de negocio.",
    "about.quality": "Calidad y Escalabilidad",
    "about.qualityDesc": "Compromiso con construir soluciones robustas y escalables que perduren en el tiempo.",

    // Experience
    "experience.title": "Experiencia",
    "experience.yuppie.description": "Estuve involucrado en el desarrollo de múltiples proyectos de alto impacto incluyendo TodoBien POP (carrito de compras con gestión de estado y flujo de compra completo) y CEO MINDS (integración AWS S3, WebSockets para chat y notificaciones en tiempo real, y sistema de pagos de membresía).",
    "experience.mexican.description": "Participe en el desarrollo de un CMS para campañas publicitarias desde cero. Responsable del ciclo completo de desarrollo de funcionalidades incluyendo procesos de QA, asegurando entregables de alta calidad alineados con objetivos de negocio.",
    "experience.blockchain.description": "Desarrollé un sistema de gestión de inventario con enfoque en experiencia de usuario y confiabilidad. Implementé pruebas E2E y UI comprehensivas con Cypress para asegurar funcionalidad robusta.",

    // Projects
    "projects.title": "Proyectos",
    "projects.ceominds.description": "Plataforma empresarial con comunicación en tiempo real vía WebSockets, gestión de archivos AWS S3, y sistema completo de pagos de membresía. Construida para escalabilidad y colaboración en tiempo real.",
    "projects.todobien.description": "Carrito de compras e-commerce con gestión de estado avanzada, flujo de compra optimizado y experiencia de usuario fluida. Enfoque en rendimiento y optimización de conversión.",
    "projects.cms.description": "Sistema de gestión de contenido para crear y administrar campañas publicitarias. Incluye UI intuitiva, analíticas de campaña y flujo de trabajo optimizado para equipos de marketing.",
    "projects.inventory.description": "Sistema integral de seguimiento de inventario con actualizaciones en tiempo real, capacidades de reportes y cobertura completa de pruebas E2E asegurando confiabilidad.",
    "projects.viewProject": "Ver Proyecto",

    // Skills
    "skills.title": "Habilidades",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.testing": "Testing",
    "skills.tools": "Herramientas",

    // Contact
    "contact.title": "Contacto",
    "contact.description": "Siempre estoy interesado en escuchar sobre nuevas oportunidades y proyectos interesantes. ¡No dudes en contactarme!",
    "contact.sendEmail": "Envíame un Email",

    //Footer 
    "footer.rights" : "Todos los derechos reservados.",

  },
  en: {
    // Navbar
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",

    // Hero
    "hero.greeting": "Hello, I'm",
    "hero.role": "Full Stack Developer",
    "hero.description": "Product-oriented Full Stack Developer focused on building clear, maintainable solutions aligned with business objectives.",
    "hero.viewProjects": "View Projects",
    "hero.contactMe": "Contact Me",

    // About
    "about.title": "About Me",
    "about.description": "I'm a product-oriented Full Stack Developer with a passion for building digital solutions that make a real impact. My approach combines technical expertise with a deep understanding of business objectives, ensuring every feature I develop adds genuine value.",
    "about.technicalExcellence": "Technical Excellence",
    "about.technicalExcellenceDesc": "Experience in medium and large-scale projects with focus on clean, maintainable code.",
    "about.collaboration": "Cross-functional Collaboration",
    "about.collaborationDesc": "Strong collaboration with design and product teams to deliver aligned solutions.",
    "about.productMindset": "Product Mindset",
    "about.productMindsetDesc": "Feature ownership from conception to deployment, always aligned with business goals.",
    "about.quality": "Quality & Scalability",
    "about.qualityDesc": "Commitment to building robust, scalable solutions that stand the test of time.",

    // Experience
    "experience.title": "Experience",
    "experience.yuppie.description": "Led development of multiple high-impact projects including TodoBien POP (shopping cart with state management and complete purchase flow) and CEO MINDS (AWS S3 integration, WebSockets for real-time chat & notifications, and membership payment system).",
    "experience.mexican.description": "Built a CMS for advertising campaigns from the ground up. Responsible for full feature development cycle including QA processes, ensuring high-quality deliverables aligned with business objectives.",
    "experience.blockchain.description": "Developed an inventory management system with focus on user experience and reliability. Implemented comprehensive E2E and UI testing with Cypress to ensure robust functionality.",

    // Projects
    "projects.title": "Projects",
    "projects.ceominds.description": "Enterprise platform featuring real-time communication via WebSockets, AWS S3 file management, and a complete membership payment system. Built for scalability and real-time collaboration.",
    "projects.todobien.description": "E-commerce shopping cart with advanced state management, optimized purchase flow, and seamless user experience. Focus on performance and conversion optimization.",
    "projects.cms.description": "Content management system for creating and managing advertising campaigns. Features intuitive UI, campaign analytics, and streamlined workflow for marketing teams.",
    "projects.inventory.description": "Comprehensive inventory tracking system with real-time updates, reporting capabilities, and full E2E test coverage ensuring reliability.",
    "projects.viewProject": "View Project",

    // Skills
    "skills.title": "Skills",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.testing": "Testing",
    "skills.tools": "Tools",

    // Contact
    "contact.title": "Get In Touch",
    "contact.description": "I'm always interested in hearing about new opportunities and interesting projects. Feel free to reach out!",
    "contact.sendEmail": "Send me an Email",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.built": "Built with React, TypeScript & ❤️",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("portfolio-language");
    return (saved as Language) || "es";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("portfolio-language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
