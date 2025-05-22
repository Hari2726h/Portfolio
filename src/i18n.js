// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translations
const resources = {
  en: {
    translation: {
      navbar: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        certifications: "Certifications",
        coding: "Coding",
        contact: "Contact",
      },
      hero: {
        welcome: "Welcome to my portfolio",
      },
      about: {
        title: "About Me",
      },
      skills: {
        title: "Skills",
      },
      projects: {
        title: "Projects",
      },
      certifications: {
        title: "Certifications",
      },
      coding: {
        title: "Coding Profiles",
      },
      contact: {
        title: "Contact Me",
        submit: "Send Message",
      },
    }
  },
  fr: {
    translation: {
      navbar: {
        home: "Accueil",
        about: "À propos",
        skills: "Compétences",
        projects: "Projets",
        certifications: "Certificats",
        coding: "Codage",
        contact: "Contact",
      },
      hero: {
        welcome: "Bienvenue sur mon portfolio",
      },
      about: {
        title: "À propos de moi",
      },
      skills: {
        title: "Compétences",
      },
      projects: {
        title: "Projets",
      },
      certifications: {
        title: "Certificats",
      },
      coding: {
        title: "Profils de codage",
      },
      contact: {
        title: "Contactez-moi",
        submit: "Envoyer le message",
      },
    }
  },
  // Add more languages here (e.g. Hindi, Spanish, etc.)
};

i18n
  .use(LanguageDetector) // Automatically detects browser language
  .use(initReactI18next) // Integrates with React
  .init({
    resources,
    fallbackLng: 'en', // Default language if none detected
    debug: false, // Set to true for debugging

    interpolation: {
      escapeValue: false, // Not needed for React
    },

    detection: {
      order: ['localStorage', 'navigator'], // Tries localStorage first
      caches: ['localStorage'], // Store selected language
    }
  });

export default i18n;
