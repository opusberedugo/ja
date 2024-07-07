/** @type {import('tailwindcss').Config} */
module.exports = 
{
  content: ['./views/*.html',],
  theme: {
    extend: {
      colors: {
        crimson: '#DC143C',
        midnight: '#181a1f',
        "deep-midnight": '#14181d',
        "deep-crimson": '#B01030',
        "midnight-steel": '#242D37',
        "blue-slate": '#2C3E50',
        "foggy-sky": '#A6ADBB'
      }
    },
  },
  plugins: [require('daisyui')],
}
// console.clear();
// console.log(module.exports.theme);