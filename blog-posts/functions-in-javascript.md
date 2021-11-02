---
title: Functions in JavaScript
excerpt: Functions in JavaScript
coverImage:
  url: /assets/blog/functions-in-javascript/cover.jpg
  alt: Functions in JavaScript
  title: Photo by <a href="https://unsplash.com/@julianhochgesang?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Julian Hochgesang</a> on <a href="https://unsplash.com/s/photos/rust?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
date: "2021-11-02T17:12:00Z"
author:
  name: Pijush Barik
  picture: /assets/blog/authors/pijush-barik.jpeg
  twitter: "pijushbarik"
tags:
  - Functions
  - JavaScript
meta:
  title: Functions in JavaScript
  keywords:
    - functions in javascript
    - javascript
    - functions
    - first class functions
    - function declaration
    - function statement
    - arrow functions
    - blog
  ogImage: /assets/blog/functions-in-javascript/cover.jpg
---

Functions in JavaScript are so much powerful. There are varieties of ways to define and declare a function in JavaScript. Based on definitions
and declarations, function behaves differently.

## Function declartion or a function statement

In JavaScript, a function declarations and a function statement is identical. Just like a variable declaration must start with `var`, a function
declaration must start with `function`. A function declaration tells JavaScript, about that function's name, return type and parameters.

```javascript
// function declaration
function say(something) {
  console.log(something);
}

// we can invoke the function
say("Hello");
```

The above code declares a function named `say` with parameter `something`, and has a return type of `void` (returns nothing). When a function has been
declared, it can be accessed/called/invoked from anywhere in the scope where it has been declared.

## Function expression

#### First thing first. What is the difference between an expression and a statement?

An expression is something that produces a value. For example, `2 + 3` is an expression, and it produces a value `5`. An expression may contain arithmetic
operators, boolean operators, function call (`()`) operator.
In the other hand, a statement is anything that makes a complete line of a code (which can be compared to a complete sentence in a language). For example
`let five = 2 + 3;` is a statement and it's a complete line of a valid code. A point to note is that, expressions are a part of a statement. So, expressions
are like words and one or more word(s) builds up a sentence i.e., a statement.

#### Now, what is a function expression then?

In JavaScript, along with declaring a function, we can assing that function to a variable, and that is a function expression. A function expression is similar
to any other variable assignment. When a function expression is assigned to a variable or used inside another expression, it creates a complete JavaScript
statement.

```javascript
var a = 10; // variable declaration and assignment
// function expression
var saySomething = function (something) {
  console.log(something);
};

console.log(a);
// we can invoke the saySomething function same way
saySomething();
```

Just like we access the variable `a`, we can access the variable `saySomething` same way (since, it's an function, we call it). In this example,
the part `function (something) { console.log(something); }` is an expression. We are assigning the reduced value of that expression to the variable
`saySomething`, and that makes it a statement. In function expression, we create a anonymous function (a function with no name) and assigns to a
variable.

## First-class function

If a programming language can treat a function just like any other variables, we say that the programming langugae have <b>First-class functions</b>.
JavaScript treats functions as fist-class function, and that's what makes JavaScript so poerful in terms of function usages. In the function expression
section, we saw that we are creating a function expression and assigned to a variable. Just like accessing another variables, we can invoke that function
with that variable with adding `()` at the end. We also can pass a function as a argument to another function, return a function from a function.

```javascript
//
// Example of passing function as an argument
//
function saySomething(something) {
  console.log(something);
}

function sayHelloTo(name, say) {
  say(`Hello ${name}`); // we can call `say` from here
}

sayHelloTo("Ray", saySomething); // we passed `saySomething` function as an argument to `sayHelloTo`

// Output: Hello Ray
```

```javascript
//
// Example of returning a function from a function
//
function addFiveTo(x) {
  return function () {
    // returning a function from `addFiveTo` function
    return x + 5;
  };
}

const adder = addFiveTo(10);
console.log(adder());

// Output: 15
```

## Arrow function

JavaScript introduced Arrow functions in ES5 syntax. An arrow function is defined like this,

```javascript
const f = () => {
  // function body
};

f(); // just like we invoke other functions
```

Arrow functions are a syntactic sugar or a kind of shorthand of writing functions in JavaScript. If we can see closely, we can see similarities between the
arrow function and a function expression, except the function keyword and some other syntax. This part `() => {}` is an expression of an anonymous function
and same as `function () {}`. So, an arrow function is also a function expression but with a different syntax.

```javascript
// Function expression
const f1 = function () {
  console.log("Function expression");
};

const f2 = () => {
  console.log("Arrow function");
};
```

#### Arrow function returns by default

An arrow functions returns the evaluated value from an expression when the function is not wrapped with the function block (`{ ...function body goes here }`).

```javascript
const sum1 = function (x, y) {
  return x + y; // we need an explicit return statement if we want to return something from a regular function
};

const sum2 = (x, y) => x + y; // we don't need any return statement to return something from an arrow function

const sum3 = (x, y) => {
  return x + y; // when wrapped inside a function block if we want to return something we must explicitely write a return statement
};
```

Unlike regular functions, arrow functions has it's limitations on its scope and it does not have its own bindings to `this` or `super`, and should not be used as
class methods.
