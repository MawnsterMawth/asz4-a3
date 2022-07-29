// import required module 
var express = require("express"); 
var app = express();

app.get('/', function (req, res) { 
    res.status(200);  
    console.log("a request has been processed in / (root) "); 
});

app.get('/eggcholesterol', function (req, res) { 
    res.status(200);  
    console.log("/eggcholesterol   request is made..."); 
});

// Calculate the total cholesterol
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

// enable a port to listen to incoming HTTP requests 
app.listen(3000, function () { 
    console.log("API version 1.0.0 is running on port 3000"); 
});