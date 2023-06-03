/** @type {import('next-i18next').UserConfig} */
const i18nextConfig = {
    i18n: {
        defaultLocale: "en",
        locales: ["en", "fa"],
    },
    localePath: "./src/locales",
};

module.exports = i18nextConfig;
