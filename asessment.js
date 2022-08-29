/* Problem 1 */
/* Skill: Git
You want to grow a new branch from any commit. Identify the code you will use to swtich to "HEAD-5" and create a branch named 'testbranch'
*/
//YOUR CODE HERE
// git checkout HEAD-5
// git branch testbranch

/* Problem 2 */
/*Skill: React, API call  
You are creating an API that calls an application in ReactJS. The application allows the fetching of data from the following endpoint. 

API ENDPOINT: https://www.reddit.com/r/react.json

complete the code as per the given instructions:
*/

class APICaller extends React.Component {
  callApi() {
    //#1 Implement a fetch method with the given API ENDPOINT
    // YOUR CODE HERE
    fetch("https://www.reddit.com/r/react.json")
      .then((result) => {
        //#2 Return the result in json format
        //YOUR CODE HERE
        return result.json();
      })
      .then((jsonData) => {
        //#3 Print/log the jsonData in the console of the browser
        //YOUR CODE HERE
        console.log("data parsed!", jsonData);
      })
      .catch((e) => {
        console.log("error!", e);
      });
  }
  render() {
    return (
      <div>
        <button
          //#4 Implement an onCLick functionality to the button such that it calls the callApi() function when it is clicked.
          // YOUR CODE HERE
          onClick={() => this.callApi()}
        >
          Call the API now.
        </button>
      </div>
    );
  }
}
React.render(
  //#5 Implement the APICaller component appropiately into the render method
  //YOUR CODE HERE
  <APICaller />,
  document.getElementById("myapicaller")
);

/* Problem 3 */
/*Skill: recursion
Please write an explanation of recursive functions where your audience is a beginner learner with knowledge of basic JS functions.

Please write an example of a recursive function, and comment each line 
*/

/*EXPLANATION HERE (1 paragraph) */
// Recursion occurs when a function calls itself. It's an alternative to iteration (using a loop) and it's used all the time in programming.
// Recursion is often preferred over iteration when a recursive solution is cleaner/easier to read than an iterative solution and when it won't negatively affect performance that much.
// When writing recursive functions, it's important to first define a base case for when the recursion stops. If you don't, you'll get what's called a stack overflow - it's similar to an infinite loop where the function will keep calling itself forever until your computer runs out of memory. It's also important to define a recursive case where you change the input to the function so that the base case is eventually triggered.

function myRecursiveFunction(num) {
  //YOUR CODE WITH COMMENTS HERE

  // this is the base case
  if (num < 1) {
    // When the num becomes less than 1,
    console.log("Done!"); // "done" will be printed to the console. The recursive function will stop calling itself.
  }
  // this is the recursive case
  else {
    // as long as the num is greater than or equal to 1, print the num, then subtract the num by 1, and lastly call the recursive function and pass in the new num (old num - 1) as the argument.
    console.log(num);
    myRecursiveFunction(num - 1);
  }
}
myRecursiveFunction(3); // call the function and pass in 3 as the argument

/* Problem 4 */
/* Skill: algorithms 
Please write an explanation for an introduction to sorting algorithms. 
Write an example of Bubble Sort and comment each line of your code 
with explanation
*/

/* Sorting algorithms intro explanation HERE (1-2 paragraphs) */

// Sorting is the process of rearranging the items in a collection (i.e. an array) so that the items are in some kind of order. We can sort numbers from smallest to largest, sort names alphabetically, etc.
// There are many sorting algorithms (e.g. bubble, merge, quick, shell, heap, radix, selection, insertion, etc.) that we can use to sort items in a collection - each of the algorithms have their own advantages and disadvantages.
// Bubble sort is a sorting algorithm where the largest values bubble up to the top. It's not efficient and not commonly used in practice.

/*Bubble sort example HERE*/

