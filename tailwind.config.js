/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sofia: ["Sofia Pro"],
        opensan: ["Open Sans"],
        sourcesan: ["Souce Sans 3"],
      },
      fontSize: {
        header: ["28px"],
        body: ["18px"],
        cardheader: ["22px"],
        cardbody: ["14px"],
      },
      colors: {
        primary: "#232323",
        pridark: "#232323",
        background: "#C3EAC6", // Custom primary color
        secondary: "#2EA14A", // Custom secondary color
        hihglight: "#154119",
        sub: "#C3EAC6",
        footer: "#1C1C1C",
        // Add more custom colors as needed
      },
    },

    // screens: {
    //   sm: "576px",
    //   // => @media (min-width: 576px) { ... }

    //   md: "960px",
    //   // => @media (min-width: 960px) { ... }

    //   lg: "1440px",
    //   // => @media (min-width: 1440px) { ... }
    // },
  },
  plugins: [],
};
