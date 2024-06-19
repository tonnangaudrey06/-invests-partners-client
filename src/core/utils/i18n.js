import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import translationEN from '../translations/en.json';
import translationFR from '../translations/fr.json';

const resources = {
    en: {
        translation: translationEN
    },
    fr: {
        translation: translationFR
    }
};


i18n
  .use(LanguageDetector)
  .use(initReactI18next) // bind react-i18next to the instance
  .init({
    resources,

    fallbackLng: 'fr',

    interpolation: {
      escapeValue: false, // not needed for react!!
    },
  });


export default i18n;