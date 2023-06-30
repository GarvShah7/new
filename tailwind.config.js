

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'black': '#000000',      
      'blue': '#000EE6',
    },
    fontFamily: {
      Montserrat: ['Montserrat', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    keyframes: {
      scroll: {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(calc(-250px * 7))" },
      },
    },
    extend: {
      animation: {
        scroll: "scroll 40s linear infinite",
      }
    },
  },
  plugins: [],
}