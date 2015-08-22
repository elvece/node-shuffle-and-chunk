 ## Node Shuffle and Chunk

**This repo contains my solution to the following exercise:***

### Part 1

Define two functions -

1. The first takes an array of numbers as an argument and returns the array shuffled
1. The second takes the shuffled array and an integer equal to the number of desired chunks and returns an array of equal-sized chunks as an array of arrays

For example:

```javascript
var inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var shuffledArray = shuffle(inputArray)
chunk(shuffledArray, 3) // => [[15, 1, 8, 4, 10], [2, 13, 3, 6, 9], [5, 7, 11, 12, 14]]
```

What happens if the number of chunks does not divide evenly into the array? Make sure to keep the same number of chunks; just randomly add the remainder equally, like so:

```javascript
var inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
var shuffledArray = shuffle(inputArray)
chunk(shuffledArray, 3) // => [[15, 1, 8, 4, 10, 16], [2, 13, 3, 6, 9], [5, 7, 11, 12, 14]]
```

### Part 2

Using the function from part 1 along with Node/Express, create a user interface that organizes people into evenly-sized chunks. The user should be able to enter the total number of people along with the number of chunks to make. Group each chunk on the DOM accordingly.
