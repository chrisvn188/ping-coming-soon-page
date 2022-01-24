// REGEX PATTERNS
const emptyRegex = /^\s*$/;
const emailRegex = /[a-zA-Z0-9._-]*@[a-zA-Z0-9._-]*\.[a-z]{2,}/;

// GET ELEMENTS
const form = document.querySelector('#form');
const email = document.querySelector('#email');
const errorMessage = document.querySelector('.form__error-message');


// FUNCTIONS
function isEmpty(input){
  return emptyRegex.test(input.value);
}

function isValid(email){
  return emailRegex.test(email.value);
}

// EVENT LISTENERS
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // if input is empty, then display "Email address cannot be empty"
  if(isEmpty(email)){
    errorMessage.innerHTML = 'Email Address cannot be empty!';
    errorMessage.classList.add('active');
    email.classList.add('has-error');
  }

  // if email is not valid, then display "Please provide a valid email address!"
  if(!isEmpty(email) && !isValid(email)){
    errorMessage.innerHTML = 'Please provide a valid email address!';
    errorMessage.classList.add('active');
    email.classList.add('has-error');
  }

  if(isValid(email)){
    errorMessage.classList.remove('active');
    email.classList.remove('has-error');
  }

});

email.addEventListener('change', () => {
  // if input is empty, then display "Email address cannot be empty"
  if(isEmpty(email)){
    errorMessage.innerHTML = 'Email Address cannot be empty!';
    errorMessage.classList.add('active');
    email.classList.add('has-error');
  }

  // if email is not valid, then display "Please provide a valid email address!"
  if(!isEmpty(email) && !isValid(email)){
    errorMessage.innerHTML = 'Please provide a valid email address!';
    errorMessage.classList.add('active');
    email.classList.add('has-error');
  }

  if(isValid(email)){
    errorMessage.classList.remove('active');
    email.classList.remove('has-error');
  }

});
