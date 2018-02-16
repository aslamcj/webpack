module.exports = {
  entry: {
    home: "./src/js/home.js",
    aboutus: "./src/js/about.js",
  },
  output: {
  	path : __dirname+'/dist',
    filename: "[name].bundle.js"
  }
}