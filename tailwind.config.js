/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#141414",
        light: "#dedede",
      },
      backgroundImage: {
        linear_grad_145_light: "linear-gradient(145deg, #eeeeee, #c8c8c8)",
        linear_grad_145_dark: "linear-gradient(145deg, #121212, #151515)",
      },
      fontFamily: {
        pixel: ["Silkscreen", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        custom_sans: ["Josefin Sans", "sans-serif"],
      },
      animation: {
        "hide-show": "hide_show 1s ease 1",
        "show-slide-right": "show_slide_right 1.5s ease 1",
      },
      keyframes: {
        hide_show: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        show_slide_right: {
          "0%": { opacity: 0, transform: "translateX(-10px)" },
          "100%": { opacity: 1, transform: "translateX(0px)" },
        },
      },
      boxShadow: {
        custom: "0 4px 20px -5px rgba(0, 0, 0, 0.3)",
      },
      screens: {
        "2xl_max": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl_max: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg_max: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        md_max: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        sm_max: { max: "639px" },
        // => @media (max-width: 639px) { ... }

        xs_max: { max: "280px" },
        // => @media (max-width: 280px) { ... }
      },
    },
  },
  plugins: [],
};
