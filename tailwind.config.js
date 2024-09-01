/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "rgb(101, 99, 228)",
      },
      fontSize: {
        xs: "0.75rem",
        xxs: "0.625rem",
      },
    },
  },
  plugins: [],
};
