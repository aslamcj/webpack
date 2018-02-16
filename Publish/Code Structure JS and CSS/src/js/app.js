require('../css/style.css');

let emp = require('./people');

console.log(emp);

let $ = require('jquery');

for(let e in emp) {
	$('body').append(`
			<h1>${emp[e].name}</h1>
	`);
}

