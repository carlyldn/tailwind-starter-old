module.exports = {
  content: [
    './_includes/**/*.{html,md,js}',
    './_layouts/**/*.{html,md,js}',
    './_*/**/*.{html,md,js}',
    '!./_site/**/*.{html,md,js}',
    './*.{html,md,js}'
  ],
  theme: {
    fontFamily: {
      body: ['font-name', 'sans-serif'],
      heading: ['font-name', 'serif'],
      subtitle: ['font-name', 'sans-serif'],
      accent: ['font-name', 'sans-serif'],
    },
    extend: {
      colors: {
        'main': '#000',
      },
      aspectRatio: {
        'portrait': '3/4',
        'landscape': '16/9',  
        'square': '1/1',
      },  
    },
  },
  plugins: [],
}