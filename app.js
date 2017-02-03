//var synth = window.speechSynthesis;
//var voices = synth.getVoices();
//var utterThis = new SpeechSynthesisUtterance('It is a lovely day tomorrow');
//utterThis.voice = voices[0];
//synth.speak(utterThis);

// Syntax parser: transform js to machine code
// Lexical Enviroonment: *where* something is written, matters.
// Execution Context: a wrapper that help manage the code that is running.
// Object: name : value pair, can be tree-like
// Global: not inside a function

// this = window; inside global execution context, also for empty js.

//b(); // works, functions not 
//console.log(a); // undefined
//var a = 1;
//function b() {
//    console.log('Called b');
//}

// Hoisting: during lexical parsing of file, sets up memory space for vars and functions, before my code file is executed from top to bottom. Do not rely on hoisting!
//var a = 1;  // var a = undefined; var a hoisted/set to undefined
//function b() {  // hoisted entirely into memory space
//    this.c = true; // code parsed, but not runned
//}

// Hoisting and undefined
//var a;
//console.log(a); // works --it is just undefined
// but if you never set 'var a;', just console.log(a), is gets a ReferenceError. Engine did not see a 'var a' keyword, so it never set up the memory for a, and that will fail.

// JS is single threaded and synchronous. Perhaps not under the hood of the browser, but for us as programmers it is.

// Invocation, is running a function. In JS this is done by ()
//function foo() {};
//foo();


// Execution Context -- stacking
//function b() {
//}
//function a() {
//}                       
//a();          
/**
    1. Create global EX
    2. Create a() EX and execute code
    3. Create b() EX and execute code
    4: Pops off b() EX after b() is done
    5. Pops off a() EX after a() is done
    
    Lexically where the functions are does not matter!
    
    Whenever a functions is invoked, a new EC is created and put on top of the stack. It does not matter if it is recusivly og itself.
**/

// Scope Chain
function b() {
    /** Will output 1, because all functions has a reference to its outer environment, and since the *lexical environment* of b() is the global environment it will find the myVar = 1 when it goes out and look for it in
    the execution context stack. b() is lexically in the global environment! 
    Also if I put b() inside a() the result is 2. And if I did not declare myVar in a(), the inside b() will look at its outer environment that is now a, not finding it, going up the scope chain and finding it in the global, which will return 1.
    Another way if saying this is who 'created me'.
    **/
    console.log(myVar);
}
function a() {
    var myVar = 2;
    b();
}

var myVar = 1;
a();













