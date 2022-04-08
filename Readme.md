# Learning Javascript

This is a series of notes I've taken while learning Javascript. Its for my own
purposes so I can have some sample code to glance back at for future JS
projects.

I'm using [this FreeCodeCamp.org youtube video](https://youtu.be/PkZNo7MFNFg)
as my primary source. (#BeauCarnesGang4Life)

## Background

Javascript is primarily a client-side web programming language. JS code
lives embedded within a webpage and gets executed within the website visitor's
browser whenever they visit the page.

There are also backend JS web frameworks such as React and NodeJS which let you
run Javascript code server-side as well. 

These notes really just cover the language basics (variables, loops,
conditionals, functions, ect.). But I may contribute more Javascript projects
to this repo as time goes on.

## Comments 

Comments are just notes within code that are not executed. JS comments are the
same as C.

Example,

```
// In-line comment.

/* This is a 
multi-line comment */
```

## Data Types & Variables

There are 7 datatypes that are available in Javascript.

* Undefined: Not set to anything, an unassigned variable.

* Null: Nothing.

* Boolean: True or False.

* String: String of text.

* Symbol: Immutable unique value.

* Number: A number.

* Object: Key value pairs.


A variable is an empty container that you can set/assign to any of the
datatypes.

### Assigning a Variable

```javascript
var myName = "Johnny"; 	// Bog standard variable, changable.

let ourName = "freeCodeCamp";	// Only usable within given scope.

const pi = 3.14;	// Constant, not changable.

```

Semicolons are optional in JS but good practice.

### Storing Values with Assignment Operator 

There's a difference between declaring variables and assigning variables.

```javascript
var a;		// Declared 

a = 2;		// Assigned

var b = 9;	// Declared & Assigned

```

In Javascript `=` is the assignment operator.

## Numbers and Arithmetic

There are a number of basic math operators in JS.

		Operator	Description
		-------     -------
		 `+`		Addition
		 `-`		Subtraction
		 `*`		Multiplication
		 `**`		Exponentiation (ES2016)
		 `/`		Division
		 `%`		Modulus (Remainder)
		 `++`		Increment
		 `--`		Decrement

```javascript
var sum = 10 + 0;

console.log(sum)

var product = 2.5 * 2.0;	// Floats

console.log(product)

var quotient = 7 / 5;	// Ints in

console.log(quotient)	// Float out
```

In Javascript the idea of number is not broken down into floats, ints, longs,
double ect.. Rather it is all just number.

### Additional Assignment Ops

		Operator	Description
		-------     -------
		 `+=`		Add to self
		 `-=`		Sub from self
		 `*=`		Multiply against self
		 `/=`		Divide by self

```javascript
var a = 3;
var b = 7;
var c = 5;
var d = 12;

a += 10;
b -= 4;
c *= 3;
d /= 2;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
```

* Console:

```
13
3
15
6
```

## Stings 

### Escaping Stings 

If you have to have double quotes in your string your can escape them using the
backslash character.

```javascript
var myString = "This string \"has \"double\" quotes \" in it.";
```

You can also use single quotes or backticks.

### Concatenating Strings 

You can use the `+` operator to add two strings together.

```javascript
var myString1 = "This is ";
var myString2 = "a string.";

console.log(myString1 + myString2);
```

If you try to add a number to a string with the `+` operator it will just
concatenate it not do math with it.

```javascript
var myString = "22 ";
var myNum = 47;

console.log(myString + myNum);
```

* Console:

```
22 47
```

You can also concatinate with the `+=` operator.

```javascript
var ourStr = "freeCodeCamp is ";
var anAdjective = "awesome!";

ourStr += anAdjective;

console.log(ourStr);
```

* Console: "freeCodeCamp is awesome!"

### String Properties

#### String Length

You can use the .length property of a sting in JS to tell how long it is.

```javascript
var firstName = "Johnny";

console.log(firstName.length);
```

* Console: 6

#### String Indexing

Strings have an index in Javascript. You can address them via the position of
their characters.

```javascript
var myString = "Johnny is a lie.";

console.log(myString[0]);

// Reverse index.
console.log(myString[myString.length - 2]);
```

#### Madlibs

Lets make a madlib game using what we now know about strings.

```javascript
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
	var result = "";

	result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + ".";

	return result;
}


console.log(wordBlanks("dog", "big", "ran", "quickly"));
```

## Arrays

Arrays are a fundamental programming structure. They are a list of items. In
javascript arrays can be mixed type, meaning element 0 could be a number
whereas element 1 is a string.

Just like strings, arrays have indexes which we can use the address the
individual particular elements. We do this with the bracket `[]` notation.

```javascript
var myArray = ["cat", 7, "plant", 3.14];

console.log(myArray[2]);

myArray[3] = "pi";

console.log(myArray[3]);
```

### Nested Arrays

Yo dawg, I heard you like arrays. A nested array is an array within an array,
sometimes called a multi-dimentional array.

You use stacked brackets to access the elements of the inner arrays.

```javascript
var myNestedArray = [["cats", 7], ["blue", "ducks"], [86, "lary", ["shark", "blueberry"]]];

console.log(myNestedArray[1][1]);
console.log(myNestedArray[2][2][1]);
```

* Console: "ducks" "blueberry"

### Appending to an Array

In javascript you can append items to an array with the .push() function.

```javascript
var myArray = ["cat", 7, "plant", 3.14];

myArray.push("penguin");

console.log(myArray);
```

### Removing the Last Item from an Array

You can use the .pop() function to remove an element from an array.

```javascript
var myArray = ["blah", "fart", "snart"];

var firstElm = myArray.pop();

console.log(myArray);
console.log(firstElm);
```

### Removing the First Item from an Array

We can use the .shift() function to remove the first element from an array.

```javascript
var myArray = ["blah", "fart", "snart"];

var firstElm = myArray.shift()

console.log(myArray);
console.log(firstElm);
```

### Prepend an Element to an Array

We can use the .unshift() function to prepend an element from an array.

```javascript
var myArray = ["blah", "fart", "snart"];

myArray.unshift("blarg");

console.log(myArray);
```

## Functions 

We can create reusable sections of code that can be called over an over again
whenever needed.

You can see the basic structure of a function in JS below.

```javascript
function myFunctionName(){
	console.log("Hi people!");
}

myFunctionName();
```

* Console: "Hi people!"

### Function Parameters

A parameter is a placeholder value for the variables that get passed to a
function.

```javascript
function myFunctionName(a, b){
    console.log("Hi " + a + "!\n" + "Go away " + b);
}

myFunctionName("Harry", "James");
```

### Functions and Variable Scope

Scope refers to the visibility of variables within a program. A variable
defined within the main body of the program has global scope meaning any
subfunctions of the program can access its value.

Whereas, if a var is definied within a function it can only be accessed by that
function.

```javascript
var myGlobal = "blah";

function myFunc1(){
	var myGlobal = "fart";
	console.log(myGlobal);
}

myFunc1();

function myFunc2(){
	console.log(myGlobal);
}

myFunc2();
```

You can see even though the value of myGlobal was changed when myFunc1() was
called it didn't matter to myFunc2 because myFunc1 did not change the global
value of myGlobal. It was only changed within the context or scope of myFunc1.

### Returning a Value from a Function

Like many other programming languages, functions in Javascript can return a
value using the `return` keyword.

```javascript
function minusSeven(num){
	return num - 7;
}

console.log(minusSeven(10));
```

### Implementing a Queue Function

A queue is an abstract data structure where elements get added to the end of an
array and removed from the front of it. As we've seen we can use the existing JS 
language functions to pretty easially implement a queue.

```javascript
function nextInLine(arr, item){
	arr.push(item);		// Append item
	return arr.shift();		// Snip 0th Element
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
```

* Console:

```
Before: [1,2,3,4,5]
1
After: [2,3,4,5,6]
```

## Booleans

Another fundamental datatype in javascript is the Boolean. Booleans are either
true or false. Its like an on / off switch. You can assign a variable to a
boolean value, functions can return booleans.

## Conditional Logic (If Statements)

Another fundamental programming construct in javascript is the conditional.
Conditional statements are if, else, & elseif statements just like any other
language. We can combine if statements with Booleans to great affect.

```javascript
function ourTrueOrFalse(isItTrue){
	if(isItTrue){
		return "Yes, it's true."
	}
	return "No, it's false.";
}

console.log(ourTrueOrFalse(true));
console.log(ourTrueOrFalse(false));

console.log(ourTrueOrFalse(1));
console.log(ourTrueOrFalse(0));
```

* Console:

```
Yes, it's true.
No, it's false.
Yes, it's true.
No, it's false.
```





























