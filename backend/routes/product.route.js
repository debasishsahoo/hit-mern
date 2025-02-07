const Router=require('express').Router();
const productCtrl=require('../controllers/product.controller')

Router.post('/add',productCtrl.AddProduct);
Router.get('/view',productCtrl.ViewProduct);
Router.get('/view/:id',productCtrl.ViewProductById);
Router.put('/update/:id',productCtrl.UpdateProduct);
Router.delete('/delete/:id',productCtrl.DeleteProduct);
//Delete Router need to done
module.exports=Router;