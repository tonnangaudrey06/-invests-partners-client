import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from "react-i18next";

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
    .use(reactI18nextModule)
    .use(LanguageDetector)
    .init({
        resources,
        fallbackLng: "fr",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;