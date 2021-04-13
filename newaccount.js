let strengthMeter = document.getElementById('passwordStrengthMeter');
let strengthText = document.getElementById('passwordStrengthText');
let password = document.getElementById('password');

// This function check whether the specified input field is empty or not
// Return true if input have some value in it
function basicValidation(input,messageId){
    let = validationMessage = document.getElementById(messageId);
    if(input.value.trim().length === 0){
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        validationMessage.innerText = 'This field can\'t be empty';
        return false;
    }
    else{
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        validationMessage.innerText = '';
        return true;
    }
}

function phoneValidation(input,messageId){
    let = validationMessage = document.getElementById(messageId);
    let regExp1 = /^([0-9]{10})$/;                                          //eg: 0123456789
    let regExp2 = /^([0-9]{3})([\-]{1})([0-9]{3})([\-]{1})([0-9]{4})$/;     //eg: 012-345-6789
    let regExp3 = /^([0-9]{3})([\.]{1})([0-9]{3})([\.]{1})([0-9]{4})$/;     //eg: 012.345.6789
    let regExp4 = /^([0-9]{3})([\ ]{1})([0-9]{3})([\ ]{1})([0-9]{4})$/;     //eg: 012 345 6789
    if(input.value.trim().length===0){
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        validationMessage.innerText = 'This field can\'t be empty';
        return false;
    }
    // If phone number does not match all of the four formats, return false
    else if(!regExp1.test(input.value) && !regExp2.test(input.value) && !regExp3.test(input.value) && !regExp4.test(input.value)){
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        validationMessage.innerText = 'Enter a valid 10 digit phone number';
        return false;
    }
    else{
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        validationMessage.innerText = '';
        return true;
    }
}

function emailValidation(input,messageId){
    let = validationMessage = document.getElementById(messageId);
    // Username can include a-z, A-Z, 0-9, . and -
    // Fisrt and last characters of username should be alphanumeric
    // No consecutive . or - are allowed
    // @ separates username and domain name
    // domain name can include a-z, A-Z, 0-9 and -
    // . separates domain name and primary extension
    // Fisrt and last characters of domain name should be alphanumeric
    // Extension can include a-z and A-Z
    // Extension should have 2 or 3 characters
    // Secondary extension is optional
    // . separates primary and secondary extensions
    let regExp = /^(?!.*[-.@]{2})([a-zA-Z0-9]{1})([a-zA-Z0-9\.-]+)?\@([a-zA-Z0-9\-]+)\.([a-zA-Z]{2,3})(\.[a-zA-Z]{2,3})?$/;
    if(input.value.trim().length===0){
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        validationMessage.innerText = 'This field can\'t be empty';
        return false;
    }
    else if(!regExp.test(input.value)){
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        validationMessage.innerText = 'Enter a valid e-mail id';
        return false;
    }
    else{
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        validationMessage.innerText = '';
        return true;
    }
}

