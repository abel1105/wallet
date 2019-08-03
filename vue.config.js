module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/wallet/' : '/',
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/_variables.scss";`
      }
    }
  }
};
