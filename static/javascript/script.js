const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
  {
    question: "Which product is the most popular on the mcdonalds lunch menu?",
    answers: {
      A: "Big Mac",
      B: "McNuggets",
      C: "Fries"
    },
    correctAnswer: "C"
  },
  {
    question: "Which fast food business is most well know for their burgers?",
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
    question: "Which fast food company has the popular ice cream?", 
    answers: {
     A: "Mcdonalds",
     B: "Burger King",
     C: "Dairy Queen"
    }, 
    correctAnswer: "C"
  },
  {
   question: "Which restaurant sells the most popular milkshakes?",
    answers: {
    A: "Mcdonalds",
    B: "Wendys",
    C: "Dairy Queen",
    D: "Burger King"
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
    //variable for the html output to store the questions and answers together in one block
   const output = [];

   // You create 2 more parameters to reference each question in the array of questions
   myQuestions.forEach(
   (currentQuestion, options) => {

   // variable to store the list of answers that you have put in the myQuestions array for the html output
   const answers = [];

     // and for each available answer
     for(letter in currentQuestion.answers){

      // turning the answers from the quesiton array into radio tags by referencing the index from each value being the questions
      answers.push(
         `<input type="radio" name="question${options}">
          <label for="question">${currentQuestion.answers[letter]}</label>`
       );
     }
     // adds the questions and the answers to the html output
     output.push(
       `<div class="Quizcon">
        <div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>
        </div>`
     );
   });
 
// finally combine our output list into one string of HTML and put it on the page
quizContainer.innerHTML = output.join('');
}

const Result= () => {
  //find all selected answers in the div called answers
  const answerContainers = quizContainer.querySelectorAll('.answers');
  // keep track of user's correct answers
  let numCorrect = 0;
     // for each question 
     myQuestions.forEach( (currentQuestion, options) => { 
      // references the radio buttons
     const answerContainer = answerContainers[options];
     //selects the radio buttons that where selected by the user
     const selector = `input[name=question${options}]:checked`;
     //selects the users answers and groups them into one signle value aka number
     const UserAnswer = (answerContainer.querySelector(selector)).value;

     // if answer is correct
       if(UserAnswer === currentQuestion.correctAnswer){
       // adds 1 to the count of correct answers
       numCorrect++;
       }
    });
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`; 
}

const Resultpage= () => {
 window.location.assign('results.html');

}

buildQuiz();

//when button is clicked the showResults function is evoked
submitButton.addEventListener('click', Resultpage);


