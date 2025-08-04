// const path=require('path');
// const fs=require('fs');
// const express=require('express');

// const app=express();


// function getExt(ext){
//     switch(ext){
//         case '.json':
//             return 'application/json';
//         case '.css':
//             return 'text/css';
//         case '.js':
//             return 'text/javascript';
//         default:
//             return 'text/html';
        
//     }
    
// }


// app.get('/{*splat}',(req,res)=>{
//     let fspath=path.join(__dirname,req.url=='/'?'index.html':req.url);
//     fs.readFile(fspath,(err,content)=>{
//         if(err){
//             if(err.code=='ENOENT'){
//                 fs.readFile(path.join(__dirname,'404.html'),(err,content)=>{
//                     if(err){
//                         console.log(err.code);
//                         return;
//                     }
//                     res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
//                     res.end(content);
//                 })
//             }else{
//                 console.log(err.code);
//             }
//         }else{
//             let contType=getExt(path.extname(fspath));
//             res.writeHead(200,{'Content-Type': `${contType};charset=utf-8`});
//             res.end(content);
//         }
//     })
// })

// const PORT=process.env.PORT || 1000;
// app.listen(PORT,()=>{console.log(`Server listening on ${PORT}`)});




// const path=require('path');
// const fs=require('fs');
// const express=require('express');

// const PORT=process.env.PORT || 1000;



// const app=express();


// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'index.html'));
// });
// app.get('/index.html',(req,res)=>{
//     res.sendFile(path.join(__dirname,'index.html'));
// });
// app.get('/about.html',(req,res)=>{  
    
//     res.sendFile(path.join(__dirname,'about.html'));
// });
// app.get('/contact-me.html',(req,res)=>{
    
//     res.sendFile(path.join(__dirname,'contact-me.html'));
// });

// app.get('/{*splat}',(req,res)=>{
//     res.sendFile(path.join(__dirname,'404.html'));
// });

// app.listen(PORT,()=>{console.log(`Server listening on PORT : ${PORT}`)});
