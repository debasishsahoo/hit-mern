const mongoose = require('mongoose');

const productSchema=new mongoose.Schema({
name:{type:String,require:true,trim:true,minlength:3},
description:{type:String,require:true,trim:true},
price:{type:Number,require:true,min:1},// Enforce a minimum positive price
images:{type:String,trim:true,default:null},//image URl
stock:{type:Number,min:0}
});

const productModel=mongoose.model('Product',productSchema)

module.exports=productModel;