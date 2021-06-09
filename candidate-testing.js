const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question1 = "1) Who was the first American woman in space? "
let question2 = "2) True or false: 5 kilometer == 5000 meters?"
let question3 = "3) (5 + 3)/2 * 10 = ?";
let question4 = "4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?";
let question5 = "5) What is the minimum crew size for the ISS?";
let question = [question1, question2,question3, question4, question5];
let correctAnswer1 = "Sally Ride";
let correctAnswer2 = "true";
let correctAnswer3 = "40";
let correctAnswer4 = "Trajectory";
let correctAnswer5 = "3";

let correctAnswer = [correctAnswer1, correctAnswer2, correctAnswer3, correctAnswer4, correctAnswer5];

let arrCandidateAnswer = [];

let candidateAnswer;
let questions;
let correctAnswers;
let candidateAnswers;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question('Please enter your name ');
console.clear();
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < question.length; i++) {
   const input = require('readline-sync');
  console.log(question[i]);
  candidateAnswer= input.question();
 console.log(`Your Answer: ${candidateAnswer}`);
 console.log(`Correct answer: ${correctAnswer[i]} \n`);
 arrCandidateAnswer.push(candidateAnswer);
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
// if (candidateAnswer === correctAnswer){console.log("You answer is correct!")}
// else {console.log("Your answer incorrect!")}

  let grade;
  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Candidate Name:", ' '+ candidateName);
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};