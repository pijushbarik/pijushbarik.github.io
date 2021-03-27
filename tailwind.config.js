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
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme("colors.white"),
            a: {
              color: "#E36506",
              "&:hover": {
                color: "#F4544E",
              },
            },
            h1: {
              color: theme("colors.white"),
              fontFamily: '"Playfair Display", "serif"',
            },
            h2: {
              color: theme("colors.white"),
              fontFamily: '"Playfair Display", "serif"',
            },
            h3: {
              color: theme("colors.white"),
              fontFamily: '"Playfair Display", "serif"',
            },
            h4: {
              color: theme("colors.white"),
            },
            h5: {
              color: theme("colors.white"),
            },
            h6: {
              color: theme("colors.white"),
            },
            blockquote: {
              color: theme("colors.gray.300"),
            },
            strong: {
              color: theme("colors.secondary"),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      margin: ["last"],
      backgroundColor: ["active"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
