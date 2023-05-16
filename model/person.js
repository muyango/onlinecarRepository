const {Schema,model}=require("mongoose");

const personModel=new Schema({
   
     fname:{
        type:String,
        required:true
    },
     lname:{
        type:String,
        required:true
    },
     email:{
        type:String,
        required:true
    },
     role:{
        type:String,
        default:"seller"
    },
     password:{
        type:String,
    },
   
});

const userModel=model('person',personModel);

module.exports=userModel;