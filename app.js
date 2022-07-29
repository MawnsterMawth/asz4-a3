/* Ashley S. Zheng
   TCSS460A Summer
   07/29/2022
   Eyhab Al-Masri
 */

// import required module 
var express = require("express"); 
var app = express();

// define a route using a callback function that will be invoked 
// when the user makes a HTTP request to the root of the folder (URL) 
// display some information about the REST Service
app.get('/', function (req, res) { 
    res.status(200);  
    console.log("a request has been processed in / (root) "); 
});

app.get('/eggcholesterol', function (req, res) { 
    res.status(200);  
    console.log("/eggcholesterol   request is made..."); 
});

// Calculate the total cholesterol
// http://some_address/eggcholesterol/{number of eggs}
app.get('/eggcholesterol/:eggnumber', function(req, res) {
    const eggnumber = req.params.eggnumber;
    if (isNaN(eggnumber))
    {
        res.status(400);
        res.json({error: "bad request"});
        return ;
    }
    const result = eggnumber * 184;
    console.log("/eggcholesterol/:eggnumber   request is made...");
    res.json({"cholesterol" : result});
});

app.get('/eggshell', function (req, res) { 
    res.status(200);  
    console.log("/eggshell   request is made..."); 
});

// Calculate the eggshell mass
// http://some_address/eggshell/{number of eggs}
app.get('/eggshell/:eggnumber', function(req, res) {
    const eggnumber = req.params.eggnumber;
    if (isNaN(eggnumber))
    {
        res.status(400);
        res.json({error: "bad request"});
        return ;
    }
    const result = eggnumber * 5.5;
    console.log("/eggshell/:eggnumber   request is made...");
    res.json({"shellmass" : result});
});

app.get('/eggsub', function (req, res) { 
    res.status(200);  
    console.log("/eggsub   request is made..."); 
});

// Calculate the amount of egg substitute
// http://some_address/eggsub/{number of eggs}
app.get('/eggsub/:eggnumber', function(req, res) {
    const eggnumber = req.params.eggnumber;
    if (isNaN(eggnumber))
    {
        res.status(400);
        res.json({error: "bad request"});
        return ;
    }
    const banana = eggnumber / 2;
    const othercup = eggnumber / 4;
    const othertbsp = eggnumber * 4;
    console.log("/eggsub/:eggnumber   request is made...");
    res.json({"bananasub" : banana, "othersubcup": othercup, "othersubtbsp": othertbsp});
});

app.get('/eggprotein', function (req, res) { 
    res.status(200);  
    console.log("/eggprotein   request is made..."); 
});

// Calculate the total protein
// http://some_address/eggprotein/{number of eggs}
app.get('/eggprotein/:eggnumber', function (req, res) { 
    const eggnumber = req.params.eggnumber;
    if (isNaN(eggnumber))
    {
        res.status(400);
        res.json({error: "bad request"});
        return ;
    }
    const result = eggnumber * 6.3;
    res.status(200);  
    console.log("/eggprotein/:eggnumber   request is made..."); 
    res.json({"protein" : result});
});

// perform a check for custom header attributes
app.get('/check', function (req, res) {
    var checheader = '';
    checkHeader = req.get("whoami");
    console.log(checheader);

    if (checkHeader === undefined || checkHeader === "") {
        res.status(403);
        res.json({error : "you are not allowed to execute this request"});
        return;
    }

    res.set("authorized", "yes, you are authorized: " + checkHeader);
    res.json({ success: checkHeader + " you are allowed to execute this request"});
});

// enable a port to listen to incoming HTTP requests 
app.listen(3000, function () { 
    console.log("API version 1.0.0 is running on port 3000"); 
});