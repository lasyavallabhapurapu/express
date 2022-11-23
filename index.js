const express=require("express")	
const app=express()
const cors=require("cors")
const port=4000;
const students=require("./data.js")
const emp={id:1,name:"morning",age:18 }


app.use(cors())

app.get("/",(req,res)=>{
	res.send("hi i am server")
})
app.get("/user",(req,res)=>{
	res.send("how are you")
})

app.get("/emp",(req,res)=>{
	res.join(emp)
})

app.get("/students",(req,res)=>{
	res.json(students)
})

app.listen(port,()=>console.log("Server"))