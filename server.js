const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS
app.use(cors());

// Define your routes
app.get('/questions', (req, res) => {
  const questions = [
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
    // Add more questions here
  ];

  res.json(questions);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
