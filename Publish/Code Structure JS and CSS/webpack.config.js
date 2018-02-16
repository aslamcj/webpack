module.exports = {
  entry: ["./src/js/app.js"],
  module : {
  	loaders : [
  		{
  			test : /\.css$/,
  			loader : "style-loader!css-loader"
  		}
  	]
  },
  output: {
  	path : __dirname+'/dist',
    filename: "bundle.js"
  }
}