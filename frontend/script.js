fetch('http://localhost:3000/questions')
  .then((response) => response.json())
  .then((data) => {
    // Do something with the data
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });


// Get all option elements
const options = document.querySelectorAll('.option');

// Add event listener to each option
options.forEach((option) => {
  option.addEventListener('click', () => {
    // Uncheck all options and set their background color to black
    options.forEach((o) => {
      o.checked = false;
      o.style.backgroundColor = 'black';
    });

    // Check the clicked option and set its background color to orangered
    option.checked = true;
    option.style.backgroundColor = 'orangered';
  });
});

function checkOptionSelected() {
  const option1 = document.getElementById('option-1');
  const option2 = document.getElementById('option-2');
  const option3 = document.getElementById('option-3');
  const option4 = document.getElementById('option-4');
  const nextButton = document.querySelector('.next-option');
  option1.addEventListener('click',()=>{
    option1.checked=true;
    option2.checked=false;
    option3.checked=false;
    option4.checked=false;
  })
  option2.addEventListener('click',()=>{
    option2.checked=true;
    option1.checked=false;
    option3.checked=false;
    option4.checked=false;
  })
  option3.addEventListener('click',()=>{
    option3.checked=true;
    option2.checked=false;
    option1.checked=false;
    option4.checked=false;
  })
  option4.addEventListener('click',()=>{
    option4.checked=true;
    option2.checked=false;
    option3.checked=false;
    option1.checked=false;
  })
  if (option1.checked || option2.checked || option3.checked || option4.checked) {
    // At least one option is selected, allow the answer to be submitted
    // Your submit answer code goes here
    nextButton.style.visibility = 'visible';
  } else {
    // No option is selected, display popup message
    alert('Please select an option');
  }
}


const submitButton = document.querySelector('.btn-outline-success');
submitButton.addEventListener('click', checkOptionSelected);
