const Router=require('express').Router();
const productCtrl=require('../controllers/product.controller')

Router.post('/add',productCtrl.AddProduct);
module.exports=Router;