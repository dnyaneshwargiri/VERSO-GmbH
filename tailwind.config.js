/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        ibm: ["IBM-Plex-Sans"],
      },
      fontSize: {
        base: "16px",
      },
      colors: {
        baseColor: "#ECE9E8",
      },
    },
  },
  plugins: [],
};
