module.exports = {
  entry: ["./src/js/app.js"],
  module : {
  	loaders : [
  		{
  			test : /\.css$/,
  			loader : "style-loader!css-loader"
  		},
  		{
  			test : /\.js$/,
  			loader : "babel-loader",
  			exclude : /node_modules/,
  			query: {presets:['es2015']}
  		}
  	]
  },
  output: {
  	path : __dirname+'/dist',
    filename: "bundle.js"
  }
}