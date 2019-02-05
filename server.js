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



// Displays all tables





//Functions
//=========================================
function ex() {
    var route = "tables";
var name = "";
var phone = "888-555-1212";
var email = "me@me.com";


var tables = [];
for (var i = 0; i < 5; i++) {
 
    var table = new Table(route[i], name, phone, email, Math.floor(Math.random() * 10000))
    tables.push(table);
}
console.table(tables);
    // Sets up the Express app to handle data parsing
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    // Basic route that sends the user first to the AJAX Page
    app.get("/", function (req, res) {
    
        res.sendFile(path.join(__dirname, "home.html"));
    });

    app.get("/reserve", function(req, res) {
        res.sendFile(path.join(__dirname, "reserve.html"));
        return res.json(tables);
      });

    app.get("/reserve/:tab", function(req, res) {
        var chosen = req.params.tab;
      
        console.log(chosen);
      
        for (var i = 0; i < tables.length; i++) {
          if (chosen === tables[i].route) {
            return res.json(tables[i]);
          }
        }
      
        return res.json(false);
      });
    app.post("/tables", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body-parser middleware
        res.sendFile(path.join(__dirname, "tables.html"));
        var newtable = req.body;
      
        console.log(newtable);
      
        // We then add the json the user sent to the character array
        tables.push(newtable);
      
        // We then display the JSON to the users
        res.json(newtable);
      });

    // Starts the server to begin listening
    // =============================================================
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
}







