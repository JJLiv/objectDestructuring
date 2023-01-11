let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets,yearNeptuneDiscovered} = facts;
//OBJECT DESTRUCTURING 1
// console.log(numPlanets); 8
// console.log(yearNeptuneDiscovered); 1846

//OBJECT DESTRUCTURING 2
//console.log(discoveryYears); [1846,1659]

//OBJECT DESTRUCTURING 3
function getUserData({firstname, favColor = "green"}){
    return `Your name is ${firstname} and you like ${favColor}`
}

//getUserData({firstname: "Alejandro", favColor: "purple"});
//Your name is Alejandro and you like purple

//getUserData({firstname: "Melissa"});
//Your name is Melissa and you like green

//getUserData({});
//Undefined


let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // ? Maya
console.log(second); // ? Marissa
console.log(third); // ? Chi

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
  
  console.log(raindrops); // ? "Raindrops on roses"
  console.log(whiskers); // ? "whiskers on kittens"
  console.log(aFewOfMyFavoriteThings); // ?  "Bright copper kettles",
 //  "warm woolen mittens",
 // "Brown paper packages tied up with strings"

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // ? [10, 30, 20]
//----------------------------------------------------
var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
//   var a = obj.numbers.a;
 // var b = obj.numbers.b;

  let {numbers: {a,b}} = obj;
//--------------------------------------------------
  var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

  [0,1] = [1,0];

  //-------------------------------------------

  let raceResults = ([first,second,third,...rest]) => 
  ({first, second, third, rest});

  

