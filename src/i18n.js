import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: {
        translation: {
          aboutUs: {
            title: "About Us",
            paragraph1: "Welcome to FieldRentals, your go-to destination for reliable and high-quality farm equipment rentals.",
            paragraph2: "Our mission is simple: to offer top-notch equipment at competitive prices, backed by exceptional customer service."
          }
        }
      },
      hi: {
        translation: {
          aboutUs: {
            title: "हमारे बारे में",
            paragraph1: "फील्ड रेंटल्स में आपका स्वागत है, जो विश्वसनीय और उच्च-गुणवत्ता वाले कृषि उपकरण किराए पर लेने का प्रमुख स्थान है।",
            paragraph2: "हमारा लक्ष्य सरल है: प्रतिस्पर्धी कीमतों पर उच्च गुणवत्ता वाले उपकरण प्रदान करना, उत्कृष्ट ग्राहक सेवा के साथ।"
          }
        }
      }
    }
  });

export default i18n;
