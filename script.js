var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('form__input-name').value;

    if(name.length == 0){
       nameError.textContent = 'Name is required';
       return false;
    }
    nameError.textContent = 'valid'
    return true;
}

function validatePhoneNo (){
    var phoneNo = document.getElementById('form__input-phoneNo').value;

    if (phoneNo.length !== 11){
        phoneError.textContent = 'Phone number is required';
        return false;
    }
    if (!phoneNo.match(/^[0-9]{10}$/)){
        phoneError.textContent = 'Invalid Phone number';
        return false;
    }
    phoneError.textContent = 'Valid';
    return true;
}

function validateEmail (){
    var email = document.getElementById('form__input-email').value;

    if (email.length == 0){
        emailError.textContent = 'email is required';
        return false;
    }if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.textContent = 'Email is required';
        return false;
    }
    emailError.textContent = 'valid';
        return true;
}

function validateForm(){
    if (!validateName() || !validateEmail() || !validatePhoneNo()){
        submitError.style.display = 'block';
        submitError.textContent = 'Please, check & fix error!';
        setTimeout(function(){submitError.style.display = 'none';}, 2500);
        return false;
    }
}