# Recursion Simple

## What is this?

This is a very gentle introduction to recursion. 

## Why make this?

For some programmers (like me) recursion is very difficult to grapple with. So it can be useful to provide the simplest possible version of it so that a brain can build back from that point when needed.

## How do I use this?

- Read the code
- Open the browser (`index.html`)
- Observe the output in the console

## Simple Recursion

Recursion in programming is the act of a function calling itself. This action is an expensive and dangerous one to be certain. Take the following snippet of code which uses recursion.

```javascript
/*1*/ const y = () => y() 
/*2*/ y()
```

Before reading on think about what the code will do.

On line 2 of the example when the code is invoked the main thread will push an unfinished `y` function onto the stack of commands to execute. Then the body of the `y` function will begin execution. The first command in the `y` function is to call the `y` function. So before the first call to the `y` function completes a second call to `y` is added to the call stack. Now inside the body of the second call to the `y` function the first command is to call the `y` function. :cyclone:

Feel dizzy yet. 

However with this power also comes a certain degree of elegance and power. The key to any recursive call is providing a mean by which the function will return something besides a call to itself and ensure that at all time the program is looking for this exit condition. For example take a look at the following code which uses recursion.

```javascript
/*1*/ const y = (n) => n <= 0 ? `countdown complete n: ${n}` : y(n-3) 
/*2*/ y(10)
```

The code above will count backward from a given number by a guven numer (`n`) __until__ that number is at least zero at which point it will return a string containing the current value of `n` all the way the call stack.
