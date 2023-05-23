var mongoose=require("mongoose");

const imageSchema=new mongoose.Schema({
    // title: String,
    pic:String,
    
})

const Images=mongoose.model("Images",imageSchema);

module.exports=Images;