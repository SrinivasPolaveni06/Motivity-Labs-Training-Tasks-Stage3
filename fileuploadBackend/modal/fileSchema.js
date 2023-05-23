
var mongoose=require("mongoose");

const fileSchema=new mongoose.Schema({
    //title: String,
    File:String,
    
})

const Images=mongoose.model("Images",fileSchema);

module.exports=Images;