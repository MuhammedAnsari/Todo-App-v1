const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"));

app.get("/", function (req, res) {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const d = new Date();
    let day = weekday[d.getDay()];

    res.render("list", { dayname: day, todos: items })  
})

app.post("/", function(req, res){
    var item = req.body.todo;
    items.push(item);

    res.redirect("/");
})


app.listen(3000, function () {
    console.log("Server Started");
})