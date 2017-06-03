var http=require('http');//require http module
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});//set web http header
	res.end('hello World\n');//response http string to web client;
	
	
}).listen(1337,"127.0.0.1");//set http listen ip and port
console.log('Server runing at http://127.0.0.1:1337');

