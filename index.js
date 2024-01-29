const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const route = require('./routes/tradeRoute');
const dbConnection = require('./config/dbConfig');

dotenv.config();
dbConnection();

const app = express();
app.use(bodyParser.json());

app.use('/',(req,res)=>{
    res.send("hai check")
});

app.use('/trades',route);
const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`server lisentning on ${port}`)
});