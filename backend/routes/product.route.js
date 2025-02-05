const Router=require('express').Router();
const productCtrl=require('../controllers/product.controller')

Router.post('/add',productCtrl.AddProduct);
Router.get('/view',productCtrl.ViewProduct);
Router.put('/update/:id',productCtrl.UpdateProduct);
//Delete Router need to done
module.exports=Router;