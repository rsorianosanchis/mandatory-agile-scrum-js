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
    console.log("creating match")
    let obj = req.body
    let arr = matchlista.list
    console.log(obj)
    let id = obj.id
    console.log(id)
    function hitta (n) {
        return n.id === id
    }
    if(arr.find(hitta)){
        console.log("user sent wrong data a response to change sending")
        res.status(400).send("ID already exist pleas change it").end()
        return
    }
/*     if(Object.keys(obj).length > 2){
        res.status(400).send("fel data").end()
        return
    } */
    arr.push(obj)
    let makenew = {
        "list":arr
    }
    let data = JSON.stringify(makenew)
    fs.writeFile('./lista.json',data,(err) => {
        if (err) throw err;
        
      })
    res.send("Datab sparat to the server")
})

//get all matches 
app.get("/api/seeks",(req,res)=>{
    let arr = matchlista.list
    console.log(arr)
    res.send(arr)
})

//acceptera en match

app.post("/api/seeks/:id",(req,res)=>{
    let arr = matchlista.list
    let id =  parseInt(req.params.id)
    console.log(id)
    console.log("post")
    function hitta (n) {
        return n.id === id
    }
    let result = arr.find(hitta)
    console.log(result)
    res.send(result)
})

//update a match 


app.listen(port, () => console.log(`Server runningg on port 4000!`))
app.listen(() => {
    console.log("");
  })