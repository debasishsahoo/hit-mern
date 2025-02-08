const Router=require('express').Router();
const productCtrl=require('../controllers/product.controller')
const authorization=require('../middlewares/authorization.middleware')

Router.post('/add',authorization,productCtrl.AddProduct);
Router.get('/view',authorization,productCtrl.ViewProduct);
Router.get('/view/:id',authorization,productCtrl.ViewProductById);
Router.put('/update/:id',authorization,productCtrl.UpdateProduct);
Router.delete('/delete/:id',authorization,productCtrl.DeleteProduct);
module.exports=Router;