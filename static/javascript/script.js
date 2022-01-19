const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
  {
    question: "Which of these is the most popular at mcdonalds?",
    answers: {
      A: "Big Mac",
      B: "Egg Mcmuffin",
      C: "Fries"
    },
    correctAnswer: "C"
  },
  {
    question: "Which fast food business is more well know for their burgers?",
    answers: {
      A: "Burger King",
      B: "Mcdonalds",
      C: "KFC"
    },
    correctAnswer: "A"
  },
  {
    question: "Which fast food restaurant has the most locations in the USA?",
    answers: {
      A: "Mcdonalds",
      B: "Subway",
      C: "KFC",
      D: "Dairy Queen"
    },
    correctAnswer: "B"
  },
  {
    question: "Which fast food company has the firmest ice cream?", 
    answers: {
     A: "Mcdonalds",
     B: "Baskin Robbins",
     C: "Dairy Queen"
    }, 
    correctAnswer: "C"
  },
  {
   question: "Which restaurant has the most popular milkshakes?",
    answers: {
    A: "Mcdonalds",
    B: "Creams",
    C: "Dairy Queen",
    D: "Baskin Robbins"
   },
   correctAnswer: "C"
  },
  {
   question: "Which fast food restaurant has the most popular chicken?",
   answers: {
   A: "KFC",
   B: "Wendys",
   C: "Taco Bell"
  },
  correctAnswer: "A"
},
{
  question: "Which popular fast food restaurant is known for being affordable?",
  answers: {
   A: "Taco Bell",
   B: "Chipotle",
   C: "Mcdonalds",
   D: "Subway"
  },
  correctAnswer: "C"
}, 
{
  question: "And finally which fast food restaurant is considered the healthiest?",
  answers: {
   A: "Subway",
   B: "Taco Bell",
   C: "Chipotle",
   D: "Wendys"
  },
  correctAnswer: "B"
}
];

const buildQuiz = () => {
    //variable for the html output of the questions and answers
   const output = [];

   // for each question
   myQuestions.forEach(
   (currentQuestion, questionNumber) => {

   // variable to store the list of possible answers for the html output
   const answers = [];

     // and for each available answer
     for(letter in currentQuestion.answers){

      // a radio tag for each answer to the question
      answers.push(
         `<input type="radio" id="question" name="question${questionNumber}" value="${letter}">
         <label for="question">${currentQuestion.answers[letter]}</label>`
       );
     }
     // adds the questions and the answers to the html output
     output.push(
       `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
     );
   });
// finally combine our output list into one string of HTML and put it on the page
quizContainer.innerHTML = output.join('');
}

const showResults= () => {
   //select all answers to your questions
   const answerContainers = quizContainer.querySelectorAll('.answers');

   // keep track of user's answers
   let numCorrect = 0;

     // for each question...
     myQuestions.forEach( (currentQuestion, questionNumber) => {

     // find selected answer
     const answerContainer = answerContainers[questionNumber];
     const selector = `input[name=question${questionNumber}]:checked`;
     const userAnswer = (answerContainer.querySelector(selector) || {}).value;

     // if answer is correct
       if(userAnswer === currentQuestion.correctAnswer){
       // add to the number of correct answers
       numCorrect++;

       // color the answers green
       answerContainers[questionNumber].style.color = 'lightgreen';
       }
       // if answer is wrong or blank
       else{
       // color the answers red
       answerContainers[questionNumber].style.color = 'red';
       }
     });

// show number of correct answers out of total
resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

//to show the quiz when document loads
buildQuiz();

//when button is clicked the function is evoked
submitButton.addEventListener('click', showResults);