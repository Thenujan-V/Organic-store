let form = document.getElementById('forms');
let button = document.getElementById('btn');
let fullName = document.getElementById('fullname');
let mail = document.getElementById('mail');
let phoneNo = document.getElementById('pno');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmpassword');
//let formGroup = document.getElementById('form-group');

function checkRequired(inputs){
    inputs.forEach((input) => {
        if(input.value.trim() === ""){
            errorInput(input, `${getName(input)} is Required`);
        }
        else if(input.value.trim()){
            success(input);
        }
    })
}

function errorInput(input,message){
    let formGroup = input.parentElement;
    formGroup.className = "form-group error";
    formGroup.querySelector("p").innerText = message;
}
function getName(input){
    return input.getAttribute("data-name");
}
function lengthPassword(input,min,max){
    let length = input.value.trim().length;
    if(length < min){
        errorInput(input,`${getName(input)} is must be atleast greater than ${min} charecters`)
    }
    if(length > max){
        errorInput(input,`${getName(input)} is must be atleast less than ${max} charecters`)
    }
}
function checkConfirmation(password,confirmPassword){
    let passwordValue = password.value.trim();
    let confirmPasswordValue = confirmPassword.value.trim();
    if(password.value.trim() === ""){
        errorInput(password,`password is Required`)
    }
    else if(passwordValue !== confirmPasswordValue){
        errorInput(confirmPassword,`password not match`)
    }
    
    
}
function validMail(mail){
    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(mail);
}
function checkEmail(mail){
    if(mail.value.trim() === ""){
        errorInput(mail, `Email is Required`);

    }
    else if(!validMail(mail.value.trim())){
        errorInput(mail,`This is not a valid email address`);
    }
    else if(validMail(mail.value.trim())){
        success(mail);
    }
}
function success(input){
    let parentClass = input.parentElement;
    parentClass.classList.remove("error");
}
button.addEventListener("click", (e) => {
    e.preventDefault();
    checkRequired([fullName,mail,phoneNo,password,confirmPassword]);
    lengthPassword(password,8,12);
    checkConfirmation(password,confirmPassword);
    checkEmail(mail);
})  