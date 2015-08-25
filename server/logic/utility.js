
//shuffle logic
function shuffle(arr){
  var shuffledArr = [];
  while (arr.length > 0){
    var num = Math.floor(Math.random() * arr.length);
    shuffledArr.push(arr[num]);
    arr.splice(num, 1);
  }
  return shuffledArr;
}

//chunk logic
function chunk(arr, num){
  var chunkSize = arr.length / num;
  var copy = arr;
  var chunks = [];
  while (copy.length > 0){
    if (copy.length < chunkSize){
      for (var i = 0; i < copy.length; i++) {
        chunks[i].push(copy[i]);
      }
      return chunks;
    }
    else {
      chunks.push(arr.splice(0, chunkSize));
    }
  }
  return chunks;
}

//creates array of numbers from total number
function makeArray(num){
  var arr = [];
  for (var i = 1; i <= num; i++) {
    arr.push(i);
  }
  return arr;
}

module.exports = {
  chunk: chunk,
  shuffle: shuffle,
  makeArray: makeArray
};



