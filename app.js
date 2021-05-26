const express = require("express");
const {createServer} = require('http');
const MongoClient = require("mongodb").MongoClient;
const cors = require('cors');
const morgan = require('morgan');
const path = require('path')
const compression = require('compression')

const normalizePort = port => parseInt(port, 10)
const PORT = normalizePort(process.env.PORT || 5000)

const app = express();
const dev = app.get('env') !== 'production'

app.use(cors())
let dbClient;

const url="mongodb+srv://Nick:Ybrbnf56427821@cluster0.y3b83.mongodb.net/app?retryWrites=true&w=majority"
const mongoClient = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true});
mongoClient.connect(function(err, client){
        if(err) return console.log(err);
        dbClient = client;
        app.locals.collection = client.db("Products").collection("Category");
        app.listen(5001, function(){
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

if(!dev){
    app.disable('x-powered-by')
    app.use(compression())
    app.use(morgan('common'))

    app.use(express.static(path.resolve(__dirname, 'client', 'build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

if (dev) {
    app.use(morgan('dev'))
}

const server = createServer(app)

server.listen(PORT, err =>{
    if (err) throw err;

    console.log('Server started! Port: ' + PORT)
})