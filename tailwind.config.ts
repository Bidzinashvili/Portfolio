import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "hsl(0, 0%, 11%)",
        "secondary": "#858585",
        "secondary-dark": "#2b2b2b",
        "accent": "hsl(0, 0%, 22%)",
        "background": "hsl(0, 0%, 9%)",
        "light": "#f5f5f5",
        "button-light": "#2b2b2b",
        "button-dark": "#1c1c1c",
      },
    },
  },
  plugins: [],
} satisfies Config;
