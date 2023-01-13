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
   
    res.sendFile(__dirname+"\\signup.html");
})

app.post("/",(req,res)=>{
   
    var firstName=req.body.firstName;
    var secoendName=req.body.secoendName;
    var email=req.body.email;
    const data={
        firstName1:firstName,
        secoendName2:secoendName,
        

    }
    
    async function run() {
        try{
        const response = await mailchimp.lists.addListMember("2c0ef3ce19", {
          email_address: email,
          status: "subscribed",
          merge_fields: {
            FNAME: data.firstName,
            LNAME: data.secoendName2,
          }
        });
    
    
        console.log(response.status);           
        if(response.statusCode === " ")
        {
         res.sendFile(__dirname+"//success.html");
        }
        else{
         res.sendFile(__dirname+"//failure.html");
       
        }
    }
    catch (err){
        res.sendFile(__dirname+"//failure.html");
    }
    
       
      
    }
       run();
     


})



app.listen(3000,()=>{
    console.log("listing yo port 3000")
})