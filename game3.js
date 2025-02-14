"use strict";
// import * as readlineSync from "readline-sync";
Object.defineProperty(exports, "__esModule", { value: true });
// let questions: { question: string, answer: string }[] = [];
// let highScores: { name: string, score: number }[] = [];
// console.log("\n=== Quiz Game ===");
// console.log("1. Play Quiz");
// console.log("2. Add a Question");
// console.log("3. View All Questions");
// console.log("4. Delete a Question");
// console.log("5. View High Scores");
// console.log("6. Exit");
// const choice = readlineSync.questionInt("Enter a Choice (1-6): ");
// if (choice === 1) {
//   console.log("2 + 2 is: ");
//   console.log("1", "2", "3", "4");
//       //  console.log("What is the capital of France?") 
//       //  console.log("Paris", "London", "Berlin", "Madrid")
//       //   // "Paris"
//   const answer = readlineSync.question("Enter Your Answer: ");
//   if (answer === "4" && "Paris") {
//     console.log("You are right! You win!");
//     let score = 10;
//     console.log("Your score: ", score);
//   } else {
//     console.log("Worng! It is wormg Answer.");
//   }
// } else if (choice === 2) {
//   console.log("Add a Question");
//   let userQuestion = readlineSync.question("Enter your new question: ");
//   let userAnswer = readlineSync.question("Enter the correct answer: ");
//   questions.push({ question: userQuestion, answer: userAnswer });
//   console.log("Question added successfully!");  
// } 
// else if (choice === 3) {
//   console.log("View All Questions");
//   if (questions.length === 0) {
//     console.log("No questions available.");
//   } 
//   else {
//     questions.forEach((val, index) => {
//       console.log(`${index + 1}. ${val.question} (Answer: ${val.answer})`);
//     });
//   }
// }
// else if (choice === 4) {
//   console.log("Delete a Question");
//   const index = readlineSync.questionInt("Enter the question number to delete: ") - 1;
//   if (index >= 0 && index < questions.length) {
//     questions.splice(index, 1);
//     console.log("Question deleted successfully!");
//   } else {
//     console.log("Invalid question number.");
//   }
// }
//  else if (choice === 5) {
//   console.log("View High Scores");
//   // Handle high scores display here
// } 
// else if (choice === 6) {
//   console.log("Exiting the game...");
// } 
// else {
//   console.log("Invalid option. Please choose a valid option (1-6).");
// }
var readlineSync = require("readline-sync");
var questions = [
    {
        question: "What is 2 + 2?",
        options: ["1", "2", "3", "4"],
        answer: "4"
    },
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Saturn", "Mars"],
        answer: "Jupiter"
    }
];
// for(let i  = 0; i < questions.length; i++){
//   console.log(questions[i]);
// }
// questions.forEach((val, index) => {
//   console.log(`Question${index + 1}. ${val.question} (Answer: ${val.answer})`);
// });
console.log("\n=== Quiz Game ===");
console.log("1. Play Quiz");
console.log("2. Add a Question");
console.log("3. View All Questions");
console.log("4. Delete a Question");
console.log("5. View High Scores");
console.log("6. Exit");
var choice = readlineSync.questionInt("Enter a Choice (1-6): ");
switch (choice) {
    case 1:
        var score = 0; // Initialize score for the quiz session
        // Loop through each question in the array
        for (var i = 0; i < questions.length; i++) {
            var newQuestion = questions[i];
            console.log(newQuestion.question);
            console.log(newQuestion.options.join("  ")); // Display options
            var answer = readlineSync.question("Enter Your Answer: ");
            if (answer === newQuestion.answer) {
                console.log("You are right! You win!");
                score += 10; // Increase score for correct answer
            }
            else {
                console.log("Wrong! It is the wrong answer.");
            }
        }
        console.log("Your final score: ", score);
        break;
    // Add a Question
    case 2:
        console.log("Add a Question");
        var userQuestion = readlineSync.question("Enter your new question: ");
        var option_1 = readlineSync.question("Enter option 1: ");
        var option_2 = readlineSync.question("Enter option 2: ");
        var option_3 = readlineSync.question("Enter option 3: ");
        var option_4 = readlineSync.question("Enter option 4: ");
        var userAnswer = readlineSync.question("Enter the correct answer: ");
        questions.push({
            question: userQuestion,
            options: [option_1, option_2, option_3, option_4],
            answer: userAnswer
        });
        console.log("Question added successfully!");
        break;
    // View all Questions
    case 3:
        console.log("View All Questions");
        if (questions.length === 0) {
            console.log("No questions available.");
        }
        else {
            questions.forEach(function (val, index) {
                console.log("Question".concat(index + 1, ". ").concat(val.question, " (Answer: ").concat(val.answer, ")"));
            });
        }
        break;
    // Delete a Question
    case 4:
        console.log("Delete a Question");
        var index = readlineSync.questionInt("Enter the question number to delete: ") - 1;
        if (index >= 0 && index < questions.length) {
            questions.splice(index, 1);
            console.log("Question deleted successfully!");
        }
        else {
            console.log("Invalid question number.");
        }
        break;
    case 5:
        console.log("View High Scores");
        // You can implement logic for displaying high scores here
        break;
    case 6:
        console.log("Exiting the game...");
        break;
    default:
        console.log("Invalid option. Please choose a valid option (1-6).");
        break;
}
