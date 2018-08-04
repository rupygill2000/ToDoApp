var express               = require ('express');
var app                   = express();
var mongoose              = require('mongoose');
var bodyParser            = require('body-parser');

// connection to the database
var db= mongoose.connect('mongodb://admin:admin123@ds018508.mlab.com:18508/todo').catch(function (reason) {
    console.log('Unable to connect to the mongodb instance. Error: ', reason);
    });

 
mongoose.Promise = global.Promise;

var port = process.env.port || 3000;
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/',function(req,res){
    // res.sendFile('index.html',{root: __dirname });
    //res.render("Welcome to the TODo App");
    res.send("Introducing to do App")
  });;
 
  
 app.listen(port,function(){
 console.log('Running on PORT: '+ port);
  });