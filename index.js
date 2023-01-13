//APIkey
//e01d045d96cc06684061b0b37b3fddc4-us8
//id 2c0ef3ce19
const express=require("express");
const app=express();
const bodyparser=require("body-parser");
const request=require("request");
const https=require("https");
const mailchimp = require('@mailchimp/mailchimp_marketing');
const fs = require('fs');

mailchimp.setConfig({
    apiKey: 'e01d045d96cc066840610b37b3fddc4',
    server: 'us8',
  });

app.use(express.urlencoded({extended:true}))
app.use(express.static("public"));
app.get('/',(req,res)=>{
   
    res.sendFile(__dirname+"\\index.html");
})

app.post("/",(req,res)=>{
   
   
   
     


})



app.listen(process.env.PORT || 3000,()=>{
    console.log("listing yo port 3000")
})