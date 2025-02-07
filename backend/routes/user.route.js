const Router=require('express').Router();
const userCtrl=require('../controllers/user.controller')

Router.post('/signup',userCtrl.signUp);
Router.post('/signin',userCtrl.signIn);
Router.post('/changepassword',userCtrl.changePassword);
Router.get('/user',userCtrl.getUser);

module.exports=Router;