const {Schema,model}=require("mongoose");

const carEntity=new Schema({
   
     carModel:{
        type:String,
        required:true
    },
     name:{
        type:String,
        required:true
    },
     seats:{
        type:String,
        required:true
    },
     manuDate:{
        type:String,
        required:true
    },
     price:{
        type:String,
        required:true
    },
   
});

const carModel=model('cars',carEntity);

module.exports=carModel;