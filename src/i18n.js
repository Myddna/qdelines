import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { DateTime } from 'luxon';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .on('languageChanged', (lng) => {
    // Update html attribute
    document.documentElement.setAttribute('lang', lng);
  })
  .init({
    debug: false,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
      // Date object formatting
      format: (value, format, lng) => {
        if (value instanceof Date) {
          return DateTime.fromJSDate(value)
            .setLocale(lng)
            .toLocaleString(DateTime[format]);
        }
        return value;
      },
    },
    react: {
      transKeepBasicHtmlNodesFor: ['strong', 'em', 'br'],
    },
  });

export default i18n;
