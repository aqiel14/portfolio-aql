module.exports = {
  purge: ["./pages/**/*.tsx", "./components.tsx"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      kaushan: ["Kaushan Script"],
    },
    boxShadow: {
      "custom-light": "0 0 10px #313131",
      "custom-dark": "5px 5px 10px #0a0c0e , -5px -5px 10px #14161c",
    },
    extend: {
      colors: {
        green: {
          DEFAULT: "#00f260",
        },
        dark: {
          DEFAULT: "#010101",
          100: "#0a0b0e",
          200: "#16181d",
          300: "#16181d",
          500: "#0f1115",
          700: "#202125",
        },
        night: {
          1: "#1b3549",
          2: "#684159",
          3: "#c74c46",
        },
        twilight: {
          1: "#085467",
          2: "#afa7bb",
          3: "#f4c0b3",
        },
        pacific: {
          1: "#3c3846",
          2: "#4a4b78",
          3: "#fde9cc",
        },
        deepblue: {
          1: "#022534",
          2: "#08546c",
          3: "#a0bacc",
        },
        concretesky: {
          1: "#bebaaf",
          2: "#d0d4d7",
          3: "#209c8d",
        },
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["dark"],
    },
  },
  plugins: [],
};
