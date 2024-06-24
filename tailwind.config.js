/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#00B8FF",
        secondaryColor: "#001F2B",
        shadesOfBlue: "#00719c",
        mainGray: "#e5e5e5",
      },
      boxShadow: {
        "3xl": "0 15px 15px 10px rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};
