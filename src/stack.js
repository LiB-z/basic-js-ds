const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  push(el) {
    this[Object.keys(this).length] = el;
  }

  pop() {
    let result = this[Object.keys(this).length-1]
    delete this[Object.keys(this).length-1]
    return  result
  }

  peek() {
    return this[Object.keys(this).length-1]
  }
}

module.exports = {
  Stack
};

