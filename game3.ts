// import * as readlineSync from "readline-sync";

// let questions: { question: string, options: string[], answer: string }[] = [
//   {
//     question: "What is 2 + 2?",
//     options: ["1", "2", "3", "4"],
//     answer: "4"
//   },

//   {
//     question: "What is the capital of France?",
//     options: ["Paris", "London", "Berlin", "Madrid"],
//     answer: "Paris"
//   },

//   {
//     question: "What is the largest planet in our solar system?",
//     options: ["Earth", "Jupiter", "Saturn", "Mars"],
//     answer: "Jupiter"
//   }

// ];

// // for(let i  = 0; i < questions.length; i++){
// //   console.log(questions[i]);

// // }

// // questions.forEach((val, index) => {
// //   console.log(`Question${index + 1}. ${val.question} (Answer: ${val.answer})`);
// // });
// // console.log(" my name is sachin");

// console.log("\n=== Quiz Game ===");
// console.log("1. Play Quiz");
// console.log("2. Add a Question");
// console.log("3. View All Questions");
// console.log("4. Delete a Question");
// console.log("5. View High Scores");
// console.log("6. Exit");

// const choice = readlineSync.questionInt("Enter a Choice (1-6): ");

// switch (choice) {
//   case 1:
//     let score = 0; // Initialize score for the quiz session

//     // Loop through each question in the array
//     for (let i = 0; i < questions.length; i++) {
//       const newQuestion = questions[i];
//       console.log(newQuestion.question);
//       console.log(newQuestion.options.join("  ")); // Display options

//       const answer = readlineSync.question("Enter Your Answer: ");

//       if (answer === newQuestion.answer) {
//         console.log("You are right! You win!");
//         score += 10; // Increase score for correct answer
//       } else {
//         console.log("Wrong! It is the wrong answer.");
//       }
//     }

//     console.log("Your final score: ", score);
//     break;

//     // Add a Question
//   case 2:
//     console.log("Add a Question");

//     let userQuestion = readlineSync.question("Enter your new question: ");
//     let option_1 = readlineSync.question("Enter option 1: ");
//     let option_2 = readlineSync.question("Enter option 2: ");
//     let option_3 = readlineSync.question("Enter option 3: ");
//     let option_4 = readlineSync.question("Enter option 4: ");
//     let userAnswer = readlineSync.question("Enter the correct answer: ");

//     questions.push({
//       question: userQuestion,
//       options: [option_1, option_2, option_3, option_4],
//       answer: userAnswer
//     });

//     console.log("Question added successfully!");
//     break;

// // View all Questions
//   case 3:
//     console.log("View All Questions");

//     if (questions.length === 0) {
//       console.log("No questions available.");
//     }

//      else {
//       questions.forEach((val, index) => {
//         console.log(`Question${index + 1}. ${val.question} (Answer: ${val.answer})`);
//       });
//     }
//     break;

//     // Delete a Question
//   case 4:
//     console.log("Delete a Question");
//     const index = readlineSync.questionInt("Enter the question number to delete: ") -1 ; // -1 Means 0 index + -1

//     if (index >= 0 && index < questions.length) {
//       questions.splice(index, 1);
//       console.log("Question deleted successfully!");
//     } else {
//       console.log("Invalid question number.");
//     }
//     break;

//   case 5:
//     console.log("View High Scores");
//     // You can implement logic for displaying high scores here
//     break;

//   case 6:
//     console.log("Exiting the game...");
//     break;

//   default:
//     console.log("Invalid option. Please choose a valid option (1-6).");
//     break;
// }






































import * as readlineSync from "readline-sync";

const Questions: {
  question: string;
  options: string[];
  answer: string;
  hint: string;
  Difficulty: string[];
}[] = [
  {
    question: "What is 2 + 2?",
    options: ["1", "2", "3", "4"],
    answer: "4",
    Difficulty: ["Easy", "Medium", "Hard"],
    hint: "It's the first even number after 0.",
  },

  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
    Difficulty: ["Easy", "Medium", "Hard"],
    hint: "It's known for the Eiffel Tower.",
  },

  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Saturn", "Mars"],
    answer: "Jupiter",
    Difficulty: ["Easy", "Medium", "Hard"],
    hint: "It's the fifth planet from the sun.",
  },
];

// create a array to store the name and score to the user 
const highScores: { name: string, score: number}[] = []

console.log("\n=== Quiz Game ===");
console.log("1. Play Quiz");
console.log("2. Add a Question");
console.log("3. View All Questions");
console.log("4. Delete a Question");
console.log("5. View High Scores");
console.log("6. Exit");

const choice = readlineSync.questionInt("Enter a Choice (1-6): ");

switch (choice) {

      // Play Game
  case 1:
    let score = 0; 

    for (let i = 0; i < Questions.length; i++) {
      const newQuestion = Questions[i];
      console.log(newQuestion.question);

    
      const userHint = readlineSync.question("Do you want a hint? (yes/no): ");

      if (userHint === "yes") {
        console.log(`Hint:   ${newQuestion.hint}`); 
      } else {
        console.log("Okey you can Do it");
      }

      console.log(newQuestion.options.join("  ")); 

      const answer = readlineSync.question("Enter Your Answer: ");

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
    const playerName = readlineSync.question("Enter your name to save  your score: ")
    highScores.push({name: "Sachin", score: 10})
    console.log("Score Save");
    break;


// Add Question Maually
  case 2:
    console.log("Add a Question");

    let userQuestion = readlineSync.question("Add a new question: ");
    let option_1 = readlineSync.question("Enter option 1: ");
    let option_2 = readlineSync.question("Enter option 2: ");
    let option_3 = readlineSync.question("Enter option 3: ");
    let option_4 = readlineSync.question("Enter option 4: ");
    let userAnswer = readlineSync.question("Enter the correct answer: ");
    let userHint = readlineSync.question("Enter a hint for the question: "); // New input for hint
    let userDifficulty = readlineSync.question("Enter Difficulty Level: ");

    Questions.push({
      question: userQuestion,
      options: [option_1, option_2, option_3, option_4],
      answer: userAnswer,
      hint: userHint,
      Difficulty: userDifficulty,
    });

    console.log("Question added successfully!");
    break;


    // View All Question (all question on the output to decalre array in object)
  case 3:
    console.log("View All Questions");

    if (Questions.length === 0) {
      console.log("No questions available.");
    } else {
      Questions.forEach((val, index) => {
        console.log(`Question ${index + 1}: ${val.question} (Answer: Hidden)`);
        console.log(`Hint: ${val.hint}`);
      });
    }
    break;


    // Delete a Question (Array of Object)
  case 4:
    console.log("Delete a Question");
    const arrIndex =  readlineSync.questionInt("Enter the question number to delete: ") - 1; // -1 Means: (0 index + -1)

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
      highScores.forEach((entry, index) => {
        console.log(`${index + 1}. ${entry.name} - Score: ${entry.score}`);
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
