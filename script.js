const input = document.getElementById('input')
const email = document.getElementById('email')
const pass1 = document.getElementById('pass1')
const pass2 = document.getElementById('pass2')
const form = document.getElementById('form')
var a = 0;
form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
    if (a == 4) {
        isFormValid()
    }
    else {
        a = 0}
})
const checkInputs = () => {
    userName = input.value.trim();
    emailValue = email.value.trim();
    passedValue = pass1.value.trim();
    passed2Value = pass2.value.trim();

    if (userName === "") {
        setError(input, 'user cannot be blank')
    }
    else {
        setSuccess(input)
        // document.write(input.value)
    }
    if (emailValue === "") {
        setError(email, 'user cannot be blank')
    }
    else if (!isEmail(emailValue)) {
        setError(email, 'not a valid email')
    }
    else {
        setSuccess(email)
    }
    //password1

    var passlen1 = passedValue.length < 8
    var passlen2 = passedValue.length < 8
    if (passedValue === '') {
        setError(pass1, 'please enter the password')
    }
    else if (passlen1) {
        setError(pass1, 'please enter the password atleast 8 digits')
    }
    else {
        setSuccess(pass1)
    }
    //password2
    if (passed2Value === "") {
        setError(pass2, 'please enter the password')
    }
    else if (passlen2) {
        setError(pass2, 'please enter the password atleast 8 digits')
    }
    else if (passlen1 !== passlen2) {
        setError(pass2, 'Enter the same password')
    }
    else {
        setSuccess(pass2)


    }
}
const setError = (input, message) => {
   
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    formControl.className = 'formcontrol wrong'
    small.innerText = message

}
const setSuccess = (input) => {
    a += 1;
    const formControl = input.parentElement;
    formControl.className = 'formcontrol success'
}

const isEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
isFormValid = () => {
    document.write("<center>")
    document.write("Enter the Name: "+input.value+"<br>")
    document.write("Enter the Email Id: "+email.value+"<br>")
    document.write("Password1: "+pass1.value+"<br>")
    document.write("Password2: "+pass2.value+"<br>")
}
