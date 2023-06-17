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
    },
    {
        question: 'Who painted the Mona Lisa?',
        choices: ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh'],
        correctAnswer: 'Leonardo da Vinci'
      },
      {
        question: 'Who painted the Mona Lisa?',
        choices: ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh'],
        correctAnswer: 'Leonardo da Vinci'
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
  const scoreElement = document.getElementById('score');
  
  // Display the current question and choices
  function displayQuestion() {
    const currentQuiz = quizData[currentQuestion];
    questionElement.textContent = currentQuiz.question;
  
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
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      displayQuestion();
    } else {
      displayScore();
    }
  }
  
  // Display the final score
  function displayScore() {
    questionElement.textContent = 'Quiz completed!';
    choicesElement.innerHTML = '';
    submitButton.style.display = 'none';
    scoreElement.textContent = `Your score: ${score} out of ${quizData.length}`;
  }
  
  // Event listeners
  submitButton.addEventListener('click', displayQuestion);
  choicesElement.addEventListener('click', checkAnswer);
  
  // Start the quiz
  displayQuestion();
  