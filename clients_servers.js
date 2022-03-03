// Simple server using http module

const http = require('http');
const server = http.createServer((req,res)=>{
  console.log("Request Made");
});
server.listen(8000,'localhost',()=>{
  console.log("listening at port 8000");
})
