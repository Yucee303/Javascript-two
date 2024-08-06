//..............................................................................................................................................................................
//...................................................................................................................................................................................

//  [24]   TEMPERATURE CONVERTION PROGRAM

texttBox= document.getElementById("texttBox");
const toFahrenheit= document.getElementById("toFahrenheit");
const toCelsius= document.getElementById("toCelsius");
resultt= document.getElementById("resultt");
let temp;

function convert(){
  if(toFahrenheit.checked){
    temp = Number(texttBox.value);
    temp = temp * 9/5 + 32;
    result.textContent  = temp + 
  }
  else if(toCelsius.checked){

  }
  else{
    result.textContent = "Select a unit";
  }
}  
console.log(convert())
//............................................................................................
//............................................................................................

//    [25]   ARRAY = is a variable like structure that can hold more than 1 value. but a variable can hold one value.

let fruits = ["apple", "orange", "banana", "coconut"];  //arrays begins with zero, ie according to the fruits, it is [0, 1, 2, 3]

fruits.push("coconut") //to push an element to the end, with the ("coconut") in the push, coconut will be at the end of the line, without d coconut, i.e (), it will remove the last item in an array
fruits.pop(); //pop removes the last element
fruits.unshift("mango"); // adds the element to the begining,  puts the mango at the first line
fruits.shift(); // remove an element from the begining.


  console.log(fruits[0]);          //[answer is apple]
  console.log(fruits[1]);          //[answer is orange]
  console.log(fruits[2]);          //[answer is banana]
  console.log(fruits[3]);          //[answer is coconut] */

  let numOfFruits =fruits.length      //gives you the total number of fruits.
  console.log(numOfFruits);  //[answer is 3, in apple, orange, banana], [but in apple, orange, banana, coconut, it is 4]

  index =fruits.indexOf("apple"); //gives you the position of the first fruit (apple)
  console.log(index);      //[answer is 0]

  index = fruits.indexOf("banana"); //gives you the position of the third fruit (banana)
  console.log(index);  //[answer is 2]

  index =fruits.indexOf("coconut"); //gives you the position of the last fruit (coconut)
  console.log(index);  //[answer is 3]

  index =fruits.indexOf("mango"); //gives you the position of the fruit not in the array (mango)
  console.log(index);  //[answer is -1] [//i.e the Element wasnt found]


for (let i = 0; i < fruits.length; i++) {   // using the "for" loop, [the answer is apple, orange, banana, coconut]
    console.log(fruits[i]); 
}  

for (let i = 0; i < fruits.length; i+=2) {   // using the "for" loop,[the answer is apple, banana]
  console.log(fruits[i]); 
}
 

for (let i = 1; i < fruits.length; i++) {   // using the "for" loop,[the answer is orange, banana, coconut]
  console.log(fruits[i]); 
}  

for (let i = 1; i < fruits.length; i+=2) {   // using the "for" loop, [the answer is orange, coconut]
  console.log(fruits[i]); 
}  

for (let i = fruits.length; i >= 0; i--) {   // using the "for" loop as a reverse, [the answer is undefined, coconut, banana, orange, apple]
  console.log(fruits[i]); 
}  

for (let i = fruits.length - 1; i >= 0; i--) {   // using the "for" loop as a reverse, [the answer is coconut, banana, orange, apple]
  console.log(fruits[i]); 
}   

for (let fruit of fruits) {   // using the "for" loop, [the answer is  apple, orange, banana, coconut (4times)]
  console.log(fruits); 
}

for (let fruit of fruits) {   // using the "for" loop, [the answer is  apple, orange, banana, coconut]
  console.log(fruit); 
} 

fruits.sort();   //sorting accordingly, alphabetical order


  for (let fruit of fruits) {   // using the "for" loop, [the answer is apple, banana, coconut, orange (4times)]
    console.log(fruits); 
  }

  for (let fruit of fruits) {   // using the "for" loop, [the answer is apple, banana, coconut, orange]
    console.log(fruit); 
  }


fruits.sort().reverse();

for (let fruit of fruits) {   // using the "for" loop, [the answer is orange, coconut, banana, apple]
  console.log(fruit); 
}


//......................................................................................................................
//.....................................................................................................................................

