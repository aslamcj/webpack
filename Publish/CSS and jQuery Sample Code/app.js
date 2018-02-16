
// Method1 : directly loading css file with npm moduels
//require('!style-loader!css-loader!./style.css');

// Method2 : loading css after configuring css loaders in webpack.config.js

require('./style.css');

let emp = require('./people');

console.log(emp);

let $ = require('jquery');

for(let e in emp) {
	$('body').append(`
			<h1>${emp[e].name}</h1>
	`);
}

