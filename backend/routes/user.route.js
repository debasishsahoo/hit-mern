const Router=require('express').Router();
const userCtrl=require('../controllers/user.controller')

Router.post('/signUp',userCtrl.signUp);
Router.post('/signIn',userCtrl.signIn);
Router.post('/changePassword',userCtrl.changePassword);
Router.get('/user',userCtrl.getUser);

module.exports=Router;