

// const form  = document.getElementsByTagName('form')[0];

// const pre = document.getElementById('pre');
// const preError = document.querySelector('#pre + span.error');


// // pre.addEventListener('input', function (event) {
// //     // Each time the user types something, we check if the
// //     // form fields are valid.
  
// //     if (pre.validity.valid) {
// //       // In case there is an error message visible, if the field
// //       // is valid, we remove the error message.
// //       preError.textContent = ''; // Reset the content of the message
// //       preError.className = 'error'; // Reset the visual state of the message
// //     } else {
// //       // If there is still an error, show the correct error
// //       showError();
// //     }
// //   });


//   form.addEventListener('submit', function (event) {
//     // if the email field is valid, we let the form submit
  
//     if(!pre.validity.valid) {
//       // If it isn't, we display an appropriate error message
//       showError();
//       // Then we prevent the form from being sent by canceling the event
//       event.preventDefault();
//     }
//   });



//   function showError() {
//     if(pre.validity.valueMissing) {
//       // If the field is empty,
//       // display the following error message.
//       preError.textContent = 'You need to enter an e-mail address.';
//     } else if(pre.validity.typeMismatch) {
//       // If the field doesn't contain an email address,
//       // display the following error message.
//       preError.textContent = 'Entered value needs to be an e-mail address.';
//     } else if(pre.validity.tooShort) {
//       // If the data is too short,
//       // display the following error message.
//       preError.textContent = `Email should be at least ${ pre.minLength } characters; you entered ${ pre.value.length }.`;
//     }
  
//     // Set the styling appropriately
//     preError.className = 'error active';
//   }