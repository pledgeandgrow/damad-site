/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'steel-blue': '#1F3A93',
        'concrete': '#7F8C8D',
        'soft-black': '#2C3E50',
        'industrial-orange': '#E67E22',
        'white': '#FFFFFF',
      },
    },
  },
  plugins: [],
}
