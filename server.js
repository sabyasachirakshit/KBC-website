const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS
app.use(cors());

// Define your routes
app.get('/questions', (req, res) => {
  const question = 
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      answer: 'Paris'
    };
  res.json(question);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
