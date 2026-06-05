import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A2540",
        secondary: "#0070F3",
        accent: "#00C2A8",
        ink: "#102033",
        mist: "#F4F8FB",
      },
      boxShadow: {
        premium: "0 24px 80px rgba(10, 37, 64, 0.16)",
        glow: "0 0 0 1px rgba(0, 112, 243, 0.14), 0 20px 60px rgba(0, 112, 243, 0.18)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
