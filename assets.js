const fullname = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
//
const button = document.getElementById('submit')


// reGex
const is_email = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+).([a-z]+)?/  // reGex for Email Validation.
const is_correct_pass = /[a-zA-Z0-9]{8}/  // reGex for Password validation


// let's move submit button
button.addEventListener('mouseover', function(){ 
  const is_valid = is_email.test(email.value) && is_correct_pass.test(password.value) && fullname.value.length > 2

  if(!is_valid){
    this.classList.toggle('move')
  }
})