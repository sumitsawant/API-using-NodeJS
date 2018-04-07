var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var assert = require('assert');
var mongoose    = require('mongoose');

var url = 'mongodb://localhost:27017/BetaAPI';

var db = mongoose.createConnection(url);


router.use(function(req, res, next) {

    req.db = db;
    next();
});

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/data/:id', function(req, res, next) {

const db = req.db;

var apple=req.params.id;

db.collection('UserDetails').find({_SystemId: objectId(apple)}).toArray((err,data)=> {

            res.json({data: data});

});

});

module.exports = router;
