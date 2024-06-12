/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'primary-thin': ['Poppins-Thin', 'sans-serif'],
        'primary-extralight': ['Poppins-ExtraLight', 'sans-serif'],
        'primary-light': ['Poppins-Light', 'sans-serif'],
        primary: ['Poppins-Regular', 'sans-serif'],
        'primary-medium': ['Poppins-Medium', 'sans-serif'],
        'primary-semibold': ['Poppins-SemiBold', 'sans-serif'],
        'primary-bold': ['Poppins-Bold', 'sans-serif'],
        'primary-extrabold': ['Poppins-ExtraBold', 'sans-serif'],
        'primary-black': ['Poppins-Black', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
