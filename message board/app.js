const express=require('express');
const path=require('path');
const indRouter=require('./router/index');
const msgRouter=require('./router/new message');

const app=express();
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');


app.use('/',indRouter);
app.use('/new_message',msgRouter);

const PORT=process.env.PORT || 1000;
app.listen(PORT,()=>{
    console.log('Server listening',PORT);
})
