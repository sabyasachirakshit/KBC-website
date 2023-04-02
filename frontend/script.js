let currentQuestion;
fetch('http://localhost:3000/questions')
  .then((response) => response.json())
  .then((data) => {
    if(data.err_aqf){
      console.log(data);
      const question=document.getElementById("question-box");
      const option1 = document.getElementById('option-1');
      const option2 = document.getElementById('option-2');
      const option3 = document.getElementById('option-3');
      const option4 = document.getElementById('option-4');
      question.innerText=data.err_aqf;
      option1.innerText="Thank You For Playing!";
      option2.innerText="Thank You For Playing!";
      option3.innerText="Thank You For Playing!";
      option4.innerText="Thank You For Playing!";
      submitButton.style.visibility="hidden";
      return;
    }
    currentQuestion=data;
    const question=document.getElementById("question-box");
    const option1 = document.getElementById('option-1');
    const option2 = document.getElementById('option-2');
    const option3 = document.getElementById('option-3');
    const option4 = document.getElementById('option-4');
    question.innerText=data.question;
    option1.innerText=data.options[0];
    option2.innerText=data.options[1];
    option3.innerText=data.options[2];
    option4.innerText=data.options[3];
  })
  .catch((error) => {
    console.error(error);
    const question=document.getElementById("question-box");
      const option1 = document.getElementById('option-1');
      const option2 = document.getElementById('option-2');
      const option3 = document.getElementById('option-3');
      const option4 = document.getElementById('option-4');
      question.innerText="Server is under Maintenance. Try Reloading or Come back soon! ";
      option1.innerText="Extremely Sorry for the issue!";
      option2.innerText="Extremely Sorry for the issue!";
      option3.innerText="Extremely Sorry for the issue!";
      option4.innerText="Extremely Sorry for the issue!";
      submitButton.style.visibility="hidden";
      return;
  });


const options = document.querySelectorAll('.option');
options.forEach((option) => {
  option.addEventListener('click', () => {
    options.forEach((o) => {
      o.checked = false;
      o.style.backgroundColor = 'black';
    });
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
    if(option1.checked){
      if(option1.value===currentQuestion.answer){
        option1.style.backgroundColor="lightgreen";
      }else{
        option1.style.backgroundColor="red";
        if(option2.value===currentQuestion.answer){
          option2.style.backgroundColor="lightgreen";
        }else if(option3.value===currentQuestion.answer){
          option3.style.backgroundColor="lightgreen";
        }
        if(option4.value===currentQuestion.answer){
          option4.style.backgroundColor="lightgreen";
        }
      }
    }else if(option2.checked){
      if(option2.value===currentQuestion.answer){
        option2.style.backgroundColor="lightgreen";
      }else{
        option2.style.backgroundColor="red";
        if(option1.value===currentQuestion.answer){
          option1.style.backgroundColor="lightgreen";
        }else if(option3.value===currentQuestion.answer){
          option3.style.backgroundColor="lightgreen";
        }
        if(option4.value===currentQuestion.answer){
          option4.style.backgroundColor="lightgreen";
        }
      }
    }else if(option3.checked){
      if(option3.value===currentQuestion.answer){
        option3.style.backgroundColor="lightgreen";
      }else{
        option3.style.backgroundColor="red";
        if(option1.value===currentQuestion.answer){
          option1.style.backgroundColor="lightgreen";
        }else if(option2.value===currentQuestion.answer){
          option2.style.backgroundColor="lightgreen";
        }
        if(option4.value===currentQuestion.answer){
          option4.style.backgroundColor="lightgreen";
        }
      }
    }else if(option4.checked){
      if(option4.value===currentQuestion.answer){
        option4.style.backgroundColor="lightgreen";
      }else{
        option4.style.backgroundColor="red";
        if(option1.value===currentQuestion.answer){
          option1.style.backgroundColor="lightgreen";
        }else if(option3.value===currentQuestion.answer){
          option3.style.backgroundColor="lightgreen";
        }
        if(option2.value===currentQuestion.answer){
          option2.style.backgroundColor="lightgreen";
        }
      }
    }   
    nextButton.style.visibility = 'visible';
  } else {
    alert('Please select an option');
  }
}


const submitButton = document.querySelector('.btn-outline-success');
submitButton.addEventListener('click', checkOptionSelected);

const nextButton=document.getElementById("next");
nextButton.addEventListener("click",()=>{
  window.location.reload();
})