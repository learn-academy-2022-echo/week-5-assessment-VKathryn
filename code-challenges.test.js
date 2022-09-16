// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// PC: create a function that takes in a string, maps through the string, identifies the values asked for and replaces them with the alternate values provided.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe("codeWord", () => {
    it("Takes in a string and replaces the identified words", () => {
      expect(codeWord(secretCodeWord1)).toEqual(`L4ck4d41s1c4l`);
      expect(codeWord(secretCodeWord2)).toEqual(`G0bbl3dyg00k`);
      expect(codeWord(secretCodeWord3)).toEqual(`3cc3ntr1c`);
    });
  });

//   ReferenceError: codeWord is not defined
// b) Create the function that makes the test pass.

    const codeWord = (str) => {
        let dictionary = {"a": 4, "A": 4, "e": 3, "E":3, "i": 1, "I": 1, "o": 0, "O": 0}
        const transform = letter => dictionary.hasOwnProperty(letter) ? dictionary[letter] : letter 
    return str.split('').map(transform).join('')
    }


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// PS: create a function that takes in an array of words, and one letter, map through the array, use includes() method, and use if/else statement to return the string if it returns true, put into new array Use .filter to remove the elements that don't belong. 

// a) Create a test with expects statement using the variable provided.

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

describe("fruitArr", () => {
    it("Takes in an array and returns an array of the words that include a letter identified", () => {
      expect(fruitArr(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"]);
      expect(fruitArr(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"]);
    });
  });

// //   ReferenceError: fruitArr is not defined
// // b) Create the function that makes the test pass.

// const fruitArr, takes in Array and letter, returns new array created by using .filter to sort through fruitArr & return only the words that contain the letter in upper or lowercase.

// const fruitArr = (fruitArray, value) => {
//     newArr = []
//     if fruitArray.includes(value) == true
//      newArr.push()

// }
// const fruitArr = (fruitArray, value) => {
//     let dictionary = {"a": 4, "A": 4, "e": 3, "E":3, "i": 1, "I": 1, "o": 0, "O": 0}
//     const transform = letter => dictionary.hasOwnProperty(letter) ? dictionary[letter] : letter 
// return str.split('').map(transform).join('')
// }

const fruitArr = (array, letter) => {
    let newArr = array.filter(word => word.includes(letter) || word.includes(letter.toUpperCase()));
    return newArr
}

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// PC: Input will be an array, and output will be a boolean value. Check for number of unique elements, check for number of unique elements in array, if not 2 return false, if 2, check how many of each values is contained in the array, if not 1 for either element, return true


// a) Create a test with expect statements using the variable provided.

describe("fullHouse", () => {
    it("determines if the array contains a full house", () => {
      expect(fullHouse(hand1)).toEqual(true);
      expect(fullHouse(hand2)).toEqual(false);
      expect(fullHouse(hand3)).toEqual(false);
      expect(fullHouse(hand4)).toEqual(true);
    });
  });

//   ReferenceError: fullHouse is not defined

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// b) Create the function that makes the test pass.

// // this tells us which unique values are present, a full house must have TWO values

// PC Function fullHouse takes in an array, use Set.size to determine number of values present, if more than 2 are present return false, create a variable with .sort to put values in order, then use if/else conditionals to further clarify that in order to return true, the first two values must equal each other while the final three values equal each other, OR the first three values equal each other and the final two values equal each other. 

const fullHouse = (array) => {
    const uniqueCount = new Set(array).size
    const sortArray = array.sort()
    if (uniqueCount !== 2) {
        return false
    }  else if (sortArray[0] === sortArray[1] && sortArray[2] === sortArray[3] && sortArray[3] === sortArray[4]){
        return true
    } else if (sortArray[0] === sortArray[1] && sortArray[1] === sortArray[2] && sortArray[3] === sortArray[4]){
            return true
    } else { 
        return false
    }
} 

// const fullHouse = (array) => {
//     array.map((a, v, i) => {
//         // let a = 0
//         // (v === val ? a + 1 : a)
//         console.log(v === a[i])
//         // if a[i]
//         return array
//     })
// }

// console.log(fullHouse);

// // this counts how many (.size only works on Set!)
// const uniqueCount = new Set(hand1).size;
// if (uniqueCount !== 2) {
//     return false }  
// else {
//     return true
//     }

    // console.log(uniqueCount)

    