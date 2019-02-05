//Dependencies
//=================================
var express = require("express");
var path = require("path");
var Table = require("./table");

// Sets up the Express App
var app = express();
//dynamic port assign
var PORT = process.env.PORT || 8080;

//main
//=================================

//loads express and routes
ex();
var name = "";
var phone = "888-555-1212";
var email = "me@me.com";
var unique = Math.floor(Math.random() * 10000);

var tables = [];
for (var i = 0; i < res.length; i++) {
 
    var table = new Table(name, phone, email, unique)
    tables.push(table);
}
console.table(tables);







//Functions
//=========================================
function ex() {
    // Sets up the Express app to handle data parsing
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    // Basic route that sends the user first to the AJAX Page
    app.get("/", function (req, res) {
        // res.send("Hot Reservations!")
        res.sendFile(path.join(__dirname, "home.html"));
    });

    app.get("/reserve", function (req, res) {
        // res.send("Hot Reservations!")
        res.sendFile(path.join(__dirname, "reserve.html"));
    });
    app.get("/tables", function (req, res) {
        // res.send("Hot Reservations!")
        res.sendFile(path.join(__dirname, "tables.html"));
    });

    // Starts the server to begin listening
    // =============================================================
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
}







