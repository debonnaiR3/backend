const express=require('express');
const router=express.Router();
const {indController,newMsgController,formController}=require('../controller/index');


router.get('/',indController);
router.post('/new',newMsgController);
router.get('/form',formController);

module.exports=router;