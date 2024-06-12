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
        'secondary-thin': ['Montserrat-Thin', 'sans-serif'],
        'secondary-extralight': ['Montserrat-ExtraLight', 'sans-serif'],
        'secondary-light': ['Montserrat-Light', 'sans-serif'],
        secondary: ['Montserrat-Regular', 'sans-serif'],
        'secondary-medium': ['Montserrat-Medium', 'sans-serif'],
        'secondary-semibold': ['Montserrat-SemiBold', 'sans-serif'],
        'secondary-bold': ['Montserrat-Bold', 'sans-serif'],
        'secondary-extrabold': ['Montserrat-ExtraBold', 'sans-serif'],
        'secondary-black': ['Montserrat-Black', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
