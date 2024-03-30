import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ["./src/**/*.{astro,ts}"],
    transform: (content) => content.replace(/taos:/g, ""),
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Saira Variable", ...defaultTheme.fontFamily.sans],
        body: ["Nunito Variable", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  safelist: [
    "!duration-[0ms]",
    "!delay-[0ms]",
    'html.js :where([class*="taos:"]:not(.taos-init))',
  ],
  plugins: [require("@tailwindcss/typography"), require("taos/plugin")],
};
