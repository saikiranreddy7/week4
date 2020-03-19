const post=require('../model/post');
const getdetails=async(body)=>{
    return await new post({
    "id":body.id,
    "name":body.name,
    "marks":body.marks
})
}
const test = async(test)=> {
    
return await test.save();
}
module.exports={getdetails,test};



