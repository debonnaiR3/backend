const path=require('path');
const fs=require('fs');
const http=require('http');

function getExt(ext){
    switch(ext){
        case '.json':
            return 'application/json';
        case '.css':
            return 'text/css';
        case '.js':
            return 'text/javascript';
        default:
            return 'text/html';
        
    }
    
}

const server=http.createServer((req,res)=>{
    let fspath=path.join(__dirname,req.url=='/'?'index.html':req.url);
    fs.readFile(fspath,(err,content)=>{
        if(err){
            if(err.code==='ENOENT'){
                fs.readFile(path.join(__dirname,'404.html'),(err,content)=>{
                    if(err) {
                        console.log(`Error: ${err.code}`);
                        return;
                    }
                    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
                    res.end(content);
                })
                
            }else{
                console.log(`Error: ${err.code}`);
                return;
            }
        }else{
            let contType=getExt(path.extname(fspath));
            res.writeHead(200,{'Content-Type':`${contType};charset=utf-8`});
            res.end(content);
        }
    })
})

const PORT=1000;

server.listen(PORT,()=>console.log(`Server listening on PORT: ${PORT}`));
