var express = require('express')
var app = express()
var fs = require('fs');

let matchlista = require('./lista.json')


app.use(express.json())
let port = 4000
app.get('/', (req, res) => {
    console.log("user getting data")
    res.send("Welcome to the server");
})

//creating a new match 
app.post("/api/seeks", (req, res) => {
    console.log("creating match")
    let obj = req.body
    let arr = matchlista.list
    let id = obj.id
    function hitta(n) {
        return n.id === id
    }
    if (arr.find(hitta)) {
        console.log("user sent wrong data a response to change sending")
        res.status(400).send("ID already exist pleas change it").end()
        return
    }
    if (Object.keys(obj).length < 2) {
        console.log("user entered small or empty object status 400 sent")
        res.status(400).send("fel data").end()
        return
    }
    arr.push(obj)
    let makenew = {
        "list": arr
    }
    let data = JSON.stringify(makenew)
    fs.writeFile('./lista.json', data, (err) => {
        if (err) throw err;

    })
    res.status(201).send("matchen skapat").end()
})

//get all matches 
app.get("/api/seeks", (req, res) => {
    let arr = matchlista.list
    console.log("user asking for a full list of data")
    res.status(200).send(arr).end()
})

//get en match

app.post("/api/seeks/:id", (req, res) => {
    let arr = matchlista.list
    let id = parseInt(req.params.id)
    console.log("user getting a match data with id " + id)
    function hitta(n) {
        return n.id === id
    }

    let result = arr.find(hitta)
    if (arr.find(hitta)) {
        console.log("the match data is sending back to the user")
        res.status(200).send(result).end()
    } else {
        console.log("the id was wrong")
        res.status(204).send("there is no match with this id").end()
    }
})

//update a match 
app.put("/api/seeks/:id", (req, res) => {
    let arr = matchlista.list
    let obj = req.body
    let id = req.params.id
    console.log("user is updateing a match med id " + id)
    function hitta(n) {
        return n.id === id
    }
    let result = arr.find(hitta)
    if (arr.find(hitta)) {
        console.log("servern hittade objected och den uppdateras")
        let annat = arr.filter(function (n) {
            return n !== result
        })
        annat.push(obj)
        let makenew = {
            "list": annat
        }
        let data = JSON.stringify(makenew)
        fs.writeFile('./lista.json', data, (err) => {
            if (err) throw err;
        })
        res.status(200).send(result).end()
    } else {
        console.log("the id was wrong and user is getting fel data response")
        res.status(400).send("there is no object for this id").end()
    }
})

app.get("/api/seeks/:name", (req, res) => {
    let name = req
})

app.get("/api/seeks/:id", function (req, res) {
    const id = req.params.id;
    console.log("id   " + id);

    if (!id) {
        res.status(400).end();
        return;
    }
    let game = matchlista.list.find(el => el.id == id);
    console.log(game);

    if (game) {
        res.json(game);
    } else {
        res.status(404).end();
    }
})

app.listen(port, () => console.log(`Server runningg on port 4000!`))
app.listen(() => {
    console.log("");
})