const app = require('express')();
require('dotenv').config();
const port = process.env.PORT || 8080 
app.get('/index',(req,res) => {
res.File(_dir + '../index.html')});
app.listen(port => {
  console.log("successful running on ${port} ")
});