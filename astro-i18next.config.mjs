/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
    defaultLanguage: "es",
    supportedLanguages: ["es", "en"],
    i18next: {
        debug: true, // convenient during development to check for missing keys
        resources: {
            es: {
                translation: {
                    saludo: "Hola mundo",
                },
            },
            en: {
                translation: {
                    saludo: "Hello world",
                },
            },
        },
    },
};