const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS
app.use(cors());

function getRandomUniqueQuestion() {
  if(showed_questions.length===database_of_questions.length){
    const error={"err_aqf":"All questions are showed. Server updates coming soon.."};
    return error;
  }
  const randomIndex = Math.floor(Math.random() * database_of_questions.length);
  const randomQuestion = database_of_questions[randomIndex];
  
  // If the element has already been used, try again
  if (showed_questions.includes(randomQuestion)) {
    return getRandomUniqueQuestion();
  }
  
  // Add the element to the used array and return it
  showed_questions.push(randomQuestion);
  return randomQuestion;
}

const database_of_questions = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    answer: 'Paris'
  },
  {
    question: 'What is the largest planet in our solar system?',
    options: ['Jupiter', 'Saturn', 'Neptune', 'Mars'],
    answer: 'Jupiter'
  },
  {
    question: 'Who is the current CEO of Microsoft?',
    options: ['Steve Jobs', 'Bill Gates', 'Satya Nadella', 'Tim Cook'],
    answer: 'Satya Nadella'
  }
];

const showed_questions=[];

// Define your routes
app.get('/questions', (req, res) => {
  res.json(getRandomUniqueQuestion());
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
