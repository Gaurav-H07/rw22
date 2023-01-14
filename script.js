let emailInput = document.getElementById('email')
let passwordInput = document.getElementById('pwd')
let button = document.getElementById('btn')
let errorDiv = document.getElementById('error')
let errorDiv2 = document.getElementById('errorTwo')




// for calling the passowrdInput
passwordInput.addEventListener('keypress', validate2)
// for calling the emailInput
emailInput.addEventListener('keypress',validate);

// validate function for email
function validate(){
    let email= emailInput.value;
    let password= passwordInput.value;
    if (email.length > 2 && email.includes("@") && email.includes('.') ){
            
            errorDiv.innerText = "All Good to go"
            errorDiv.style.color = "green";
        } 

    else {
       
        errorDiv.innerText = "Make sure email has more than 3 characters and has @ and a ."
            errorDiv.style.color = "red";
    }
}

//  validate2 function for password 
function validate2(){
    let email= emailInput.value;
    let password= passwordInput.value;
  
        if (password.length < 8) {
            errorDiv2.innerText = "Make sure password has more than 8 characters."
            errorDiv2.style.color = "red";
    }

    else {
            errorDiv2.innerText = "All Good to go"
            errorDiv2.style.color = "green ";
    }
}
// function for showing confirm window and it's conditions

function ConfirmWindow() {

if (confirm("Do You Want to Submit?") == true) {
 
    alert("successful signup!")
}
 else {
    document.getElementById("myForm").reset();
}
}

// && validate()==true && validate2()==true
