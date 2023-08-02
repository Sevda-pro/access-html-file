const express=require("express")
const app=express()
const path=require("path")

const staticpath=path.join(__dirname,"../public")
app.use(express.static(staticpath));
app.get("/about",(req,res)=>{
    res.send("jai shree ram")
})
app.listen(8000,()=>{
    console.log("done")
})
console.log(staticpath)