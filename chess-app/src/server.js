var express = require('express')
var app = express()
var fs = require('fs');

let matchlista = require('./lista.json')


app.use(express.json())
let port = 4000
app.get('/',(req,res)=>{
    console.log("get /")
    console.log(req.query)
    res.send("Welcome to the server");
})

//creating a new match 
app.post("/api/seeks",(req,res)=>{
    let obj = req.body
    let arr = matchlista.list
    console.log(obj)
    console.log(Object.keys(obj).length)
    console.log("api seeks")
    if(Object.keys(obj).length > 2){
        res.status(400).send("fel data").end()
        return
    }
    arr.push(obj)
    let makenew = {
        "list":arr
    }
    let data = JSON.stringify(makenew)
    fs.writeFile('./lista.json',data,(err) => {
        if (err) throw err;
        
      })
    res.send("dd")
})

//get all matches 
app.get("/api/seeks",(req,res)=>{
    let arr = matchlista.list
    console.log(arr)
    res.send(arr)
})

app.listen(port, () => console.log(`Server runningg on port 4000!`))
app.listen(() => {
    console.log("");
  })