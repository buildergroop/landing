module.exports = {
  content: ["./src/**/**/*.{ts,tsx,js,jsx}"],
  darkMode: 'class', // or 'media' or 'class'
  mode: "jit",
  theme: {
    extend: {
      colors: {
        dark: "#010101",
        white: "#FFF",
        white1: "#DADADA",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
