// importing  the mongoose
const mongoose=require('mongoose');

// creating the database schema
const ProductSchema=new mongoose.Schema({
   
    name:{
        type:String,
        required:true
    },
    quantity:{
        type: Number,
        required: true
    },
    
}, {timestamps:true});

const Product = mongoose.model('Product',ProductSchema);
module.exports= Product;