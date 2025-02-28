import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import {initReactI18next} from 'react-i18next'

i18n
    // Подключение бэкенда i18next
    .use(Backend)
    // Автоматическое определение языка
    .use(LanguageDetector)
    // модуль инициализации
    .use(initReactI18next)
    .init({
        // Стандартный язык
        fallbackLng: 'en',
        debug: false,

        // Распознавание и кэширование языковых кук
        detection: {
            lookupLocalStorage: 'i18nextLng',
            order: ['localStorage', 'cookie'],
            cache: ['cookie']
        },
        interpolation: {
            escapeValue: false
        },
        cacheUserLanguage(lng, caches)
        {
            if (!caches) caches = this.options.caches;
            if (!caches) return;
            if (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(lng) > -1) return;
            caches.forEach((cacheName) => {
                if (this.detectors[cacheName]) this.detectors[cacheName].cacheUserLanguage(lng, this.options);
            });
        }
    })


export default i18n;