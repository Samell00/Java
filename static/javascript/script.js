const home = document.getElementById('index');
const homebutton = document.getElementById('Home');
const start = document.getElementById('buildquiz');
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('resultcontainer');
const submitButton = document.getElementById('submit');
const errormessage = document.getElementById('error');
const result = document.getElementById('result');
const resultmessage = document.getElementById('quizmessage');

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
    // variable to store the HTML output for the quiz questions
  const output = [];

  //For each arrow function for each question
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      //Variable to store the list of possible answers
      const answers = [];

      //Using for function to reference each letter in the answers section of the currentQuestion index
      for(letter in currentQuestion.answers){

        //Adding an HTML radio button for each answer
        answers.push(
            //referencing the array index called question number.answers and getting each letter value and giving it a radiobutton  
          `<label for="question${questionNumber}">${currentQuestion.answers[letter]}</label>
           <input type="radio" name="question${questionNumber}" value="${letter}" class="option">
           `
        );
      }

      //Adding a title to my answers being the question by referencing the current question index in my array then referncing the actual value in the array then making a div for the answers itself and joining all the data in it
      output.push(
        `<div class="slide">
         <div class="currentquestion">${currentQuestion.question} </div>
         <div class="answers"> ${answers.join('')} </div>
         </div>`
      );
    }
  );
  //hide introduction section called home
  home.classList.add('hidden');
  //make quiz appear
  quizContainer.classList.remove('hidden');
  //make submit button appear aswell
  submitButton.classList.remove('hidden');
  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}

const showResults= () => {
   //gather answer containers from our quiz and storing it in a variable
  const answerContainers = quizContainer.querySelectorAll('.answers');

  // keep track of user's answers
  let numCorrect = 0;

  //For each question in my array getting the index of my array with the variable names ive made for each index
  myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer info and storing it in variables
      //
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector)).value;

    // if answer is correct
    if(userAnswer === currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;
    }

      
  });
//Display screen code at end to only show the results and result message in the html 
  quizContainer.classList.add('hidden');
  submitButton.classList.add('hidden');
  errormessage.classList.add('hidden');
  resultsContainer.classList.remove('hidden');
    //Referencing the variables containing info about number of correct answers and amount og questions in the myQuestions array
  result.innerHTML = `You Scored ${numCorrect} out of ${myQuestions.length}`;

//Logic to display certain message if the user gets a certai amount correct
    //If number correct is more than 7 they get excellent
  if(numCorrect > 7){
    resultmessage.innerHTML = 'Excellent Go you!';
  }
      //If number is less than 4 they get bad message
  else if (numCorrect < 4){
    resultmessage.innerHTML = 'You should really know more than this';
  }
      //If number isnt more than 7 or less than 4 they get ok message
  else{
    resultmessage.innerHTML = 'Good! Keep it up';
  } 
};
//Function to take user back to the home page 
const Index = () =>{
    //hides the container containing reuslts 
  resultsContainer.classList.add('hidden');
    //displays container containing the home page info
  home.classList.remove('hidden');
}
//Adding the build quiz function to start button to start quiz and build all the divs and selectors
start.addEventListener('click', buildQuiz);
//Adding the show results function to the submit button 
submitButton.addEventListener('click', showResults);
//Adding the index function to our home button class
homebutton.addEventListener('click', Index);