//     [26]   SPREAD OPERATOR = is represented by 3dots (...), it allows an iterable such as an array or string to be expanded into seperate elements(unpacks the element)
 
 numbers =[1, 2, 3, 4, 5]; // it is an array of numbers [the answer is 1, 2, 3, 4, 5]
 maximum = Math.max(numbers)
 
 console.log(maximum);        //[the answer is NaN ie not a number, because it cannot be done like that]

 numbers =[1, 2, 3, 4, 5]; // [the answer is 1, 2, 3, 4, 5]

 let maximum = Math.max(...numbers)
 console.log(maximum);        //[the answer is 5, because the maximum(highest) number is 5, it has the (...) in it].

 let minimum = Math.min(...numbers)
 console.log(minimum);        //[the answer is 1, because the minimum(lowest) number is 1, it has the (...) in it].



letters =[...username]
console.log(letters)     // [the answer is B, r, o, , C, o, d, e]*/

let letters =[...username].join("-")
console.log(letters)     // [the answer is B- r- o- -C- o- d- e]

fruits = ["apple", "orange", "banana"]; // a shallow copy is a different data structure but contains identical values.
let vegetables = ["carrots","celery","potatoes"];

let foods = [...fruits, ...vegetables, "eggs", "milk"]; //[if you dont put the spread operators, you can use ("") to add to it],[the answer is "apple","orange","banana","carrots","celery","potatoes","eggs","milk"]

console.log(foods); 


//.......................................................................................................................................................................
//....................................................................................................................................................................

// [27] REST PARAMETERS = it is prefixed with 3dots[...], they allow a function to work with a variable number of argument by bundling them into an array, it's very similar to the spread operator.
      // SPREAD OPERATORS expands i.e it spreads an array into seperate element while  REST PARAMETERS does the opposite, they bundle seperate elements into an array.
  
      
  function openfridge(...foods){
    console.log(foods);
  }


  const food1 = "pizza";
  const food2 = "hamburger";
  const food3 = "hotdog";
  const food4 = "sushi";
  const food5 = "ramen"

  openfridge(food1, food2, food3, food4, food5) //[the answer is "pizza","hamburger","hotdog","sushi","ramen",""]




//example 2

function openfridge(...foods){
  console.log(...foods); //[the answer is pizza hamburger hotdog sushi ramen][withour any comma between them]
}
function getfood(...foods){
  return foods;
}


food1 = "pizza";
food2 = "hamburger";
food3 = "hotdog";
food4 = "sushi";
food5 = "ramen"

foods = getfood(food1, food2, food3, food4, food5)
console.log(foods); // [the answer is "pizza", "hamburger", "hotdog", "sushi", "ramen" ]


function sum(...numbers){
  let result = 0;
  for(let number of numbers){
    result += number;
  }
  return result;
}
const totall = sum(1, 2, 3); //[the answer is $6][then if it's 1,2,3,4  the answer will be $10]
console.log(`Your total is $${total}`);


function getAverage(...numbers){
  let result = 0;  
  for(let number of numbers){
    result += number;
  }
  return result / numbers.lenght;
}
 //const totaal= getAverage(75, 100, 85, 90, 50);//[the answer is 80]
 console.log(total);


function combineStrings(...strings){
  return strings.join(" ");
}

const fullName= combineStrings ("Mr.", "Spongebob", "Squarepants", "III");

console.log(fullName);

//................................................................................................................
//..........................................................................................................

/* [28] DICE ROLLING--- ROLLING OF FAIR DICE                  */


//.................................................................................................................................
//................................................................................................................................

/*RANDOM PASSWORD GENERATOR- USUALLY TO CHECK IF SOMEONE IS NOT A ROBOT*/

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){

  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "£$%^&*?>@&*&";
  
  let allowedChars = "";
  let password = "";

  allowedChars += includeLowercase ? lowercaseChars: "";
  allowedChars += includeUppercase ? uppercaseChar: "";
  allowedChars += includeNumbers ? numberChars: "";
  allowedChars += includeSymbols ? symbolChars: "";

  if(length <= 0){
    return `(password length must be at least 1)`;
  }
  if(allowedChars.length === 0){
    return `(At least 1 set of character needs to be selected)`;
  }

  for(let i = 0; i< length; i++){
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex]; 
  }
  

  return password;
}


const passwordLength = 12;   //[the answer can be anything, it will give random password e.g *u9DQQdztb16, the next is D^NS@I&gL%2Q ]
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength,
                                 includeLowercase, 
                                 includeUppercase, 
                                 includeNumbers, 
                                 includeSymbols);
                              
console.log(`Generated password: ${password}`); 

//................................................................................................................................................
//................................................................................................................................................

