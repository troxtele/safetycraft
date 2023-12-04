/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "/node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "/node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "400px",
      exs: "340px",
    },
    extend: {
      fontFamily: {
        sans: ["Montserrat", "Inter", "sans-serif"],
        serif: ["Montserrat", "Inter", "sans-serif"],
        title: ["Rubik", "Inter", "sans-serif"],
        heavytitle: ["NCAA", "Inter", "sans-serif"],
        abnes: ["Abnes", "Inter", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#ffe6d9",
          200: "#ffccb3",
          300: "#ffb38c",
          400: "#ff9966",
          500: "#ff7f40",
          600: "#ff6626",
          700: "#ff4c13",
          800: "#ff4a0f",
          900: "#ff4a00",
        },
        gray: {
          100: "#f4f3f1",
          200: "#dddbd8",
          300: "#ccc9c6",
          400: "#aeaba7",
          500: "#8a8784",
          600: "#656360",
          700: "#4b4a47",
          800: "#31302e",
          900: "#1f1d1b",
        },
      },
      animation: {
        "text-reveal": "text-reveal 1s cubic-bezier(0.77, 0, 0.175, 1) 0.5s",
      },
      keyframes: {
        "text-reveal": {
          "0%": {
            transform: "translate(0, 100%)",
          },
          "100%": {
            transform: "translate(0, 0)",
          },
        },
      },
    },
  },
  plugins: [],
});
