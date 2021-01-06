const express = require('express')
const app = express()
const port = 4000

const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// we want to use cors package every time
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next();
});

app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());

// connection string to be used to connect server to database
const connectionString = 'mongodb+srv://user64:H16ern1A@cluster-learningnode.fgkof.mongodb.net/bookclub?retryWrites=true&w=majority';

// made a connection between server and database using connection string
mongoose.connect(connectionString, {useNewUrlParser: true});

// define database schema - mongoose
const Schema = mongoose.Schema;

// generate schema, what type of data will be stored in mongoDB documents
var bookClubSchema = new Schema({
    title:String,
    reviewer:String,
    cover:String
});

var bookClubModel = mongoose.model("bookclub", bookClubSchema);

app.get('/hello/:name', (req, res) => {
    console.log(req.params.name);
    res.send('Hello Book Club ' + req.params.name);
})

app.get('/api/books', (req, res) => {

    // find all records in database and return
    bookClubModel.find((err, data) => {
        res.json(data);        
    })   
})

app.delete('/api/books/:id', (req, res) => {
    console.log("Delete Book: " + req.params.id);

    bookClubModel.findByIdAndDelete(req.params.id, (err, data) => {
        res.send(data);
    })
})

app.get('/api/books/:id', (req, res) => {
    console.log(req.params.id);
    
    bookClubModel.findById(req.params.id, (err, data) => {
        res.json(data);
    })
})

app.post('/api/books', (req, res) => {
    console.log('Movie Received..');
    console.log(req.body.title);
    console.log(req.body.reviewer);
    console.log(req.body.cover);

    bookClubModel.create({
        title: req.body.title,
        reviewer: req.body.reviewer,
        cover: req.body.cover
    })

    res.send('Item Added');
})

// access database using unique document/movie id, and return data to client
app.put('/api/books/:id', (req, res)=> {
    console.log("Update " + req.params.id); // pull id out of url

    // make an asnyc call to database, find record with this id, will then update this record
    // identify the document to be edited, using unique id passed up, object containing document/movie data
    bookClubModel.findByIdAndUpdate(req.params.id, 
        req.body, {new:true},
        (err, data)=> {
            res.status(200).send(data);
        })
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../build/index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})