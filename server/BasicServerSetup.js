const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT;
const HOST = process.env.HOST;


const app = express();

app.listen(PORT, () => {
  console.log(`Server is Active  ${HOST}:${PORT}`);
});
