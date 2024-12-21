/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "#1570EF",
        access: "#175CD3",
        accessBg: "#EFF8FF",
        accessBorder: "#B2DDFF",
        txt: "#181D27",
      },
    },
  },
  plugins: [],
};
