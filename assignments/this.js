/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.

* 1. 
Window Binding refers to how this is the global context whenever a function is invoked
 without any of these other rules. 
 
If we aren't using a dot and we aren't using call(), apply(), or bind(), our this will be our global object.
If I am in the browser, this will be the Window

* 2. 
Implicit binding occurs when dot notation is used to invoke a function.
In implicit binding, whatever is to the left of the dot becomes the context for this in the function.

* 3. 
New Binding, this keyword is referencing is called the new binding. 
Whenever the function is invoked with the new keyword, 
the JavaScript will create a brand new object and call it this. 
So if a function was called with new, the this keyword is referencing 
that new object that the javascript created.


* 4. 
Explicit binding of this occurs when .call(), .apply(), or .bind() are used on a function.
We call these explicit because you are explicitly passing in a this context to call() or apply(). 


* write out a code example of each explanation above
*/

// Principle 1
//====== Window Binding ======//
// code example for Window Binding

console.log(this);



//Principle 2
//====== Implicit Binding ======//
//code example for Implicit Binding

const jungle = {
  greeting: 'Hello',
  sayHello: function (name) {
    console.log(`${this.greeting} my name is ${name}`);
    console.log(this);
  }
};
jungle.sayHello('Tarzan');



// Principle 3
//====== New Binding ======//
// code example for New Binding


function Major(greeter) {
  this.greeting = 'Hello ';
  this.greeter = greeter;
  this.speak = function () {
    return console.log(this.greeting + this.greeter);

  };
}

const mozart = new Major('Bach');
const bach = new Major('Mozart');

mozart.speak();
bach.speak();




// Principle 4
//====== Explicit Binding ======//
// code example for Explicit Binding
const person = {
  name: "Jill"
}

const person2 = {
  name: "Richard"
}

const person3 = {
  name: "Anthony"
}



function introduce(skill1, skill2, skill3) {
  return `Hello! My name is ${this.name} and my skills are ${skill1}, ${skill2} and ${skill3}`;
}

console.log(introduce.call(person3, "skating", "sailing", "running"));

const jillSkills = ["Singing", "Carpentry", "Bakery"];
console.log(introduce.apply(person, jillSkills));

console.log(introduce.bind(person2, "taking a walk", "reading books", "spiritual things")());