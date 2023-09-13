let form = document.getElementById('forms');
let button = document.getElementById('btn');
let fullName = document.getElementById('fullname');
let mail = document.getElementById('mail');
let phoneNo = document.getElementById('pno');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmpassword');

let validateSuccess = true;
//let formGroup = document.getElementById('form-group');

function errorInput(input,message){
    validateSuccess = false;
    //console.log(validateSuccess);
    let formGroup = input.parentElement;
    formGroup.className = "form-group error";
    formGroup.querySelector("p").innerText = message;
}
function getName(input){
    return input.getAttribute("data-name");
}
function success(input){
    validateSuccess = true;
    //console.log(validateSuccess);
    let parentClass = input.parentElement;
    parentClass.classList.remove("error");

}
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

function validateFormElements([fullName,mail,phoneNo,password,confirmPassword]){
    if(checkRequired([fullName,mail,phoneNo,password,confirmPassword])){
        return validateSuccess;
    }
    if(lengthPassword(password,8,12)){
        return validateSuccess;
    }
    if(checkEmail(mail)){
        return validateSuccess;
    }
    if(checkConfirmation(password,confirmPassword)){
        return validateSuccess;
    }
    return validateSuccess;
}   
button.addEventListener("click", (e) => {

    if(!validateFormElements([fullName,mail,phoneNo,password,confirmPassword])){
        console.log(validateSuccess)
        console.log("ok1")
        e.preventDefault();
    }
    else{
        console.log("okey2")

    }
    console.log(validateSuccess)
})
