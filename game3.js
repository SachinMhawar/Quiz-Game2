"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var Questions = [
    {
        question: "What is 2 + 2?",
        options: ["1", "2", "3", "4"],
        answer: "4",
        hint: "It's the first even number after 0.",
    },
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris",
        hint: "It's known for the Eiffel Tower.",
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Saturn", "Mars"],
        answer: "Jupiter",
        hint: "It's the fifth planet from the sun.",
    },
    {
        question: "What is the full form of SQL",
        options: ["Structured Query Language", "Simple Query Language", "Sequential Query Language", "Synchronous Query Language"],
        answer: "Structured Query Language",
        hint: "It's used to interact with databases.",
    },
];
// create a array to store the name and score to the user
var highScores = [];
function startGame() {
    console.log("Start a Quiz Game");
    console.log("\n=== Quiz Game ===");
    console.log("1. Play Quiz");
    console.log("2. Add a Question");
    console.log("3. View All Questions");
    console.log("4. Delete a Question");
    console.log("5. View High Scores");
    console.log("6. Exit");
    var choice = readlineSync.questionInt("Enter your  Choice (1-6): ");
    switch (choice) {
        // Play Game
        case 1:
            var score = 0;
            for (var i = 0; i < Questions.length; i++) {
                var newQuestion = Questions[i];
                console.log(newQuestion.question);
                var userHint_1 = readlineSync.question("Do you want a hint? (yes/no): ");
                if (userHint_1 === "yes") {
                    console.log("Hint:   ".concat(newQuestion.hint));
                }
                else {
                    console.log("Okey you can Do it");
                }
                console.log(newQuestion.options.join("  "));
                var answer = readlineSync.question("Enter Your Answer: ");
                if (answer === newQuestion.answer) {
                    console.log("You are right! You win!");
                    score += 10;
                }
                else {
                    console.log("Wrong Answer!");
                }
            }
            console.log("Your final score: ", score);
            // Create a Variable to save your Score
            var playerName = readlineSync.question("Enter your name to save  your score: ");
            highScores.push({ name: "", score: 0 });
            console.log("Score Save");
            break;
        // Add Question Manually
        case 2:
            console.log("Add a Question");
            var userQuestion = readlineSync.question("Add a new question: ");
            var option_1 = readlineSync.question("Enter option 1: ");
            var option_2 = readlineSync.question("Enter option 2: ");
            var option_3 = readlineSync.question("Enter option 3: ");
            var option_4 = readlineSync.question("Enter option 4: ");
            var userAnswer = readlineSync.question("Enter the correct answer: ");
            var userHint = readlineSync.question("Enter a hint for the question: ");
            Questions.push({
                question: userQuestion,
                options: [option_1, option_2, option_3, option_4],
                answer: userAnswer,
                hint: userHint,
            });
            console.log("Question added successfully!");
            break;
        // View All Question (all question on the output to decalre array in object)
        case 3:
            console.log("View All Questions");
            if (Questions.length === 0) {
                console.log("No questions available.");
            }
            else {
                Questions.forEach(function (val, index) {
                    console.log("Question ".concat(index + 1, ": ").concat(val.question, " (Answer: Hidden)"));
                    console.log("Hint: ".concat(val.hint));
                });
            }
            break;
        // Delete a Question (Array of Object)
        case 4:
            console.log("Delete a Question");
            var arrIndex = readlineSync.questionInt("Enter the question number to delete: ") - 1; // -1 Means: (0 index + -1)
            if (arrIndex >= 0 && arrIndex < Questions.length) {
                Questions.splice(arrIndex, 1);
                console.log("Question deleted successfully!");
            }
            else {
                console.log("Invalid question number.");
            }
            break;
        // View High Score (After the game Ending!)
        case 5:
            console.log("View High Scores");
            if (highScores.length === 0) {
                console.log("No high scores available.");
            }
            else {
                console.log("High Scores:");
                highScores.forEach(function (obj, index) {
                    console.log("".concat(index + 1, ". ").concat(obj.name, " - Score: ").concat(obj.score));
                });
            }
            break;
        // Exit  the Game
        case 6:
            console.log("Exit the game...");
            break;
        default:
            console.log("Invalid option. Please choose a valid option (1-6).");
            break;
    }
    startGame();
}
startGame();