// Password should have atleast 8 charactors
// Mix of lower case, upper case, numbers and symbols
// Passwords can not start or end with blank space
function passwordValidation(input,messageId){
    let = validationMessage = document.getElementById(messageId);
    let strength;
    let strengthExp =  {
        0: "",
        1: "Bad.",
        2: "Weak.",
        3: "Good.",
        4: "Strong."
    }
    let regExpLowerCase = /[a-z]/;
    let regExpUpperCase = /[A-Z]/;
    let regExpNumber = /[0-9]/;
    let regExpSymbol = /[!-/:-@[-`{-~]/     //ASCII ranges 33-47, 58-64, 91-96 and 123-126 represents symbols
    if(input.value.trim().length === 0){
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        validationMessage.innerText = 'This field can\'t be empty';
        strengthMeter.value = 0;
        strengthText.innerText = 'Strength: ' + strengthExp[strengthMeter.value];
        return false;
    }
    else if(input.value.length < 8){
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        validationMessage.innerText = 'Password should have 8 or more characters';
        strengthMeter.value = 1;
        strengthText.innerText = 'Strength: ' + strengthExp[strengthMeter.value];
        return false;
    }
    else if(input.value[0] == ' ' || input.value[input.value.length-1] == ' '){
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        validationMessage.innerText = 'Password can not start or end with blank space';
        strengthMeter.value = 2;
        strengthText.innerText = 'Strength: ' + strengthExp[strengthMeter.value];
        return false;
    }
    else if(!input.value.match(regExpLowerCase)){
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        validationMessage.innerText = 'Password should have atleast one lower case letter';
        strengthMeter.value = 2;
        strengthText.innerText = 'Strength: ' + strengthExp[strengthMeter.value];
        return false;
    }
    else if(!input.value.match(regExpUpperCase)){
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        validationMessage.innerText = 'Password should have atleast one upper case letter';
        strengthMeter.value = 2;
        strengthText.innerText = 'Strength: ' + strengthExp[strengthMeter.value];
        return false;
    }
    else if(!input.value.match(regExpNumber)){
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        validationMessage.innerText = 'Password should have atleast one number';
        strengthMeter.value = 2;
        strengthText.innerText = 'Strength: ' + strengthExp[strengthMeter.value];
        return false;
    }
    else if(!input.value.match(regExpSymbol)){
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        validationMessage.innerText = 'Password should have atleast one symbol';
        strengthMeter.value = 2;
        strengthText.innerText = 'Strength: ' + strengthExp[strengthMeter.value];
        return false;
    }
    else{
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        validationMessage.innerText = '';
        strength = zxcvbn(input.value);     //Calculate password strength
        strengthMeter.value = strength.score;
        strengthText.innerText = 'Strength: ' + strengthExp[strengthMeter.value] + ' ' + strength.feedback.warning;
        return true;
    }
}

function showStrengthStat(){
    strengthMeter.hidden = false;
    strengthText.hidden = false;
}

function hideStrengthStat(){
    strengthMeter.hidden = true;
    strengthText.hidden = true;
}

// Check whether repeat password field is same as password field
function repeatPasswordValidation(input,messageId){
    let = validationMessage = document.getElementById(messageId);
    if(input.value.trim().length === 0){
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        validationMessage.innerText = 'This field can\'t be empty';
        return false;
    }
    else if(input.value !== password.value){
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        validationMessage.innerText = 'Passwords don\'t match';
        return false;
    }
    else{
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        validationMessage.innerText = '';
        return true;
    }
}

// Toggle password display
function togglePassword(field){
    let pwd = document.getElementById('password');
    let repeatPwd = document.getElementById('repeatPassword');
    if(field.getAttribute('toggleStat') == 'hide'){
        field.setAttribute('toggleStat', 'show');
        field.innerHTML = 'Show password <i class="far fa-eye"></i>';
        if(pwd != null){
            pwd.type = 'text';
        }
        if(repeatPwd != null){
            repeatPwd.type = 'text';
        }
    }
    else{
        field.setAttribute('toggleStat', 'hide');
        field.innerHTML = 'Show password <i class="far fa-eye-slash"></i>';
        if(pwd != null){
            pwd.type = 'password';
        }
        if(repeatPwd != null){
            repeatPwd.type = 'password';
        }
    }
}

// Validate all fields in sign up form
function signupValidation(form){
    let fnameVal = basicValidation(form.fname, 'fnameValidationMessage');
    let snameVal = basicValidation(form.sname, 'snameValidationMessage');
    let phoneVal = phoneValidation(form.phone, 'phoneValidationMessage');
    let emailIdVal = emailValidation(form.emailId, 'emailIdValidationMessage');
    let pwdVal = passwordValidation(form.password, 'passwordValidationMessage');
    let repeatPwdVal = repeatPasswordValidation(form.repeatPassword, 'repeatPasswordValidationMessage');
    // If any of the input form validations failed, return false 
    if(!fnameVal || !snameVal || !phoneVal || !emailIdVal ||!pwdVal || !repeatPwdVal){
        return false;
    }
    else{
        return true;
    }
}

// Validate all fields in sign in form
function signinValidation(form){
    let emailIdVal = emailValidation(form.emailId, 'emailIdValidationMessage');
    let pwdVal = basicValidation(form.password, 'passwordValidationMessage');   // Only basic validation for password in sign in form.
    // If any of the input form validations failed, return false 
    if(!emailIdVal ||!pwdVal){
        return false;
    }
    else{
        return true;
    }
}