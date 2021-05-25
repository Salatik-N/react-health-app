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

const url="mongodb+srv://Nick:Ybrbnf56427821@cluster0.y3b83.mongodb.net/app?retryWrites=true&w=majority"
const mongoClient = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true});
 
let dbClient;

if(process.env.NODE_ENV === "production"){
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}
 
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