//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const app = express();

var items = []; //Global scope

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.post("/", function (req, res) {
    var item = req.body.newItem;
    items.push(item); //Use global items.
    console.log(req.body.newItem);
    res.redirect("/");
  })

app.get("/", function (req, res) {

    var today = new Date();
    
    //Newer Advanced Code.
    //Basically, this code aims at automating the process for us.
    //Code will use toLocaleDateString
    var options = { // Object options
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-In", options)

    res.render('list', {kindOfDay: day, newListItems: items}) //{day: day} --> Standard coding practice
    
});

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