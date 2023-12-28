module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        hero: "url('./images/hero-background.jpg')",
      },
      fontFamily: {
        raleway: ["Raleway"],
      },
      colors: {
        primary: {
          DEFAULT: "#0A2342",
        },
        secondary: {
          DEFAULT: "#C3F73A",
        },
        background: {
          DEFAULT: "#3B5249",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
