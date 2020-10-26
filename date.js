//jshint esversion:6

// exports. -> what to return when module is called.

exports.getDate = function () {
    var today = new Date();
    
    //Newer Advanced Code.
    //Basically, this code aims at automating the process for us.
    //Code will use toLocaleDateString
    var options = { // Object options
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    return today.toLocaleDateString("en-In", options)
  }

  exports.getDay = function () {
    var today = new Date();
    
    //Newer Advanced Code.
    //Basically, this code aims at automating the process for us.
    //Code will use toLocaleDateString
    var options = { // Object options
        weekday: "long",
    };

    return today.toLocaleDateString("en-In", options)
  }