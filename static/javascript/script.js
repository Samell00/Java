const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const retry = document.getElementById('backto');
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
       `<div id="Quizcon">
        <div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>
        </div>`
     );
   });
// finally combine our output list into one string of HTML and put it on the page
quizContainer.innerHTML = output.join('');
}

const showResults= () => {
   //find all answers in the div called answers
   const answerContainers = quizContainer.querySelectorAll('.answers');
   //select the div called message to display a different message depending on how many the user got right
   const message = document.getElementById("message");

   // keep track of user's answers
   let numCorrect = 0;

     // for each question...
     myQuestions.forEach( (currentQuestion, questionNumber) => {

     // references the radio buttons
     const answerContainer = answerContainers[questionNumber];
     //selects the radio buttons that where selected by the user
     const selector = `input[name=question${questionNumber}]:checked`;
     //selects the users answers and groups them into one value
     const UserAnswer = (answerContainer.querySelector(selector)).value;

     // if answer is correct
       if(UserAnswer === currentQuestion.correctAnswer){
       // adds 1 to the count of correct answers
       numCorrect++;
      
      }
      if(numCorrect >= 7){
        message.innerHTML = "Well done! looks like someone was hungry";

      } else if(numCorrect <= 4){
        messsage.innerHTML = "Good but not quite all the knowledge you need to know which fast food place is best for your taste";
      }
      else{
        message.innerHTML = "Please try again, you dont seem to know how to get a great fast food deal";
      }
    });
 
 // show number of correct answers out of total
 resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

//to show the quiz when document loads
buildQuiz();

//when button is clicked the function is evoked
submitButton.addEventListener('click', showResults);

//sends user back to retry quiz when clicked
retry.addEventListener('click', );