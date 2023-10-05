let nameError = document.getElementById('name-error');
let phoneError = document.getElementById('phone-error');
let emailError = document.getElementById('email-error');
let messageError = document.getElementById('message-error');
let submitError = document.getElementById('subit-error');


function validateName() {
     let name = document.getElementById('contact-name').value;

     if (name.length == 0) {
          nameError.innerHTML = 'Name is requried';
     }
     if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
          nameError.innerHTML = 'write full name';
          return false;
     }
     nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
     return true;
}

function validatephone() {
     let phone = document.getElementById('contact-phone').value;

     if (phone.length == 0) {
          phoneError.innerHTML = 'Phone no is required ';
          return false;
     }
     if (phone.length !== 10) {
          phoneError.innerHTML = 'Phone no should be 10 digits';
          return false;
     }
     if (!phone.match(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g)) {
          phoneError.innerHTML = 'Only digits please';
          return false;
     }

     phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
     return true;

}

function validateEmail() {
     let email = document.getElementById('contact-email').value;

     if (email.length == 0) {
          emailErroe.innerHTML = 'Email is requried';
          return false;
     }
     if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
          emailError.innerHTML = 'Email Invalid'
          return false;
     }
     emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
     return true;


}

function validateMessage(){
     let message = document.getElementById('contact-message').value;
     let required = 30;
     let left = required - message.length;

     if(left>0){
          messageError.innerHTML = left + 'more characters requried';
          return false;
     }

     messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
     return true;


}
function validateForm(){
     if(!validateName() || !validatephone() || !validateEmail() || !validateMessage()){
          submitError.style.display = 'block';
          submitError.innerHTML = 'Please fix error to submit';
          setTimeout(function(){submitError.style.display = 'none'}, 3000)
          return false;
     }
}


