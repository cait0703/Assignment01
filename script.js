//STEP 1
let someMonth
/* commenting out because the error is bugging me :)
function theMonth()
*/
let currentMonth
let summerMonth
let myLibraryFunction

//STEP 2
let numericLiteral = 26;
let stringLiteral = "My name is Cait.";
let booleanLiteral = false;
let nullLiteral = null;

//STEP 3
    //Example 1
let yourName = "Cait";
let favoriteVoip= "Google Chrome";

const statement = `My name is ${firstName} and my favorite VOIP is ${favoriteVoip}`;
console.log(statement);

    //Example 2
const birthYear = 1962;
let currentYear = 2024;

let age = currentYear - birthYear;

console.log(`I am ${age} years old!`);

//STEP 4
let strFirstName;
let strLastName;
let strAddress;
let strCity;
let strState;
let strZipCode;
let numYourAge;
let strReferralSource;
let boolMayWeContactYou;

//STEP 5
    //Example 1
let strFirstName;
let strCity;
let boolMayWeContactYou;

strFirstName = 'Cait';
strCity = 'San Diego';
boolMayWeContactYou = true;

    //Example 2
let strFirstName = 'Cait';
let strCity = 'San Diego';
let boolMayWeContactYou = true;

    //Example 3
let strFirstName = 'Cait', strCity = 'San Diego', boolMayWeContactYou = true;

//STEP 6
let myAge;
myAge = 'I am ' + 26;

console.log(myAge);

//STEP 7
let exampleOne;
let exampleTwo;
exampleOne = 'The story is ' + true;
console.log(exampleOne);
exampleTwo = 27 + false;
console.log(exampleTwo);

//STEP 8
/*Add a backslash to each quotation mark that is not intended to signal the begginning or ending of the string */
let someString = 'Who once said, "\Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former.\"'
console.log(someString);

//STEP 9
    //Null Value
let nullValue = null;
    //Undefined Value
let undefinedValue;

//STEP 10
let tenString = 'My name is Cait';
console.log(typeof  tenString);

let tenNum = 26;
console.log(typeof tenNum);

let tenBool = false;
console.log(typeof tenBool);

let tenObj = {flavor:'Cotton Candy', color: 'blue and pink'};
console.log(typeof tenObj);

let tenUndef;
console.log(typeof tenUndef);

//STEP 11
alert('Hello ' + 'Cait Lanning' + ', welcome to the JavaScript class!');

//STEP 12
let name = 'Cait Lanning';
alert('Hello ' + name + `, welcome to the JavaScript class!`);

//STEP 13
let course = 'JavaScript'
alert('Hello ' + name + `, welcome to the ${course} class!`);

//STEP 14
alert('Hello ' + name + `,\nWelcome to the ${course} class!`);

//STEP 15
let name = prompt('What is your name?');
alert('Hello ' + name + `,\nWelcome to the ${course} class!`);

//STEP 16
let course = prompt('What class are you taking?');
alert('Hello ' + name + `,\nWelcome to the ${course} class!`);

//STEP 17
let x = 10;
let y = 20;
console.log(x + y);

//STEP 18
let x = 20;
x = x + 20;
console.log(x);

//STEP 19
let x = 20;
x = x * 5;
console.log(x);

//STEP 20
let x = 20%3;
x = x/1;
console.log(x);

//STEP 21
let a = 5;
let b = 20;

alert((a / b) != (b * a));

//STEP 22
let c = 10;
let d = 7;
let e = 3;

alert((d + e) === c );
