var express = require('express');
var router = express.Router();
var utility = require("../utility.js");

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Shuffle and Chunk with Node' });
});

router.post('/submit', function(req, res, next){
  var totalPeople = parseInt(req.body.totalPeople);
  var chunkSize = parseInt(req.body.chunkSize);
  var pplArr = utility.makeArray(totalPeople);
  var shuffled = utility.shuffle(pplArr);
  var chunked = utility.chunk(shuffled, chunkSize);
  console.log(chunked);
  res.render('index', {
    title: 'Shuffle and Chunk with Node',
    resultTitle: 'Your chunks are:',
    chunked: chunked
  });
});


module.exports = router;

