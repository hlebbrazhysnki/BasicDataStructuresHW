// one

let yourArray = ['car', 'bike', true, 600, 2021]

// two 

let myArray = ["a", "b", "c", "d"];
// Only change code below this line
let ourVarible = myArray[3];
myArray[3] = "d";
// Only change code above this line
console.log(myArray);

// three 

function mixedNumbers(arr) {
    // Only change code below this line
    arr.push("VII", 8, 9);
    arr.unshift("one", "II", 3);
    // Only change code above this line
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));

  // four 

  function popShift(arr) {
    let popped = arr.pop();
    let shifted = arr.shift();
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));

  // five

  const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
  arr.splice(1,4)
// Only change code above this line
console.log(arr);

 // six 

 function htmlColorNames(arr) {
    // Only change code below this line
    arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')
    // Only change code above this line
    return arr;
  }
  
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));


// seven 

function forecast(arr) {
    // Only change code below this line
  
    return arr.slice(2,4);

  }
  
  // Only change code above this line
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

