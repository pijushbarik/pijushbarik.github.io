module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: false,
  theme: {
    fontFamily: {
      serif: ["Playfair Display", "serif"],
      sans: ["Roboto", "sans-serif"],
      mono: ["B612 Mono", "monospace"],
    },
    extend: {
      colors: {
        primary: "#F4544E",
        secondary: "#FEAA00",
        ternary: "#E36506",
        ternary30: "#E3650630",
      },
    },
  },
  variants: {
    extend: {
      margin: ["last"],
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