/* [29] CALLBACK = a function that is passed as an arguement to another function.
            it is used to handle asynchronous operations, which are:
            1. Reading a file
            2. Network requests
            3. Interracting with databases

            "Hey, when you're done, call this next"    */
            
 
 hello(wait);
 hello(leave);
 hello(goodbye);
  

 function hello(callback){
   console.log("hello!");
   callback();
 }

 function wait(){
   console.log("wait!");
 }

 function leave(){
   console.log("leave!")
 }
 
 function goodbye(){
  console.log("goodbye!");
 }


 sum(displayPage, 1, 2); //[the answer is 3, i.e 1 + 2 = 3]
 sum(displayConsole, 1, 2);


 function sum(callback, x, y){
    let result = x + y;
    callback(result);
 }

 function displayConsole(result){
   console.log(result);
 }

 function displayPage(result){
  document.getElementById("myH1").textContent = result; //[the answer 3 will be boldly displayed]
 }
 

 //.........................................................................................................
 //............................................................................................................

 //   [30] forEach()= method used to iterate over the elements of an array and 
//            apply a specific function(callback) to each element.
//
//            array.forEach(callback)
//            element, index, array are provided

numbers = [1, 2, 3, 4, 5];//[the answer is 1, 2, 3, 4,5]

 numbers. forEach(double);
  numbers.forEach(display);

function double(element, index, array){
   array[index] = element * 2;  //[the answer is 2, 4, 6, 8, 10 if the array[index] = element * 2]
}


numbers.forEach(triple);
numbers.forEach(square);
numbers.forEach(display);

function triple(element, index, array){
  array[index] = element * 3;  //[the answer is 3, 6, 9, 12, 15 if the array[index] = element * 3]
}


  numbers.forEach(cube);
  numbers.forEach(display);

function square(element, index, array){
  array[index] = Math.pow(element, 2);  //[the answer is 1, 4, 9, 16, 25 if the array[index] = element is raised to the power 2]
} 


 numbers.forEach(cube);
 numbers.forEach(display);

function cube(element, index, array){
  array[index] = Math.pow(element, 3); //[the answer is 1, 8, 27, 64, 125 if the array[index] = element is raised to the power 2]
} 

//
function display(element){
  console.log(element);
}

fruits = ["apple", "orange", "banana", "coconut"];

  fruits.forEach(upperCase);
  fruits.forEach(display);

function upperCase(element, index, array){
  array[index]= element.toUpperCase();// [the answer is APPLE, ORANGE, BANANA, COCONUT];
}

  fruits.forEach(lowerCase);
  fruits.forEach(display);

function lowerCase(element, index, array){
  array[index]= element.toLowerCase();// [the answer is apple, orange, banana, coconut];
}

  fruits.forEach(capitalize);
  fruits.forEach(display);

function capitalize(element, index, array){
  array[index]= element.charAt(0).toUpperCase() + element.slice(1); // [note, for capitalizing, use "charAt" instead of capitalize, the answer is Apple, Orange, Banana, Coconut];
}

function display(element){
  console.log(element);
}

//......................................................................................................................................................................................................
//.............................................................................................................................................................................................................................

//[31] MAP METHOD i.e .map()= accepts a callback and applies that function to each element of
//                       an array, its similar to the forEach method, 
//                       however it then returns a new array.

numbers = [1, 2, 3, 4, 5];
squares = numbers.map(square);
cubes = numbers.map(cube);


console.log(cubes);

function square(element){
  return Math.pow(element, 2) //[the answer is 1, 4, 9, 16, 25]
}

function cube(element){
  return Math.pow(element, 3) //[the answer is 1, 8, 27, 64, 125]
}


const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const studentsUpper = students.map(upperCase);
const studentsLower = students.map(lowerCase);

console.log(studentsUpper) //[the answer is "SPONGEBOB", "PATRICK", "SQUIDWARD", "SANDY"];

function upperCase(element){
  return element.toUpperCase();
}
//
console.log(studentsLower)  // [the answer is "spongebob", "patrick", "squidward", "sandy" ]

function lowerCase(element){
  return element.toLowerCase(); 
}

const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formattedDates = dates.map(formatDate);

console.log(formattedDates); //[the answer is "1/10/2024", "2/20/2025", "3/30/2026",]
 
function formatDate(element){
  const parts = element.split("-");
  return `${parts[1]}/${parts[2]}/${parts[0]} `
}
//...........................................................................................................................................................
//...........................................................................................................................................................

//   [32]   FILTER METHOD i.e filter() creates a new array by filtering out elements.


