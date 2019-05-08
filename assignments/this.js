/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
Window Binding refers to how this is the global context whenever a function is invoked
 without any of these other rules. 
 
If we aren't using a dot and we aren't using call(), apply(), or bind(), our this will be our global object.
If I am in the browser, this will be the Window

* 2. 
Implicit binding occurs when dot notation is used to invoke a function.
In implicit binding, whatever is to the left of the dot becomes the context for this in the function.

* 3. 



* 4. 
Explicit binding of this occurs when .call(), .apply(), or .bind() are used on a function.
We call these explicit because you are explicitly passing in a this context to call() or apply(). 

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayName(name) {
    console.log(this);
    return name;
  }
  sayName("D'Artagnan");





// Principle 2

// code example for Implicit Binding

const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  myObj.sayHello('Ryan');

// Principle 3

// code example for New Binding

function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const jerry = new CordialPerson('Newman');
  const newman = new CordialPerson('Jerry');
  
  jerry.speak();
  newman.speak();

// Principle 4

// code example for Explicit Binding
 
const mickey = new CordialPerson('Newman');
const rocky = new CordialPerson('Jerrry');

mickey.speak.call(newman);
rocky.speak.apply(jerry);

rocky.speak();
mickey.speak();
  