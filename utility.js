//shuffle and chunk functions

function shuffle(arr){
  var shuffledArr = [];
  while (arr.length > 0){
    var num = Math.floor(Math.random() * arr.length);
    shuffledArr.push(arr[num]);
    arr.splice(num, 1);
  }
  return shuffledArr;
}

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

function makeArray(num){
  var arr = [];
  for (var i = 1; i <= num; i++) {
    arr.push(i);
  }
  return arr;
}

// var array = [1,2,3,4,5,6,7,8,9,10];
// var shuffled = shuffle(array);
// console.log(shuffled);
// console.log(chunk(shuffled, 4));
// console.log(makeArray(10));

module.exports = {
  chunk : chunk,
  shuffle : shuffle,
  makeArray: makeArray
};



