module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    scrollbar: ["dark", "rounded"],
  },
  plugins: [
    require("tailwind-scrollbar"), 
    require("@tailwindcss/forms")
  ],
}
