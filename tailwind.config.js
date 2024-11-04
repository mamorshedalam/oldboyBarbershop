module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Open-sans', 'ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'rex': ['rex', 'ui-sans-serif', 'system-ui'],
      'rex-inline': ['rex-inline', 'ui-sans-serif', 'system-ui'],
    },
    screens:{
      xs: "360px",
      sm: "560px",
      md: "700px",
      lg: "1000px",
      xl: "1200px",
      '2xl': "1500px",
    }
  },
  plugins: [],
};
