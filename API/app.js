var express = require('express');
const app = express();
const port= 8210;
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
//const mongourl= "mongodb://localhost:27017";
const mongourl = "mongodb+srv://edureka:1234@cluster0.t9dwc.mongodb.net/tss?retryWrites=true&w=majority"
let db;
let col_name = "category"
let col_name1 = "sub_category"
let col_name2 = "size"
let col_name3 = "tag"
let col_name4 = "products"

//get
app.get('/',(req,res) => {
    res.send("welcome to Api from cloud")
})


app.get('/category',(req,res) =>{
    db.collection(col_name).find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

app.get('/sub_category',(req,res) =>{
    db.collection(col_name1).find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

app.get('/size',(req,res) =>{
    db.collection(col_name2).find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

app.get('/tag',(req,res) =>{
    db.collection(col_name3).find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
app.get('/products',(req,res) =>{
    db.collection(col_name4).find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})



MongoClient.connect(mongourl,(err,client) => {
    if(err) console.log("Error while connecting");
    db = client.db('tss');
    app.listen(port,() => {
        console.log(`listen on port in ${port}`);
    });
})
