module.exports = {
  entry: ["./app.js"],
  module : {
  	loaders : [
  		{
  			test : /\.css$/,
  			loader : "style-loader!css-loader"
  		}
  	]
  },
  output: {
  	path : __dirname,
    filename: "bundle.js"
  }
}