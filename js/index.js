document.addEventListener('DOMContentLoaded', function() {
    const navBar = document.querySelector('.navBar');
    if (navBar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 0) {
                navBar.classList.add('shadow');
            } else {
                navBar.classList.remove('shadow');
            }
        });
    }
});
console.log('NEW FORM');


// send the message and get a callback with an error or details of the message that was sent
const form = document.querySelector('.form');
const user = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const alertM = document.querySelector('.alert');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const recaptchaResponse = grecaptcha.getResponse(); // Obtener la respuesta del CAPTCHA
    const errorCatcha=document.querySelector('#catchaError')
  if (!user.value || !email.value || !message.value || !recaptchaResponse) {
    if (!user.value) user.classList.add('error');
    if (!email.value) email.classList.add('error');
    if (!message.value) message.classList.add('error');
    if (!recaptchaResponse) errorCatcha.classList.add('catchaError')
  } else {
    emailjs.send("elvisemail", "elvistemplate", {
      from_name: `${user.value}`,
      from_email: `${email.value}`,
      to_name: "Elvis",
      message: `${message.value}`,
    }).then(() => {
      alertM.classList.add('slideDown');
      setTimeout(() => {
        alertM.classList.remove('slideDown');
        alertM.addEventListener('animationend', () => {
          alertM.remove(); /* Elimina el elemento cuando termina la animación de salida */
        });
        alertM.classList.add('slideOut');
      }, 3000);
    });
  }
});


  user.addEventListener('change', () => {
    if (!user.value) user.classList.add('error')
    else user.classList.remove('error')
  });
  
  email.addEventListener('change', () => {
    if (!email.value) email.classList.add('error')
    else email.classList.remove('error')
  });
  
  message.addEventListener('input', () => {
    message.classList.remove('error')
  });
  
  message.addEventListener('blur', () => {
    if (!message.value) message.classList.add('error')
  });



  console.log('NEW FORM');
