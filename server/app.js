const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();



mongoose.connect('mongodb+srv://mongouser:mongouser123@cluster0-au3c6.azure.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser: true}).then(
    ()=>{console.log('connected to database')},
    err=>{console.log(err)}
);

app.use(cors());

app.use('/graphql',graphqlHTTP({
    schema:schema,
    graphiql:true
}))

app.listen(4000,()=>{
   console.log('now listening on 4000');
});