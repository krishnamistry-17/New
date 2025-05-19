import i18n from "i18next";
import LanguageDetectore from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import ar from "./locales/ar.json";
import pt from "./locales/pt.json";
import hi from "./locales/hi.json";
i18n
  .use(LanguageDetectore)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    // lng: "en",
    resources: {
      en: {
        translation: en,
      },
      ar: {
        translation: ar,
      },
      pt: {
        translation: pt,
      },
      hi: {
        translation: hi,
      },
    },
    interpolation: {
      escapeValue: false,
    },
    ns: "translation", // namespaces help to divide huge translations into multiple small files.
    defaultNS: "translation",
  });

export default i18n;
