/**
 * @name Palindrome
 * a word which has the same spelling when spelt backwards as the initial
 * @example bob, racecar
 * @param {*} word
 */
function palindrome(word) {
    if (!word) {
      return false;
    }
  
    const initialWord = [];
    let reverseOrderSpelling = "";
  
    for (const eachLetter of word) {
      initialWord.push(eachLetter);
    }
  
    // reverse order
    for (let i = 0; i < word.length; i++) {
      reverseOrderSpelling += initialWord.pop();
    }
  
    return word == reverseOrderSpelling
      ? console.log(`The word ::${word}:: is a palindrome`)
      : console.log(`${word} is NOT a palindrome`);
  }
  
  // palindrome('bo1b');
  
  /**
   * js stack implementation
   */
  const Stack = function () {
    this.count = 0;
    this.storage = {};
  
    // add a value to the end of the stack
    this.push = function (value) {
      this.storage[this.count] = value;
      this.count++;
    };
  
    // remove an element from the stack
    this.pop = function () {
      if (this.count == 0) {
        return undefined;
      }
  
      // decrement the length by 1
      this.count--;
      // get the value at the last position of storage
      const result = this.storage[this.count];
      // delete the element and return the result
      delete this.storage[this.count];
      return result;
    };
  
    // get the size
    this.size = function () {
      return this.count;
    };
  
    // peek , returns value at the end of the stack
    this.peek = function () {
      return this.storage[this.count - 1];
    };
  };
  
  // stacks
  // const myStack = new Stack();
  // myStack.push(1);
  // myStack.push(3);
  // myStack.push(8);
  // myStack.push(2);
  // myStack.pop(1);
  // console.log(myStack.peek());
  
  /**
   *  sets, an array of unique elements (no duplicates)
   * has, values, add, remove, union, intersection, subset, difference 
   */
  
  function mySet() {
    // an array to hold elements of the set
    const setArray = [];
  
    // is the value already part of the array
    this.has = function (val) {
      return setArray.indexOf(val) !== -1;
    };
  
    // get the values of the array
    this.values = function () {
      return setArray;
    };
  
    // add, only if element is not already included
    this.add = function (val) {
      if (!this.has(val)) {
        setArray.push(val);
        return true;
      }
  
      return false;
    };
  
    // remove , if its include, get the index and remove
    this.remove = function (val) {
      if (this.has(val)) {
        const index = setArray.index(val);
        setArray.splice(index, 1);
        return true;
      }
  
      return false;
    };
  
    this.size = function () {
      return setArray.length;
    };
  
    // union of two set
    this.union = function (otherSet) {
      const finalSet = new mySet();
      const thisSet = this.values();
      const otherSett = otherSet.values();
  
      otherSett.forEach((element) => {
        finalSet.add(element);
      });
  
      thisSet.forEach((element) => {
        finalSet.add(element);
      });
  
      return finalSet;
    };
  
    // intersection of sets
    this.intersection = function (otherSet) {
      const intersection = new mySet();
      const thisSet = this.values();
     
  
      thisSet.forEach((element) => {
        if (otherSet.has(element)) {
          intersection.add(element);
        }
      });
  
      return intersection;
    };
  
    // difference of 2 set
    this.difference = function (otherSet) {
      const diff = new mySet();
      const thisSet = this.values();
     
  
      thisSet.forEach((element) => {
        if (!otherSet.has(element)) {
          diff.add(element);
        }
      });
  
      return diff;
    };
  
    // subset , is set A completely in setB
    this.subset = function (setB) {
      const setA = this.values();
  
      return setA.every(function (v) {
        return setB.has(v);
      });
    };
  }
  
  const aSet = new mySet();
  const bSet = new mySet();
  aSet.add(1);
  aSet.add(2)
  bSet.add(1)
  bSet.add(3)
  console.log(aSet.values(), bSet.values())
  console.log(`values of set ${bSet.union(aSet).values()}`);
  