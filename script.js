// Quiz questions and answers
const quizData = [
    {
      question: 'What is the capital of France?',
      choices: ['Paris', 'London', 'Berlin'],
      correctAnswer: 'Paris'
    },
    {
      question: 'What is the largest planet in our solar system?',
      choices: ['Jupiter', 'Mars', 'Earth'],
      correctAnswer: 'Jupiter'
    },
    {
      question: 'Who painted the Mona Lisa?',
      choices: ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh'],
      correctAnswer: 'Leonardo da Vinci'
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById('question');
  const choicesElement = document.getElementById('choices');
  const submitButton = document.getElementById('submit');
  const previousButton = document.getElementById('previous');
  const nextButton = document.getElementById('next');
  const scoreElement = document.getElementById('score');
  previousButton.style.display='none';
  // Display the current question and choices
  function displayQuestion() {
    const currentQuiz = quizData[currentQuestion];
    questionElement.innerHTML = `<h3>${currentQuiz.question}</h3>`;
  
    choicesElement.innerHTML = '';
  
    currentQuiz.choices.forEach(function(choice) {
      const choiceButton = document.createElement('button');
      choiceButton.textContent = choice;
      choiceButton.classList.add('choice');
      choicesElement.appendChild(choiceButton);
    });
  }
  
  // Check the answer and update the score
  function checkAnswer(event) {
    const selectedChoice = event.target;
    const selectedAnswer = selectedChoice.textContent;
  
    const currentQuiz = quizData[currentQuestion];
    const correctAnswer = currentQuiz.correctAnswer;
  
    if (selectedAnswer === correctAnswer) {
      score++;
    }
   
    // submitButton.disabled = true;
    // choicesElement.classList.add('disabled');
  
    if (currentQuestion < quizData.length - 1) {
        nextButton.disabled = false;
      goToNextQuestion();
    } else {
      submitButton.style.display = 'block';
      submitButton.disabled = false;
      
    }
  }
  
  // Go to the previous question
  function goToPreviousQuestion() {
    currentQuestion--;
  
    nextButton.disabled = false;
    submitButton.style.display = 'none';
  
    if (currentQuestion === 0) {
      previousButton.style.display = 'none';
    }
  
    displayQuestion();
  }
  
  // Go to the next question
  function goToNextQuestion() {
    currentQuestion++;
    previousButton.style.display='inline-block';
    previousButton.disabled = false;
    submitButton.style.display = 'none';
  
    if (currentQuestion === quizData.length - 1) {
      nextButton.style.display= 'none';
    }
  
    displayQuestion();
  }
  
  // Display the final score
  function displayScore() {
    questionElement.textContent = 'Quiz completed!';
    choicesElement.innerHTML = '';
    submitButton.style.display = 'none';
    previousButton.style.display= 'none';
    nextButton.style.display = 'none';
    scoreElement.textContent = `Your score: ${score} out of ${quizData.length}`;
  }
  
  // Event listeners
  choicesElement.addEventListener('click', checkAnswer);
  previousButton.addEventListener('click', goToPreviousQuestion);
  nextButton.addEventListener('click', goToNextQuestion);
  submitButton.addEventListener('click', displayScore);
  
  // Start the quiz
  displayQuestion();
  