// As we loop through each element in the array, we compare it to the next element - the one in front of it. We check if the current element is larger than the next element. If it is, we swap the elements. Rinse and repeat!
function bubbleSort(arr) {
  // This function accepts an array of nums
  for (let i = arr.length; i > 0; i--) {
    // our outer for-loop. It starts at the end of the array and moves towards the beginning.
    for (let j = 0; j < i - 1; j++) {
      // our inner for-loop. It starts at the beginning of the array and moves towards the end.
      if (arr[j] > arr[j + 1]) {
        // if arr[j] is greater than arr[j + 1]
        // swap those two values
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr; // return the sorted array.
}

console.log(bubbleSort([14, 3, 53, 11, 9, 22, 15, 90, 1])); // expected output: [1, 3, 9, 11, 14, 15, 22, 53, 90]

// The time complexity of bubble sort (worst-case) is O(N^2) because we have a nested loop and we're making N comparisons for each element in the array. The best case is O(N) if the list is already sorted or nearly sorted..
// The space complexity of bubble sort is O(1) because only a single additional memory space is required for the temp variable.

/* Problem 5 */
/*Skill: Leetcode Algorithms
solve the following leetcode in JavaScript: 

https://leetcode.com/problems/house-robber/


and paste your solution here. Please comment each line of your code to explain it, and be prepared to explain in the follow up interview.
*/

// dynamic programming approach
var rob = function (nums) {
  // edge cases

  if (nums.length === 0 || nums === null) return 0; // if there are no houses to rob, return 0.
  if (nums.length === 1) return nums[0]; // if only one house, rob that one house.
  if (nums.length === 2) return Math.max(nums[0], nums[1]); // if there are two houses to rob, rob the house with the higher value $.

  // if there are atleast 3 houses to rob..
  // start from index 2 (the third house) and loop from there.  We're tracking the total amount of money robbed so far.
  for (let i = 2; i < nums.length; i++) {
    nums[i] = Math.max(nums[i - 2] + nums[i], (nums[i - 3] || 0) + nums[i]);
  }
  return Math.max(nums[nums.length - 1], nums[nums.length - 2]); // Out of the final two numbers in the array (the 2 possible sums), return the larger number.
};

/* Problem 6 */
/*Skill: Leetcode Algorithms
solve the following leetcode in JavaScript: 

https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/

and paste your solution here. Please comment each line of your code to explain it, and be prepared to explain in the follow up interview.
*/

// divide and conquer approach
var longestSubstring = function (s, k) {
  let n = s.length;
  //edge cases
  if (n == 0 || n < k) return 0; // if the string is empty, OR if k is greater than the length of the string, return 0
  if (k <= 1) return n; // if k is less than or equal to 1, all of the characters are valid, so return n - the length of the string.

  // Store the number of times that each letter occurs.
  // if the letter only appears once in the string, set the value to 1. If it appears more than once, add 1 to the value every time we visit it again
  let lettersObj = {};
  for (let i = 0; i < s.length; i++) {
    lettersObj[s[i]] = lettersObj[s[i]] ? lettersObj[s[i]] + 1 : 1;
  }

  // if the values in the lettersObj (the number of times each letter appears in the string)

  // another edge case
  // if every letter in the string repeats K or MORE times, return the length of the string
  if (Object.values(lettersObj).every((val) => val >= k)) return s.length;

  // counter variables
  let longestSubStringFound = 0;
  let currentStart = 0;

  for (let i = 0; i < s.length; i++) {
    // if we've reached a breaking point -- the letter does not appear K times,
    if (lettersObj[s[i]] < k) {
      // find the longest valid substring of the current string and compare it with the longest substring we found so far
      longestSubStringFound = Math.max(
        longestSubstring(s.substr(currentStart, i - currentStart), k),
        longestSubStringFound
      );

      // Move onto the next character in the string;
      currentStart = i + 1;
    }
  }

  // Check if the current substring would have been the longest if a breaking point had been encountered
  longestSubStringFound = Math.max(
    longestSubstring(s.substr(currentStart), k),
    longestSubStringFound
  );

  return longestSubStringFound > 1 ? longestSubStringFound : 0;
};

/* Problem 7 */
/*Skill: SQL
Please fork and complete this SQL exercise: 
https://gist.github.com/harrisonmalone/e06ea120532e5cd323ef0b0b379fa4d6

LINK TO YOUR REPO HERE

Incomplete solution: 

*/

/* Problem 8 */
/*Skill: React
Explain state management and lifting state in React. Please include the difference between Redux and Context API. Your audience is a beginner learner with an understanding of React components, props and basic state. 

//Your explanation HERE

In React, keeping track of how your application data changes over time is called state management. There are a few ways to manage state, including component-based state management and third-party libraries like Redux.
It's important to consider where to store state data. You will often want multiple components to have access to the same data. That may mean lifting the state higher up in the component hierarchy. The state is usually lifted to the closest parent component until it gets to an ancestor common to the components that need the state, and then it is passed down.
Redux deals with changes of the state in a centralized manner. Conversly, Context API deals with them as they happen on the component level. Context API is great for sharing small pieces of state between components. Redux is much more powerful and provides a set of useful features that Context doesn't have. It's great for managing centralized state and handling API requests.
*/

/* Problem 9 */
/* 
Skill: Node/Express

How would you explain what Node and Express do to a beginner learner with no experience in server side programming?

Your explanation HERE (2 paragraphs)

Node is a JavaScript runtime environment that executes code outside of the browser. It enables us to use JavaScript syntax to write server-side code. Some potential use cases for Node include creating web servers for a full stack applications and building single-page applications.

Express is a popular framework for creating servers using Node. It's essentially a NPM package which comes with a bunch of methods and plugins that we can use to build web apps.
Express helps us quickly start up a server to listen for http requests, parse incoming http requests, and craft http responses. 
*/

/* Problem 10 */
/*Skill: JavaScript Objects + Classes
Complete instructions in the cardGame.js file
*/

class Card {
  constructor(suit, rank, value) {
    this.suit = suit;
    this.rank = rank;
    this.value = value;
  }
}

class Deck {
  constructor() {
    this.cards = [];
  }

  createCards() {
    const suits = ["diamonds", "hearts", "spades", "clubs"];
    const ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < ranks.length; j++) {
        this.cards.push(new Card(suits[i], ranks[j], values[j]));
      }
    }
  }
  selectRandomCard() {
    let randomElement = Math.floor(Math.random() * this.cards.length);
    return this.cards[randomElement];
  }
}

// first deck
let firstDeck = new Deck();
firstDeck.createCards();

// second deck
let secondDeck = new Deck();
secondDeck.createCards();

function compareCardObjects(deck1, deck2) {
  // random card object in deck1
  let randomCardObjInFirstDeck = deck1.selectRandomCard();
  console.log(randomCardObjInFirstDeck);

  // random card object in deck2
  let randomCardObjInSecondDeck = deck2.selectRandomCard();
  console.log(randomCardObjInSecondDeck);

  // if the value of the card obj in the first deck is MORE than the value of the card obj in the second deck...
  if (randomCardObjInFirstDeck.value > randomCardObjInSecondDeck.value) {
    console.log("The random card in the first deck has the higher value!");

    // if the value of the card obj in the first deck is LESS than the value of the card obj in the second deck...
  } else if (randomCardObjInFirstDeck.value < randomCardObjInSecondDeck.value) {
    console.log("The random card in the second deck has the higher value!");

    // if the cards in both decks have the same value...
  } else {
    console.log("The random cards in both decks have the same value!");
  }
}

compareCardObjects(firstDeck, secondDeck);