numbers = [1, 2, 3, 4, 5, 6, 7];
evenNums = numbers.filter(isEven);
oddNums = numbers.filter(isOdd);

console.log(evenNums); // [the answer is 2, 4, 6]
console.log(oddNums); //[the answer is 1, 3, 5, 7]


function isEven(element){
  return element % 2 === 0;
}

function isOdd(element){
  return element % 2 !== 0;
}



const ages = [16, 17, 18, 19, 20, 60];
const adults = ages.filter(isAdult);
const children = ages.filter(isChild);

 
console.log(adults); //[the answer is 18, 19, 20, 60]
console.log(children); //[the answer is 16, 17]


function isAdult(element){
  return element >=18;
}

function isChild(element){
  return element < 18;
}


const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];

const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);

console.log(shortWords); //[the answer is "apple", "orange", "banana", "kiwi"]
console.log(longWords); //[the answer is "pomegranate", "coconut"]


function getShortWords(element){
  return element.length <= 6;
}

function getLongWords(element){
  return element.length > 6;
}

//..........................................................................................
//..................................................................................................

//   [33] REDUCE i.e reduce()= reduces the element of an array to a single value.

const prices = [5, 30, 10, 25, 15, 20];
total  = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);
  
function sum(accumulator, element){
  return accumulator + element;
}

const grades = [75, 50, 90, 80, 65, 95]

maximum = grades.reduce(getMax);

console.log(maximum);

function getMax(accumulator, element){
  return Math.max(accumulator, element);
}

minimum = grades.reduce(getMin);

console.log(minimum);


function getMin(accumulator, element){
  return Math.min(accumulator, element);
}


//...................................................................................................................
//...........................................................................................................................

//  [34]   FUNCTION EXPRESSION = IS A WAY TO DEFINE FUNCTIONS AS VALUES OR VARIABLES, IT'S NOT THE SAME AS FUNCTION DECLARATION
//                      they are also used in:
// 1) Callbacks in synchronous operations
// 2) Higher- order functions
// 3) Closures
// 4) Event Listeners

numbers =[1, 2, 3, 4, 5, 6];
squares = numbers.map(square);

console.log(squares); //[the answer is [1, 2, 9, 16, 25, 36] this is an example of a function declaration]

function square(element){
  return Math.pow(element, 2);
}

numbers =[1, 2, 3, 4, 5, 6];

squares = numbers.map(function(element){
  return Math.pow(element, 2);
});
console.log(squares); //[the answer is still [1, 2, 9, 16, 25, 36] ]


cubes = numbers.map(function(element){
  return Math.pow(element, 3);
});
console.log(cubes); //[the answer is 1, 8, 27, 64, 125, 216]


evenNums = numbers.filter(function(element){
  return element % 2 ===0
});
console.log(evenNums); //[the answer is 2, 4, 6]


oddNums = numbers.filter(function(element){
  return element % 2 !==0
});
console.log(oddNums); //[the answer is 1, 3, 5]


total = numbers.reduce(function(accumulator, element){
  return accumulator + element;
});
console.log(total); //[the answer is 21]

//..........................................................................................................................................
//...........................................................................................................................................

//    [35]   ARROW FUNCTIONS = a concise way to write function expressions; it's
//                  good for simple functions that you use only once
//     fomular=    (parameter) => some code. 

const hello = function(){
 console.log("hello") //[the answer is hello, but this is not the arrow function]
}
hello();
                                     //0R


const hello = (name, age) => {console.log(`Hello ${name}`)
                        console.log(`You are ${age} years old`)};

hello("Bro", 25);

setTimeout(() => console.log("Hello"),30000);

