const Product=require('../models/product.model')


const productCtrl={
    AddProduct:async(req,res)=>{
        const data=req.body;
        res.status(200).send(data)
    },
    ViewProduct:async(req,res)=>{},
    UpdateProduct:async(req,res)=>{},
    DeleteProduct:async(req,res)=>{}
}

module.exports=productCtrl;