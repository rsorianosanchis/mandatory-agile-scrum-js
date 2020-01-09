var express = require('express')
var app = express()

app.use(express.json())
let port = 4000
app.get('/',(req,res)=>{
    console.log(req.query)
    res.send("Welcome to the server");
})


app.listen(port, () => console.log(`Server runningg on port 4000!`))
app.listen(() => {
    console.log("Socket listening on 4000");
  })