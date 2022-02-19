const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('resultcontainer');
const submitButton = document.getElementById('submit');
const homebutton = document.getElementById('Home');
const errormessage = document.getElementById('error');
const result = document.getElementById('result');
const resultmessage = document.getElementById('quizmessage');
const retrybutton = document.getElementById('retry');
const myQuestions = [
    {
      question: "Which product is the most popular on the mcdonalds lunch menu?",
      answers: {
        a: "Big Mac",
        b: "Mcnuggets",
        c: "Fries",
        d: "Double cheeseburger"
      },
      correctAnswer: "c"
    },
    {
      question: "Which fast food business is most well know for their burgers?",
      answers: {
        a: "Burger King",
        b: "Mcdonalds",
        c: "KFC",
        d: "Wendys"
      },
      correctAnswer: "a"
    },
    {
      question: "Which fast food restaurant has the most locations in the USA?",
      answers: {
        a: "Mcdonalds",
        b: "KFC",
        c: "Wendys",
        d: "Subway"
      },
      correctAnswer: "d"
    },
    {
      question: "Which fast food company has the popular ice cream?", 
      answers: {
       a: "Mcdonalds",
       b: "Burger King",
       c: "Dairy Queen",
       d: "Wendys"
      }, 
      correctAnswer: "c"
    },
    {
      question: "Which restaurant sells the most popular milkshakes?",
       answers: {
       a: "Mcdonalds",
       b: "Wendys",
       c: "Dairy Queen",
       d: "Burger King"
      },
      correctAnswer: "c"
     },
     {
      question: "Which fast food restaurant has the most popular chicken?",
      answers: {
      a: "KFC",
      b: "Wendys",
      c: "Taco Bell",
      d: "Mcdonalds"
     },
     correctAnswer: "a"
   },
   {
     question: "Which popular fast food restaurant is known for being affordable?",
     answers: {
      a: "Taco Bell",
      b: "Chipotle",
      c: "Mcdonalds",
      d: "Subway"
     },
     correctAnswer: "c"
   }, 
   {
     question: "Which fast food restaurant is considered the healthiest?",
     answers: {
      a: "Subway",
      b: "Taco Bell",
      c: "Chipotle",
      d: "Wendys"
     },
     correctAnswer: "b"
   },
   {
     question: "How many dips can you get with 20 Mcnuggets from Mcdonalds?",
     answers: {
       a: "2",
       b: "6",
       c: "4",
       d: "3"
     },
     correctAnswer: "c"
   }
 ];

function buildQuiz(){
    // variable to store the HTML output
  const output = [];

  // for each question...
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for(letter in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
          `<label for="question${questionNumber}">${currentQuestion.answers[letter]}</label>
           <input type="radio" name="question${questionNumber}" value="${letter}" id="option">
           `
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
         <div class="currentquestion"> ${currentQuestion.question} </div>
         <div class="answers"> ${answers.join('')} </div>
         </div>`
      );
    }
  );
  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}

const showResults= () => {
      // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');

  // keep track of user's answers
  let numCorrect = 0;

  // for each question...
  myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector)|| {}).value;

    // if answer is correct
    if(userAnswer === currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;
    }
  });
  quizContainer.classList.add('hidden');
  submitButton.classList.add('hidden');
  resultsContainer.classList.remove('hidden');
  result.innerHTML = `You Scored ${numCorrect} out of ${myQuestions.length}`;
  
  if(numCorrect > 7){
    resultmessage.innerHTML = 'Excellent! Well Done';
  }
  else if (numCorrect < 3){
    resultmessage.innerHTML = 'Come on you could do much better that this';
  }
  else{
    resultmessage.innerHTML = 'Good! Keep it up';
  }
}
// display quiz right away
buildQuiz();
// on submit, show results
submitButton.addEventListener('click', showResults);