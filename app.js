// async function findOneListName(client) {
//     const result = await client.db("Products").collection("Category").findOne()
    
//     if (result) {
//         console.log(`Connection`)
//     } else {
//         console.log(`Not found`)
//     }

// }
const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const objectId = require("mongodb").ObjectID;
const cors = require('cors');

const app = express();

app.use(cors())

const jsonParser = express.json();

const url="mongodb+srv://Nick:Ybrbnf56427821@cluster0.y3b83.mongodb.net/app?retryWrites=true&w=majority"
const mongoClient = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true});
 
let dbClient;
 
app.use(express.static(__dirname + "/public"));
 
mongoClient.connect(function(err, client){
    if(err) return console.log(err);
    dbClient = client;
    app.locals.collection = client.db("Products").collection("Category");
    app.listen(5000, function(){
        console.log("Сервер ожидает подключения...");
    });
});
 
app.get("/api/users", function(req, res){
        
    const collection = req.app.locals.collection;
    collection.find({}).toArray(function(err, users){
         
        if(err) return console.log(err);
        res.send(users)
    });
     
});
app.get("/api/users/:id", function(req, res){
        
    const id = new objectId(req.params.id);
    const collection = req.app.locals.collection;
    collection.findOne({_id: id}, function(err, user){
               
        if(err) return console.log(err);
        res.send(user);
    });
});
   
app.post("/api/users", jsonParser, function (req, res) {
       
    if(!req.body) return res.sendStatus(400);
       
    const userName = req.body.name;
    const userAge = req.body.age;
    const user = {name: userName, age: userAge};
       
    const collection = req.app.locals.collection;
    collection.insertOne(user, function(err, result){
               
        if(err) return console.log(err);
        res.send(user);
    });
});
    
app.delete("/api/users/:id", function(req, res){
        
    const id = new objectId(req.params.id);
    const collection = req.app.locals.collection;
    collection.findOneAndDelete({_id: id}, function(err, result){
               
        if(err) return console.log(err);    
        let user = result.value;
        res.send(user);
    });
});
   
app.put("/api/users", jsonParser, function(req, res){
        
    if(!req.body) return res.sendStatus(400);
    const id = new objectId(req.body.id);
    const userName = req.body.name;
    const userAge = req.body.age;
       
    const collection = req.app.locals.collection;
    collection.findOneAndUpdate({_id: id}, { $set: {age: userAge, name: userName}},
         {returnOriginal: false },function(err, result){
               
        if(err) return console.log(err);     
        const user = result.value;
        res.send(user);
    });
});
 
// прослушиваем прерывание работы программы (ctrl-c)
process.on("SIGINT", () => {
    dbClient.close();
    process.exit();
});