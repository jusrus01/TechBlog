/** @type {import('tailwindcss').Config} */
module.exports = {
  // https://tailwindcss.com/docs/preflight#headings-are-unstyled
  // https://tailwindcss.com/docs/upgrade-guide#base-layer-must-be-present
  corePlugins: {
    preflight: false
  },
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
