module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bgLight: "#EBEBEB",
        bgDarkSecondary: "#242424",
      },
    },
    fontFamily: {
      mono: ["IBM Plex Mono", "sans-serif"],
    },
  },

  plugins: [],
};
