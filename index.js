const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 8080 
const router = express.Router();
const path = require("path");
const app = require('express')();

app.get('/',(req,res) => {
res.sendFile(path.join(__dirname + '/index.html'))});

app.get('/home',(req,res) => {
res.sendFile(path.join(__dirname + '/home.html'))});

app.get('/contact',(req,res) => {
res.sendFile(path.join(__dirname + '/contact.html'))});

app.get('/about',(req,res) => {
res.sendFile(path.join(__dirname + '/about.html'))});


app.listen(port => {
  console.log(`successful running on ${PORT} `)
})
