var express = require("express"),
    bodyParser = require("body-parser"),
    app = express()
    passwordHash = require('password-hash');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require("connect-assets")());
app.set("view engine", "ejs");

app.get("/", function(req,res){
  res.render("index")
});

app.post("/login_enpoint", function(req, res){
  var HashPas = passwordHash.generate(req.body.password);
  console.log(HashPas)
});

app.listen(3000,function(){
  console.log("App is listing at port");
});
