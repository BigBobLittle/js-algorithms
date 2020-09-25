printToConsole = (inputWord) => {
  if (!inputWord) {
    console.log("please provide a word to test");
    return false;
  }
};

/**
 * @name palindrome
 * @description palindrome is a word that has same spelling, from left ⬅️ right / right ➡️ left
 * @param {*} inputWord
 * @example `bob`, `racecar`, `madam`
 */
exports.palindrome = (inputWord) => {
  if (!inputWord) {
    console.log("please provide a word to test your palindrome");
    return false;
  }

  // push each character of the input word  in an array  [left ➡️ right ]
  const dummyArray = [];
  for (const eachCharacter of inputWord) {
    dummyArray.push(eachCharacter);
  }

  // print the characters into a word [right ⬅️ left], reverse order
  let reverseOrderSpelling = "";
  for (let i = 0; i < inputWord.length; i++) {
    reverseOrderSpelling += dummyArray.pop();
  }

  // check if reverseOrder is same as initial order
  return reverseOrderSpelling.toLocaleLowerCase() ==
    inputWord.toLocaleLowerCase()
    ? console.log(`${inputWord.toUpperCase()}  is a palindrome`)
    : console.log(`${inputWord.toUpperCase()}  is NOT a palindrome`);
};

/**
 * @name isPrime
 * @description check if a given number is a prime(divisible by itself and 1)
 * @param {} inputWord
 * A prime number is a natural number greater than 1 that cannot be formed by multiplying
 *  two smaller natural numbers. A natural number greater than 1 that is not prime is called 
 * a composite number. For example, 5 is prime because the only ways of writing
 *  it as a product, 1 × 5 or, involve 5 itself.
 */

exports.isPrime = (inputWord) => {
  printToConsole(inputWord);
  let divisor = 2;

  while (inputWord > divisor) {
    if(inputWord % divisor == 0){

      console.log(`${inputWord} is NOT a prime number ❌` )
      return false;
    }else{
      divisor++; 
    }
  
  }

  console.log(`${inputWord} IS A a prime number 🎈` )
  return true;
};

/**
 * other factors to consider for prime numbers 
 * 1. all prime numbers cannot be divisible by any number  > half of its original self, [except for 2], which means we can prevent 50% of our loop
 * 2. 2 is the smallest prime number, and the only even prime number 
 * step-1: Any number will not be divisible by a number bigger than half of it. for example, 13 will never be divisible by 7, 8, 9 .. it could be as big as half of it for even number. for example, 16 will be divisible by 8 but will never be by 9, 10, 11, 12...
Decision: a number will never be divisible by a number bigger than half of its values. So, we dont have to loop 50%
step-2: Now, if a number is not divisible by 3. (if it is divisible by 3, then it wouldn't be a prime number). then it would be divisible any number bigger than the 1/3 of its value. for example, 35 is not divisible by 3. hence it will be never divisible by any number bigger than 35/3 will never be divisible by 12, 13, 14 ... if you take an even number like 36 it will never be divisible by 13, 14, 15
Decision: a number could be divisible by numbers 1/3 of its value.
step-3: For example u have the number 127. 127 is not divisible by 2 hence you should check upto 63.5. Secondly, 127 is not divisible by 3. So, you will check up to 127/3 approximately 42. It is not divisible by 5, divisor should be less than 127/5 approximately 25 not by 7. So, where should we stop?
Decision: divisor would be less than Math.sqrt (n)
 */

 exports.isAdvancedPrime = (inputWord) => {
   printToConsole(inputWord);

   let divisor = 3;
   let squareRoot = Math.sqrt(inputWord);
   if(inputWord == 2 || inputWord == 3){
     return true; 
   } 
  
   if(inputWord % 2 == 0){
     return false; 
   }
  
   while(divisor <= squareRoot){
      if(inputWord % divisor == 0){
        return false; 
      }else{
        divisor += 2;
      }
   }

   return true; 
  
  }

/**
 *  A Prime Number is: a whole number greater than 1 that can not be made 
 * by multiplying other whole numbers. The first few prime numbers
 *  are: 2, 3, 5, 7, 11, 13, 17, 19 and 23,
 */