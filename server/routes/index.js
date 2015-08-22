var express = require('express');
var router = express.Router();
var utility = require("../utility.js");

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Shuffle and Chunk with Node' });
});

router.post('/submit', function(req, res, next){
  var totalPeople = req.body.totalPeople;
  console.log(totalPeople);

  var chunkSize = req.body.chunkSize;
  console.log(chunkSize);

  var pplArr = makeArray(totalPeople);

  var shuffled = shuffle(pplArr);

  var chunked = chunk(shuffled);

  res.render('index', {
    output: chunked
  });
});

  console.log(makeArray(10));

module.exports = router;

