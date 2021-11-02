module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: "class",
  theme: {
    fontFamily: {
      serif: ["Playfair Display", "serif"],
      sans: ["Inter", "sans-serif"],
      mono: ["Fira Code", "monospace"],
    },
    extend: {
      colors: {
        primary: "#F4544E",
        secondary: "#FEAA00",
        ternary: "#E36506",
        ternary30: "#E3650630",
      },
      typography: (theme) => ({
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
            code: {
              fontFamily: '"Fira Code"',
              backgroundColor: "#a9a9a9",
              borderRadius: "5px",
              padding: "0.1rem 0.35rem",
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
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
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
