const fs = require('fs'); /* fs stands for file system we can get acess to 
                          reading and writing data to file system */
const http = require('http');
const url = require('url');



/* 
const overvieew = fs.readFileSync('./templates/overview.html', 'utf-8');
const text = fs.readFileSync('./txt/input.txt', 'utf-8');
const product = fs.readFileSync('./templates/product.html', 'utf-8'); */
/* non-blocking asyncrounous way  */
/* fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
  console.log(data);
}) */
/* first argument is a file second is a callback function  */





const data=fs.readFileSync('./exchangerate.json','utf-8');
const dataobj=JSON.parse(data);




const server = http.createServer((req, res) => {
//   console.log(req.url)
  // res.end('hello from the server');
  const pathName = req.url;
  if (pathName === '/overview') {
    res.end('this is overview');

  }
  else if(pathName==='/products')
  {
    res.end('thes is product');
  }
  else if(pathName==='/api')
  {
//     fs.readFile('./exchangerate.json','utf-8',(err,data)=>{
// const exchangedata=JSON.parse(data);
// res.end(data);
    // });
res.end(data);

  }
  else {
  //   res.writeHead(404,{
  //  'Content-type':'text/html'
  // })
  // res.end('<h1>page not found</h1>')
    res.end('page not found');
  }
    
});
server.listen(8000, '127.0.0.1', () => {
  console.log('listening to requests ')
}); /* 127.0.0.1 is a localhost  */