const numbers =[1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNums = numbers.filter((element) => element % 2 === 0);
const oddNums = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(squares);//[the answer is[1, 4, 9, 16, 25, 36]
console.log(cubes);//[the answer is[1, 8, 27, 64, 125, 216]
console.log(evenNums);//[the answer is[2, 4, 6]
console.log(oddNums);//[the answer is[1, 3, 5]
console.log(total);//[the answer is 21]

//..........................................................................................................................................
//...........................................................................................................................................

//  [36] OBJECT = A collection of rellated properties and/or methods
//         can represent real world objects (people, products, places)
//         object= {key:value, function()}

const person1 = {
  firstName: "Spongebob",// this is a string
  lastName: "Squarepants",// this is a string
  age: 30,
  isEmployed: true, // this is a boolean
  sayHello:() => console.log("Hi! I am Spongebob!"),//sayHello:function(){console.log("Hi! I am Spongebob!")} //[the answer is Hi! i am Spongebob] OR[this is using an Arror method, the answer is Hi! i am Spongebob]
  eat:()=>console.log("i am eating a krabby patty")

}

console.log(person1.firstName);//[the answer is Spongebob]
console.log(person1.lastName);//[the answer is Squarepants]
console.log(person1.age);//[the answer is 30]
console.log(person1.isEmployed);//[the answer is true]

person1.sayHello()


const person2 = {
  firstName: "Patrick", // this is a string
  lastName: "Star",    // this is a string
  age: 42,
  isEmployed: false, // this is a boolean
 //sayHello:function(){console.log("Hey! I'm Patrick...")}//[the answer is Hey! I'm Patrick...!]
 //                 OR0
  sayHello:() => console.log("Hey! I'm Patrick..."),//[this is using an Arror method, the answer is Hey! I'm Patrick...!]
  eat:()=> console.log("i am eating roast beef,chicken, and pizza")
}
console.log(person2.firstName);//[the answer is Patrick]
console.log(person2.lastName);//[the answer is Star]
console.log(person2.age);//[the answer is 42]
console.log(person2.isEmployed);//[the answer is false]

person2.sayHello()

//.................................................................................................................................
//..................................................................................................................................

//   [37] this = a reference to the object where THIS is used( the object depends on the immediate context)
//       we can replace person with THIS as long as we are within the context of the person object.
//       "this" doesnt work with an arrow function

const person3 = {
  name:"Spongebob",
  favfood:"hamburger",
  sayHello: function(){console.log(`Hi! I am ${this.name}`)}, 
  eat: function(){console.log(`${this.name} is eating ${this.favfood}`)}
}

person3.sayHello() //[the answer is Hi! I am spongebob]
person3.eat()//[the answer is Spongebob is eating hamburger]

const person4 = {
  name:"Patrick",
  favfood:"pizza",
  sayHello: function(){console.log(`Hi! I am ${this.name}`)},
  eat: function(){console.log(`${this.name} is eating ${this.favfood}`)}
}

person4.sayHello() //[the answer is Hi! I am Patrick]
person4.eat()//[the answer is Spongebob is eating Pizza]

//............................................................................................................
//.....................................................................................................................................

//  [38]  CONSTRUCTOR = is a special method for defining the properties and the methods of objects.

function Car(make, model, year, color){
  this.make = make,
  this.model = model,
  this.year = year,
  this.color = color,
  this.drive = function(){console.log(`You drive the ${this.model}`)}
}

const car1 = new Car("Ford", "Mustang", 2004, "red");
const car2 = new Car("Chevolet", "Camaro", 2005, "blue");
const car3 = new Car("Dodge", "Charger", 2026, "silver");

console.log(car1.make); //[the answer is Ford]
console.log(car1.model);//[the answer is Mustang]
console.log(car1.year);//[the answer is 2004]
console.log(car1.color);//[the answer is red]
car1.drive();

console.log(car2.make);//[the answer is Chevolet", "Camaro", 2005, "blue]
console.log(car2.model);//[the answer is Camaro, 2005, "blue]
console.log(car2.year); //[the answer is 2005]
console.log(car2.color); //[the answer is blue]
car2.drive();

console.log(car3.make); //[the answer is Dodge]
console.log(car3.model);//[the answer is Charger]
console.log(car3.year);//[the answer is 2026]
console.log(car3.color);//[the answer is silver]
car3.drive();

//.................................................................................................................................................
//.................................................................................................................................................

//  [39]  CLASS =(ES6 feature) provides a more structured and cleaner way to work with objects 
//      compared to traditional constructor function e.g static,encapsulation, inheritance e.t.c


 class Product{
  constructor(name, price){
    this.name = name;
    this.price = price;
  }

  displayProduct(){
    console.log(`Product:${this.name}`);
    console.log(`Price: $${this.price.toFixed(2)}`);
  }

  calculateTotal(salesTax){
    return this.price + (this.price * salesTax);
  }
}

const salesTax = 0.05;

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.50);
const product3 = new Product("Underwear", 100);


product1.displayProduct();
product2.displayProduct();
product3.displayProduct();

console.log(`Total price (with tax): $${total.toFixed(2)}`);

//................................................................................................
//.........................................................................................................

//   [40]  STATIC = keyword dat defines properties or methods dat belongs to a class itself rather 
//         dan d objects created 4rm dat class(i.e a class owns anything static not d object)

class MathUtil{
  static PI = 3.14159;

