// Quiz questions and answers
const quizData = [
    {
      question: 'What does CPU stand for?',
      choices: ['Central Processing Unit', 'Computer Personal Unit', 'Central Personal Unit', 'Computer Processing Unit'],
      correctAnswer: 'Central Processing Unit'
    },
    {
      question: 'What is the full form of HTML?',
      choices: ['Hyper Text Markup Language', 'Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks Tool Markup Language'],
      correctAnswer: 'Hyper Text Markup Language'
    },
    {
      question: 'What is the most popular programming language in 2021?',
      choices: ['Python', 'JavaScript', 'Java', 'C++'],
      correctAnswer: 'Python'
    },
    {
      question: 'Which company developed the first smartphone?',
      choices: ['Apple', 'Samsung', 'Motorola', 'Nokia'],
      correctAnswer: 'IBM'
    },
    {
      question: 'What does CSS stand for?',
      choices: ['Cascading Style Sheet', 'Computer Style Sheet', 'Colorful Style Sheet', 'Creative Style Sheet'],
      correctAnswer: 'Cascading Style Sheet'
    },
    {
      question: 'What is the main function of a database management system?',
      choices: ['Data storage', 'Data retrieval', 'Data manipulation', 'All of the above'],
      correctAnswer: 'All of the above'
    },
    {
      question: 'What does HTTPS stand for?',
      choices: ['HyperText Transfer Protocol Security', 'HyperText Transfer Protocol Secure', 'Home Tool Transfer Protocol Secure', 'Hyperlinks Tool Transfer Protocol Security'],
      correctAnswer: 'HyperText Transfer Protocol Secure'
    },
    {
      question: 'What is the latest version of JavaScript?',
      choices: ['ES5', 'ES6', 'ES7', 'ES2022'],
      correctAnswer: 'ES2022'
    },
    {
      question: 'Which technology is used to build dynamic web applications?',
      choices: ['HTML', 'CSS', 'JavaScript', 'Java'],
      correctAnswer: 'JavaScript'
    },
    {
      question: 'What does API stand for?',
      choices: ['Application Programming Interface', 'Advanced Programming Interface', 'Application Process Interface', 'Advanced Process Interface'],
      correctAnswer: 'Application Programming Interface'
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
  