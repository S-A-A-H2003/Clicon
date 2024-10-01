import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from '../Asset/Language/en.json';
import ar from '../Asset/Language/ar.json';


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {...en,...ar},
    lng: (localStorage.getItem('Language')||"en"),
    fallbackLng: "en",

    interpolation: {
      escapeValue: false 
    }
  });
export default i18n;