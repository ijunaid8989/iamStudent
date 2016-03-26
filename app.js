var express = require("express"),
    app = express();

app.get("/", function(req,res){
  res.send("hello world")
});

app
  .set("view engine", "ejs")
  .use(express.static("lib"));

app.listen(3000,function(){
  console.log("App is listing at port");
});