/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        azul: {
          100: "#002266",
        },
        verde: {
          100: "#64a23d",
        },
        cinza: {
          100: "#585c5e ",
        },
        laranja: {
          100: "#ff4a00 ",
        },
        branco: {
          100: "#ffffff",
        },
        preto: {
          100: "#000000 ",
        },
      },
    },
  },
  plugins: [],
};
