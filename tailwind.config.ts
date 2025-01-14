import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom Colors
        terracotta: '#E57373', // Muted Terracotta
        mustard: '#F7C873', // Warm Mustard Yellow
        teal: '#7099A8', // Dusty Teal
        olive: '#8AA17E', // Olive Green
        cream: '#FFF4E6', // Light Cream
        espresso: '#4B3832', // Deep Espresso Brown
        lavender: '#BFA2DB', // Soft Lavender
        // Custom Background Color
        cozybg: '#F1E0D6', // A soft, warm background for a cozy vibe
      },
    },
  },
  plugins: [],
} satisfies Config;
