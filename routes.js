const express=require('express');
const routes=express.Router();
const post=require('../model/post');
const test = require('./service')
//const getdetails=require('./service')
routes.get('/',async(req,res)=>{
    post.find()
    .then((result)=>
    {
       res.send(result);
       console.log(result);
    })
    .catch((err)=> console.log(err));
    res.json(mark);
});
routes.post('/',async(req,res)=>{
    const mark=await test.getdetails(req.body);
    // const save=await mark.save();
    const save = await test.test(mark);
    res.json(save);
    console.log(save);
})
routes.delete('/:name',async(req,res,err)=>{
    if(err) console.log("error");
    const rem=await post.remove({"name":req.params.name});
    res.json(rem);
    console.log("object removed");
});
routes.put('/:id',async(req,res)=>{
    const k=post.findByIdAndUpdate({id:req.params.id},{$set:{name:req.body.name}},(err,res)=>{
        if(err) throw err;
        res.send(k);
        console.log("updated");
    })       
    })
module.exports=routes;