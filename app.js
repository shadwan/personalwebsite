var express = require("express"),
	app = express(),
	bodyParser = require("body-parser")

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));


//Routes
var indexRoutes = require("./routes/index");


//Route Use
app.use("/", indexRoutes);


app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("Server Started");
});