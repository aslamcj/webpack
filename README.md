# Webpack Tutorial
Request & Response
multiple request between server and clinet

Code Size
- removing spacings by minification
- refactoring code by replacing names
- file order dependencies - modules system or angular
- transpilation
- Linting

Why do we need Build?
combining files
minifying files
maintaing file order
transpilation
linting

Other solution for build

Server-side build tools 
ASP.net, Rails	- most of the time it used for general purpose like combing files
	disadavanteges 
		1) cant lint
		2) cant generate test cases
		3) 

Task Runners - are used general purpose
Grunt, Gulp
	1) automate test cases
	2) new dev to install code & run code
	3) static analysis for your code
	

Main taks of task runner is
	1) es6 to .js (tanspilation task)
	2) comibing multiple files into single file
	3) minify final file
	4) 

Webpack	- what makes webpack diffrent from task runner is comobine your css, html fragmets, images , fonts with javascript
	- Use NPM not Brower
	- Use a Module System
		AMD
		CommonJs
		ES6 Module system

Modules
	It expresses dependencies between modules
	Path is not required incase npm defined modules
	Once dependacy define, webpack will take care of order of loading files
	
	
### Basic Build with Webpack

#### CLI - command line interface

1) webpack ./app.js build.js

2) Complie through configuration file "webpack.config.js"
```
module.exports = {
	entry : "./app.js",
	output: {
		filename : "bundle.js"
	}
}
```
3) Adding watch mode
	a) webpack --watch
	b) modify config.js
    ```
		module.exports = {
			entry : "./app.js",
			output: {
				filename : "bundle.js"
			},
			watch : true
		}
		```

4) Accessing file from http not from file protocol
	- webpack has its own server called dev server
	```
	npm i webpack-dev-server -g

	after installation run command in cli > webpack-dev-server
	
	webpack-dev-server --inline		// incase if auto reload is not working in browser
```
5) Building with multiple files and loading modules
	a) Create new files, lets says "login.js" and "util.js" in same directory
	b) To load login.js inside the app.js, use the following common js method
    ```
		require("./login");
    ```
	c) To add a util.js as a independent module modify "entry" property to array in "webpack.config.js" file.
    ```
			entry: ["./util","./app.js"]
		```	
	d) When ever "webpack.config.js" file is modified need to restart the "webpack-dev-server".

6) Using Loaders :
	* Basically Webapck does task like combining & minifying code and simple tasks
	* But it doesnt offer full functionalities
	
	Loaders are a way for us to process files in variety of diffrent ways. eg tasks like linting, transpiling es6 code
	
	a) Do a npm init for initial project setup
	b) run following commands to load the dev dependencies
		npm i babel-core babel-loader --save-dev
		npm i jshint jshint-loader webpack node-libs-browser --save-dev
		npm i babel-preset-es2015 --save-dev
		
	c) create following file for babel support with name ".babelrc"
		{ "presets" : ["es2015"]}
		
	d) create following file for jshint support with name ".jshintrc"
			{}
			
	f) modify "webpack-dev-server" to compile es6 code
  ```
		module: {
		loaders: [
			{
				test: /\.es6$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
			]
		}
    ```
	g) add following to handle for extensions other than .js 
  ```
		resolve: {
			extensions: ['', '.js', '.es6']
		}
	```
	h) run "webpack-dev-server" in cli
	
7) Preloader - will always run before loaders do, which lets your code errors/testcases
	
	a) Add following sinnpet in "webpack.config.js" in side "modules" object
			```
		preLoaders: [
			{
				test: /\.js$/,
				exclude: 'node_modules',
				loader: 'jshint-loader'
			}
		],
```
8) Creating shortcuts to run "webpack" through npm scripts
	modify "package.json" script object with the following code
  ```
		"scripts": {
			"start" : "webpack"
		}
	```

	
		
	
	
	
	

			
			
	
	





