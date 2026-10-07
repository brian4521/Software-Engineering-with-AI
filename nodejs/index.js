const express = require("express")

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
app.listen(5000,()=>{
  console.log("server running...")
})