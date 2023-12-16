/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        lightBlue: "#AAC7D8",
        blue: "#243047",
        skyBlue: "#B6BECD",
        skyBlueText: "#213B6F",
        dark: "#181818",
        black: "#292929",
        gray: "#828282",
        topBg: "#E0E0E0",
        purple: "#2E2BA6",
        red: "#BB1E5E",
        green: "#7DE0CE",
        lightGreen: "#1CA2A2",
        darkGreen: "#0C9D97",

        
      },
      fontFamily: {
        monteserrat: ["Montserrat", "sans-serif"],
        nunito: ["Nunito Sans", "sans-serif"],
        
      },
      fontWeight: {
        light: 300,
        normal: 400,
        semibold: 600,
        bold: 700,
      },
      boxShadow: {
        "navbar": "0px 4px 12px 0px #0000000d",
        "card" : "0px 1.8095237016677856px 9.952380180358887px 0px #00000029",
        "card2" : "0px 2px 12px 0px #0000000d",

      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      smd: "880px",
      md: "960px",
      lg: "1200px",
      xlg: "1280px",
      xl: "1440px",
    },
  },
  plugins: [],
};
