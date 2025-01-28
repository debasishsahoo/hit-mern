const http=require('http')
http.createServer((req,res)=>{
    res.writeHead(200);
    res.write('Server is Running')
    res.end();
}).listen(5000,()=>{'Listening on port 5000...'})

//127.0.0.1:5000