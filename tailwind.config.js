/** @type {import('tailwindcss').Config} */
const tailwindcssAnimated = require('tailwindcss-animated');
const flowbitePlugin = require('flowbite/plugin');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [tailwindcssAnimated, flowbitePlugin],
};
