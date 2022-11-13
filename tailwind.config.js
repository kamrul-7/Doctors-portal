/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "success": "#570DF8",
          "neutral": "#37CDBE",
          "accent": "#3A4256",
          "base-100": "#FFFFFF",
          "secondary": "#3ABFF8",
          "primary": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
