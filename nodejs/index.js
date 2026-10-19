const express = require("express")
require("dotenv").config();

const app =express()


app.get("/", (req,res)=>{
  res.send("home page")
})
app.get("/product",(req,res)=>{
  console.log("req url", req.url)
  console.log("req url", req.body)
  console.log("req url", req.method)
  res.send("products available")
})
app.listen(PORT,()=>{
  console.log("server running...")
})