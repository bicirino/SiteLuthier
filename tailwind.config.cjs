module.exports = {
  content: [
    './src/**/*.{astro,html,js,ts,jsx,tsx}',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#0b0b0b',
        varnish: '#8B0000',
        ivory: '#f8f4ee'
      },
      fontFamily: {
        title: ['Cormorant Garamond', 'serif'],
        body: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}
