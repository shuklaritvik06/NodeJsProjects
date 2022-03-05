const url = require('url'); 
const URL = "your url";  // http://localhost:3000/index.html?name=ritvik&age=20
const q = url.parse(URL,true);
console.log(q.search); // ?name=ritvik&age=20
console.log(q.host);  // localhost:3000
console.log(q.pathname); // /index.html
const query = q.query;
console.log(query.name);
console.log(query.age);
