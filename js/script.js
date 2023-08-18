const loginChanger = document.querySelector('.login-changer');
const logupChanger = document.querySelector('.logup-changer');

loginChanger.addEventListener('click', () => {
    document.querySelector('.pictuer').style = 'transform: translate(600px,0)'
    document.querySelector('.log-up___form').style = 'transform: scale(0)'
    document.querySelector('.log-in___form').style = 'transform: scale(1)'
    document.querySelector('.register_contain').style = 'width: 550px'
})

logupChanger.addEventListener('click', () => {
    document.querySelector('.pictuer').style = 'transform: translate(0,0)'
    document.querySelector('.log-up___form').style = 'transform: scale(1)'
    document.querySelector('.log-in___form').style = 'transform: scale(0)'
    document.querySelector('.register_contain').style = 'width: 250px'
})

//mail validation
const inputMail = document.querySelector('.log-up___inp');
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

var mailVaild = false;
var passwordResemblanceVaild = false;
var passwordLengthValid = false;
var checkboxValid = false;

function onInputMail() {
    if (isEmailValid(inputMail.value)) {
        inputMail.style.borderColor = 'green';
        mailVaild = true;
    }
    else if (!inputMail.value) {
        inputMail.style.borderColor = 'rgb(196, 196, 196)';
        mailVaild = false;
    }
    else {
        inputMail.style.borderColor = 'red';
        mailVaild = false;
    }
}

inputMail.addEventListener('input', onInputMail);

function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
}

//password validation
function passwordResemblance() {
    if (regPassword.value == regPasswordRepeat.value && regPassword.value) {
        regPasswordRepeat.style.borderColor = 'green';
        passwordResemblanceVaild = true;
    }
    else if (!regPasswordRepeat.value) {
        regPasswordRepeat.style.borderColor = 'rgb(196, 196, 196)';
        passwordResemblanceVaild = false;
    }
    else {
        regPasswordRepeat.style.borderColor = 'red';
        passwordResemblanceVaild = false;
    }
}

function passwordLength() {
    if (regPassword.value.length >= 6) {
        regPassword.style.borderColor = 'green';
        passwordLengthValid = true;
    }
    else if (!regPassword.value) {
        regPassword.style.borderColor = 'rgb(196, 196, 196)';
        passwordLengthValid = false;
    }
    else {
        regPassword.style.borderColor = 'red';
        passwordLengthValid = false;
    }
}

regPasswordRepeat.addEventListener('input', passwordResemblance);
regPasswordRepeat.addEventListener('input', passwordLength);
regPassword.addEventListener('input', passwordLength);
regPassword.addEventListener('input', passwordResemblance);

//checkbox
function checkboxCheck() {
    if (regCheckbox.checked) {
        checkboxValid = true
    }
    else [
        checkboxValid = false
    ]
}

regCheckbox.addEventListener('change', checkboxCheck)

//submit
// logUpSubmit.addEventListener('click', () => {
//     if (mailVaild == true && passwordResemblanceVaild == true && passwordLengthValid == true && checkboxValid == true) {
//         alert('ok')
//     }
//     else {
//         alert('error')
//     }
// })

document.querySelector('.log-up___form').addEventListener('submit', function(evt) {
    evt.preventDefault();
    if(mailVaild == false && passwordResemblanceVaild == false && passwordLengthValid == false && checkboxValid == false) {
      alert('Валидация не пройдена!');
      return;
    }
    else {
        alert('Валидация пройдена!');
        this.submit();
    } 
  });
