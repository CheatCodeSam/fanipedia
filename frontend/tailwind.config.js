module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "../apps/**/templates/**/*.html",
    "../templates/**/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
