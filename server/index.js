const express = require("express");
require("dotenv").config();
const connectDB=require('./database/db')
const router=require('./router/route')


const PORT = process.env.PORT;
const HOST = process.env.HOST;


const app = express();


app.use('/api',router)


connectDB()
app.listen(PORT, () => {
  console.log(`Server is Active  ${HOST}:${PORT}`);
});
