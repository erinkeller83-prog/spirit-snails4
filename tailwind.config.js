/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        tealdeep: "#114B5F",
        coral: "#F45B69",
        sand: "#F6E8D7",
        olive: "#6C7A46"
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Raleway", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 6px 30px rgba(0,0,0,0.08)"
      },
      keyframes: {
        glow: { '0%,100%': { boxShadow: '0 0 0 rgba(0,0,0,0)' }, '50%': { boxShadow: '0 0 0 6px rgba(244,91,105,0.15)' } }
      },
      animation: {
        glow: 'glow 4s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
