const express = require("express");
const connectDB=require('./config/db.mongo')
const cors = require("cors")
const productRouter=require('./routes/product.route')
const userRouter=require('./routes/user.route')
require('dotenv').config();
const PORT = process.env.PORT;
const HOST = process.env.HOST;
const app = express();
connectDB()

app.use(cors());
app.use(express.json());

app.use('/api/check',(req,res)=>{
 res.status(200).json({message: "App is Running.." })
})

app.use('/api/product',productRouter)
app.use('/api/user',userRouter)




app.listen(PORT,()=>{console.log(`Server is Active on ${HOST}:${PORT}`)})