  static getDiameter(radius){
    return radius * 2;
  }

  static getCircumference(radius){
    return 2 * this.PI * radius;
  }

  static getArea(radius){
    return this.PI * radius * radius;
  }
}

console.log(MathUtil.PI); //[the answer is 3.14159]
console.log(MathUtil.getDiameter(10)); //[the answer is 20]
console.log(MathUtil.getCircumference(10));//[the answer is 62.8318]
console.log(MathUtil.getArea(10)) //[the answer is 314.159]

class User{
  static userCount = 0;

  constuctor(username){
    this.username = username;
    User.userCount++;
  }

  static getUserCount(){
    console.log(`There are ${User.userCount} users online`)
  }

  sayHello(){
    console.log(`Hello, my username is ${this.usern}`)
  }
}

const user1 = new User("squid");
const user2 = new User("patrick");
const user3 = new User("Sandy")

user1.sayHello();
user2.sayHello();
user3.sayHello();

User.getUserCount();

//..........................................................................................................................
//..........................................................................................................................

//  [41]  INHERITANCE= inheritance al/ /lows a new class to inherit properties and methods from an existing class
//             this 2 classes have a parent, child relationship (parent -> child)
//             a child will inherit properties and methods from a parent, inheritance helps with code reuseability.

class Animal{
  alive = true;
  eat(){
    console.log(`This ${this.name} is eating`);
  }

  sleep(){
    console.log(`This ${this.name} is sleeping`)
  }
}

class Rabbit extends Animal{
  name = "rabbit";

  run(){
    console.log(`this ${this.name} is running`)
  }
}

class Fish extends Animal{
  name = "fish";

  swim(){
    console.log(`this ${this.name} is swimming`)
  }
}

class Hawk extends Animal{
  name = "hawk";
  
  fly(){
    console.log(`this ${this.name} is flying`)
  }
  
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();


console.log(rabbit.alive);
rabbit.eat(); //[the answer is the rabbit is eating]
rabbit.sleep(); //[the answer is the rabbit is sleeping]
rabbit.run();//[the answer is the rabbit is running]

console.log(fish.alive);
fish.eat(); //[the answer is the fish is eating]
fish.sleep(); //[the answer is the fish is sleeping]
fish.swim();//[the answer is the fish is swimming]

console.log(hawk.alive);
hawk.eat(); //[the answer is the hawk is eating]
hawk.sleep(); //[the answer is the hawk is sleeping]
hawk.fly();//[the answer is the hawk is flying]

//..........................................................................................................
//.................................................................................................................

//   [42] SUPER = is a keyword that is used in classes to call the constructor or access the 
//        properties and methods of a parent; the parent is also known as the (superclass).
//             this =refers to ==> this object
//             super =refers to ==> the parent

class Animal{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  move(speed){
    console.log(`The ${this.name} moves at a speed of ${speed}km/hr`)
  }
}

class Rat extends Animal{
  constructor(name,age, runSpeed){
    super(name, age);
    this.runSpeed = runSpeed; 
  }

  run(){
    console.log(`This ${this.name} can run`);
    super.move(this.runSpeed); //[the answer is The rat moves at a speed of 25km/hr]
  }
}

class Crab extends Animal{
  constructor(name,age, swimSpeed){
    super(name, age);
    this.swimSpeed = swimSpeed; 
  }

  swim(){
    console.log(`This ${this.name} can swim`);
    super.move(this.swimSpeed); //[the answer is The crab moves at a speed of 12km/hr]
  }
}
 
class Falcon extends Animal{
  constructor(name,age, flySpeed){
    super(name, age);
    this.flySpeed = flySpeed; 
  }

  fly(){
    console.log(`This ${this.name} can fly`);
    super.move(this.flySpeed); //[the answer is The falcon moves at a speed of 50km/hr]
  }
}

const rat = new Rat("rat", 1, "25");
const crab= new Crab("crab", 2, "12");
const falcon = new Falcon("falcon", 3, "50");

console.log(rat.name); //[the answer is rat]
console.log(rat.age);//[the answer is 1]
console.log(rat.runSpeed);//[the answer is 25]

console.log(crab.name);//[the answer is crab]
console.log(crab.age);//[the answer is 2]
console.log(crab.swimSpeed);//[the answer is 12]

console.log(falcon.name);//[the answer is falcon]
console.log(falcon.age);//[the answer is 3]
console.log(falcon.flySpeed);//[the answer is 50]


rat.run(); //[the answer is This rat can run ]
crab.swim(); //[the answer is This crab can swim ]
falcon.fly(); //[the answer is This falcon can fly ]

//........................................................................................................
//........................................................................................................

//  [43] GETTER AND SETTER
// getter = special method that makes a property readeable
// setters = special method that makes a property writeable

// we use them to validate and modify a value a value when reading/ writing a property


class Rectangle{

