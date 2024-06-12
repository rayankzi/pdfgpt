/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'heading-thin': ['Poppins-Thin', 'sans-serif'],
        'heading-extralight': ['Poppins-ExtraLight', 'sans-serif'],
        'heading-light': ['Poppins-Light', 'sans-serif'],
        heading: ['Poppins-Regular', 'sans-serif'],
        'heading-medium': ['Poppins-Medium', 'sans-serif'],
        'heading-semibold': ['Poppins-SemiBold', 'sans-serif'],
        'heading-bold': ['Poppins-Bold', 'sans-serif'],
        'heading-extrabold': ['Poppins-ExtraBold', 'sans-serif'],
        'heading-black': ['Poppins-Black', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
