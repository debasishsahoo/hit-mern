const Router=require('express').Router();
const userCtrl=require('../controllers/user.controller')
const authorization=require('../middlewares/authorization.middleware')

Router.post('/signup',userCtrl.signUp);
Router.post('/signin',userCtrl.signIn);

Router.put('/changepassword',authorization,userCtrl.changePassword);
Router.get('/getuser',authorization,userCtrl.getUser);

module.exports=Router;