  constructor(width, height){
    this.width = width;
    this.height = height;
  }

  set width(newWidth){
    if(newWidth > 0){
      this._width = newWidth // [note anything with underscore (_) is called private, e.g this is a "private width"]
    }
    else{
      console.error("Width must be a positive number") //[the answer is with an error code, because the height and width are written in negetive numbers]
    }
  }

  set height(newHeight){
    if(newHeight > 0){
      this._height = newHeight // [note anything with underscore (_) is called private, e.g this is a "private height"]
    }
    else{
      console.error("Height must be a positive number") //[the answer is with an error code, because the height and width are written in negetive numbers]
    }
  }

  get width(){
    return `${this._width.toFixed(1)}cm`; // [the answer is 5.0cm]
  }

  get height(){
    return `${this._height.toFixed(1)}cm`; // [the answer is 6.0cm]
  }

  get area(){
    return `${this._width * this._height.toFixed(1)}cm`; // [the answer is 30.0cm]
   
  }

}

const rectangle = new Rectangle(3, 4); // [the answer is still undefined, even after changing the height and width to positive numbers, until get is set]

rectangle.width = 5;
rectangle.height = 6;

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);

class Person{
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  set firstName(newfirstName){

    if(typeof newfirstName === "string" && newfirstName.length > 0){
      this._firstName = newfirstName;
    }

    else(
      console.error("First name must be a non-empty string")
    )
  }


  set lastName(newlastName){

    if(typeof newlastName === "string" && newlastName.length > 0){
      this._lastName = newlastName;
    }

    else(
      console.error("Last name must be a non-empty string")
    )
  }


  set age(newage){

    if(typeof newage === "number" && newage.length >= 0){
      this._age = newage;
    }

    else(
      console.error("Age must be a non-negetive number")
    )
  }


  get firstName(){
    return this._firstName; // [the answer is 6.0cm]
  }

  get lastName(){
    return this._lastName; // [the answer is 6.0cm]
  }

  get fullName(){
    return `${this._firstName +" " + this._lastName}`; // [the answer is spongebob squarepants, note that without the " ", it will just be spongebobsquarepants without space between it]
   
  }

  get age(){
    return this._age; // [the answer is 30]
  }
  
}

const person = new Person("Spongebob", "Squarepants", 30) 

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);

//..............................................................................................
//..............................................................................................

//  [44]  DESTRUCTURING = allows us to extract values and objects, then assign them to variables in a convenient way
//                [] = to perform array destructuring
//                {} = to perform object destructuring

//.........EXAMPLE 1...........
//SWAP THE VALUES OF TWO VARIABLES

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);

//.........EXAMPLE 2...........
//SWAP TWO ELEMENT IN AN ARRAY
 
const colours =["red","green", "blue", "black", "white"];

[colours[0], colours[4]] = [colours[4], colours[0]];

console.log(colours);

//.........EXAMPLE 3...........
//ASSIGN ARRAY ELEMENTS TO VARIABLES

const colors = ["red", "green", "blue", "black", "white"];

const[firstColor, secondColor, thirdColor, ...extraColors] = colors; // remember (...) is called REST PARAMETERS

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

//.........EXAMPLE 4...........
//EXTRACT VALUES FROM OBJECTS

const personA = {
  firstName: "Spongebob",
  lastName: "Squarepants",
  page: 30,
  job: "Fry Cook",
}

const personB = {
  firstName: "Patrick",
  lastName: "Star",
  page: 34,
}

//const {firstName, lastName, page, job} = personA;
const {firstName, lastName, page, job= "unemployed"} = personB;

console.log(firstName);
console.log(lastName);
console.log(page);
console.log(job);



//.........EXAMPLE 5...........
//DESTRUCTURE IN FUNCTION PARAMETERS




//...................................................................................................
//....................................................................................................

//   [45] NESTED OBJECTS = Objects inside of other objects, they allow you to represent more complex data structures.
//                 Child objects is enclosed by a parent object.

//                 Person(Address{}, ContactInfo{})
//                 ShoppingCart{keyboard{}, Mouse{}, Monitor{}}

