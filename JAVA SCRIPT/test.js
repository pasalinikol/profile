
// Exercise: FizzBuzz
// Task: Write a function called fizzBuzz that takes an integer n as an argument. The function should print the numbers from 1 to n. 
// However, for multiples of three, it should print "Fizz" instead of the number, and for the multiples of five, it should print "Buzz". 
// For numbers which are multiples of both three and five, it should print "FizzBuzz".

// Instructions:

// Create a function named fizzBuzz.
// Use a loop to iterate from 1 to n.
// Use conditional statements to check if the current number is divisible by 3, 5, or both.
// Print "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for multiples of both 3 and 5.
// If a number is not a multiple of either 3 or 5, print the number itself.


n=1

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) { // loop from 1 to n, for statement for easier looping, plus incerment
        if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz")
        else if (i % 3 === 0) console.log("Fizz") // if divisible by 3, returns 3 if i divided by 3 has no remainder
        else if (i % 5 === 0) console.log("Buzz") // if divisible by 5
        else console.log(n); // if not divisible by 3 or 5, print the number itself
        }
    }

fizzBuzz(n)