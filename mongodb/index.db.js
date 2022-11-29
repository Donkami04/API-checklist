const express = require('express');
const app = express();

const { MongoClient } = require("mongodb");
const config = require('../config/config');

const uri = config.mongodb.uri;
const MyDB = new MongoClient(uri);


module.exports = { MyDB }