//jshint esversion:6
// Code Note: Change all var to let

const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const app = express();
const date = require(__dirname + '/date.js'); // Creating and referencing module.

//Global scope 
var items = []; 
var workItems = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get("/", function (req, res) {

    var day = date.getDate(); // Using the module. 

    res.render('list', {listTitle: day, newListItems: items}) //{day: day} --> Standard coding practice. Simplified here for better understanding.
    
});

app.get("/work", function (req,res) {
    res.render('list', {listTitle: "Work List", newListItems: workItems})
  })

app.get("/about", function (req,res) {
    res.render('about');
  })

app.post("/", function (req, res) {
    
    var item = req.body.newItem;

    if (req.body.listButton === "Work List"){
        workItems.push(item); //Use global workItems.
        console.log("Work Item: ", req.body.newItem);
        res.redirect("/work");
    } else {
        items.push(item); //Use global items.
        console.log(req.body.newItem);
        res.redirect("/");
    }

  })

app.listen(3000, function(){
    console.log("Server is now running");
})


// BELOW: for Basic and Intermediate Code. Commented out.
    //var currentDay = today.getDay();
    //var day;
    //
    //New Intermediate Code.
    // switch (currentDay) {
    //     case 0:
    //         day = "Sunday";
    //         break;
    //     case 1:
    //         day = "Monday";
    //         break;
    //     case 2:
    //         day = "Tuesday";
    //         break;
    //     case 3:
    //         day = "Wednesday";
    //         break;
    //     case 4:
    //         day = "Thursday";
    //         break;
    //     case 5:
    //         day = "Friday";
    //         break;
    //     case 6:
    //         day = "Saturday";
    //         break;

    //     default:
    //         console.log("Value of day is invalid. " + currentDay);
    //         break;
    // }

    // OLD Basic Code.
    // if (currentDay === 6 || currentDay === 0) {
    //     day = "Weekend";
    //     // res.write("It's the weekend!");  
        
    // } else {
    //     day = "Weekday";
    //     // res.write("It's the weekday bitch!");
    //     // res.sendFile(__dirname + "/index.html");
    // }