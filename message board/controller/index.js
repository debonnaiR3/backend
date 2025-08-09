
const messages=[
    {
        text:'Hi there',
        user:'Amando',
        added:new Date()
    },
    {
        text:'Hello World',
        user:'Charles',
        added:new Date()
    }
];


function indController(req,res){
    res.render('index',{title:"Mini Messaging Board",messages:messages});
}
const newMsgController=function(req,res){
    messages.push({text:req.body.text,user:req.body.name,added:new Date()});
    res.redirect('/');
}
const formController=function(req,res){
    res.render('form');
}
module.exports={indController,newMsgController,formController};