import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)"],
        cursive: ["var(--font-monte-carlo)"],
      },
      colors: {
        primary: {
          900: "#17281C",
          500: "#599B7B",
          450: "#599B7B1A",
          400: "#95D7B7",
          300: "#DEE8E3",
        },
        secondary: {
          900: "#552F16",
          500: "#E08549",
          400: "#FFDDA1",
          off: "#F3985C",
        },
        neutral: {
          snow: "#F5F5F5",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
