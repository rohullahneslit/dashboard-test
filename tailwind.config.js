module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        blue: '#001EC0',
        border: '#E0E0E0',
        gray: '#BCBCBC',
        graylight: '#E8E8E8',
        'gray-text': '#606060',
        green: '#16C098',
      },
      backgroundImage: {
        loginbg: "url('/src/assets/images/login-page-bg.jpg')",
      },
    },
  },
  plugins: [],
}
