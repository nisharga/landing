/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        sm: "0.75rem",
        base: "0.875rem",
        md: "1rem",
        lg: "1.25rem",
        xl: "1.5rem",
        "2xl": "1.75rem",
        "3xl": "2.25rem",
      },
      colors: {
        black: {
          400: "#ffffff",
          500: "#E5E5E5",
          600: "#C4C4C4",
          700: "#242527",
          800: "#2B2B2B",
          900: "#000000",
        },
      },
    },
  },
  plugins: [],
};
