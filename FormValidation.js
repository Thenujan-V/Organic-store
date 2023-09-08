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
    if(length > min){
        errorInput(input,`${getName(input)} is must be atleast less than ${max} charecters`)

    }
}
function checkConfirmation(password,confirmPassword){
    let passwordValue = password.value.trim();
    let confirmPasswordValue = confirmPassword.value.trim();
    if(passwordValue !== confirmPasswordValue){
        errorInput(confirmPassword,`password not match`)
    }
    
}
function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    return (false)
}
function checkEmail(input){
    if(ValidateEmail(input.value.trim())){
        errorInput(input,`This is not a mail id`)
    }
}
button.addEventListener("click", (e) => {
    e.preventDefault();
    checkRequired([fullName,mail,phoneNo,password,confirmPassword]);
    lengthPassword(password,8,12);
    checkConfirmation(password,confirmPassword);
    checkEmail(mail)
})  