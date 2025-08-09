const express=require('express');
const router=express.Router();
const msgController=require('../controller/new message');


router.use(msgController);

module.exports=router;

