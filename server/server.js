const express = require('express');
const app = express();
const cors = require('body-parser');
const MongoClient = require('mongodb').MongoClient;


app.use(cors());
app.use(bodyParser.json());
