/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container:{
      center: true,
      padding: "16px",
    },
      extend: {
        colors :{
          hijau:"#22c55e",
          hitam:"#1f2937",
          abuabu:"#9ca3af",
        },
        screens: {
          "2xl": "1320px",
        },
      },
  },
  plugins: [],
};
