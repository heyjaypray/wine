
var express = require('express');
var bodyParser = require('body-parser');


var app = express();
var PORT = process.env.PORT || 3000;


app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var handlebars = require("express-handlebars");

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use(require('./controllers/wine_controllers.js'));


app.listen(PORT, function() {
    console.log('Server is listening on port ' + PORT);
});