const personI = {
  fullName: "Spongebob Squarepants",
  age: 30,
  isStudent: true,
  hobbies:["karate","jellyfishing", "cooking"],
  address:{
    street: "124 Couch Str.",
    city: "Bikini Bottom",
    country:"Int. Waters"
  }
} 

console.log(personI.fullName);
console.log(personI.age);
console.log(personI.isStudent);
console.log(personI.hobbies[2]);
console.log(personI.address.country);

for(const property in personI.address){
  console.log(personI.address[property]);
}


class PersonII{

  constructor(name, age, ...address){
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}

class Address{
  constructor(street, city, country){
    this.street = street;
    this.city = city;
    this.country = country;
  }
}


console.log(personI.address);

//......................................................................................................
//......................................................................................................


//  [46] CLOSURE = A function defined inside of another function, the inner function has access to 
//           the variables and scope of the outer function. by using closures, they allow for
//           private variables and state maintenance,frameworks in js like REACT, VUE AND ANGULAR
//           use closures too.

function outer(){

  let message = "hello";
  function inner(){
    console.log(message);
  }
  inner(); 
}
 outer();

function createCounter(){
  let count = 0;

  function increment(){
    count ++;
    console.log(`Count increased to ${count}`)
  }
  
  function getCount(){
    return count;
  }

  return{increment, getCount};
}
 const counter =  createCounter();

 counter.increment();
 counter.increment();
 counter.increment();

 counter.count = 0;

 //console.log(counter.count);

 console.log(`The current count is ${counter.getCount()}`)

function createGame(){
  let score = 0;

 function increaseScore(points){
    score += points;
    console.log(`+${points}pts`);
 }
 
 function decreaseScore(points){
    score -= points;
    console.log(`-${points}pts`);
 }

 function getScore(){
   return score;
 }
  
 return{increaseScore, decreaseScore, getScore}

};

const game = createGame();

game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);

console.log(`The final score is ${game.getScore()}pts`);

//....................................................................................................................
//......................................................................................................


//   [47]   DIGITAL CLOCK

function updateClock(){
  const now = new Date();
  let hours = now.getHours();
  const meridien = hours >=12? "PM": "AM";
  hours = hours % 12 || 12;
  hours = hours .toString().padStart(2, 0);
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2, 0);
  const timeString =`${hours}: ${minutes}: ${seconds} : ${meridien}`;
  document.getElementById("clock").textContent = timeString;
}
 updateClock();
 setInterval(updateClock, 1000);

//..................................................................................................
//...................................................................................................

//   [48]  STOP WATCH


const dis = document.querySelector("#display");
console.log(dis)
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;
const startBtn = document.getElementById("startBtn")
startBtn.onclick = function(){
  console.log("hee")
  start();
  stopBtn();
  reset();
  
}

function start(){
  if(!isRunning){
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    isRunning = true;
  }
}

function stopBtn(){
  if(!isRunning){
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
  }
}

function reset(){
  clearInterval(timer);
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
  dis.textContent = "00:00:00:00";
}

function update(){
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
  let seconds = Math.floor(elapsedTime / 1000 % 60);
  let milliseconds = Math.floor(elapsedTime % 1000 / 10);

  hours = strings(hours).padStart(2, "0");
  minutes = strings(minutes).padStart(2, "0");
  seconds = strings(seconds).padStart(2, "0");
  milliseconds = strings(milliseconds).padStart(2, "0");

  dis.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

//................................................................................................   
//.........................................................................................................

//  [49]  SYNCHRONOUS AND ASYNCHRONOUS
// SYNCHRONOUS = Is code that Executes line by line consecutively in a sequential manner,
//               it is a code that waits for an operation to complete.

// ASYNCHRONOUS = this allows multiple operations to be perfomed concurrently without writing
//                it doesnt block the execution flow and allows the program to continue.
//                (found with input/Output operations, network requests, fetcting data),kinda like a time traveller
//                Handled with: Callbacks, Promises, Async/Await.

//..................................................................................................
//..................................................................................................

//   [50]  CALCULATOR PROGRAM
 const display= document.getElementById("display");

//...........................................................................................
//...........................................................................................

//  [51]  ES6 MODULES = An external file that contains reuseable code that can be imported into other 
//              javascript files.if you write a difficult program,you can import any part 
//              of that program into another application, if you dont feel like re-writing them into another file
//              they can contain variables, classes, functions and more.

import{PI, getCircumference, getArea, getVolume} from'./mathUtil.js';

console.log(PI);
const circumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(`${circumference.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm^2`);
console.log(`${volume.toFixed(2)}cm^3`);

