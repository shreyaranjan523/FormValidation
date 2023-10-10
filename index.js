let formData= document.querySelector(".form");
let submitButton=document.querySelector(".button");
let errorMessages=document.querySelectorAll(".error-message");
let emptyfieldMessages=document.querySelectorAll(".empty-field");
let showPasswordButton=document.querySelector(".btn");
let fnTarget, lnTarget, emailTarget, pwdTarget;

let firstName, lastName, email, password;
let field;
let fnFlag, lnFlag, emailFlag, pwdFlag;

let nameRegex = /^[a-z]+$/i;
let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
let pwdRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

for(let errorMessage of errorMessages){
    // console.log(errorMessage);
    errorMessage.classList.add("d-none");
}

for(let emptyfieldMessage of emptyfieldMessages){
    emptyfieldMessage.classList.add("d-none");
}

formData.addEventListener("keyup" , (event) => {
    event.preventDefault();
    // console.log(event.target.dataset.key);
    // console.log(event.target.value);
    // console.log(event.target);
    field=event.target.dataset.key;
    switch(field){
        case "firstName":
            firstName=event.target.value;
            fnTarget=event.target;
            break;
        case "lastName":
            lastName=event.target.value;
            lnTarget=event.target;
            break;
        case "email":
            email=event.target.value;
            emailTarget=event.target;
            break;
        case "password":
            password=event.target.value;
            pwdTarget=event.target;
            break;
        default:
            firstName = lastName = email = password = "";
            break;
    }
})

submitButton.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log(firstName, lastName, email, password);
    if(firstName){
        emptyfieldMessages[0].classList.add("d-none");
        if(!nameRegex.test(firstName)){
            errorMessages[0].classList.remove("d-none");
            fnTarget.classList.add("error");
            // console.log("Name must only contain alphabets");
            fnFlag=false;
        } 
        else{
            errorMessages[0].classList.add("d-none");
            fnTarget.classList.remove("error");
            // console.log("Good to go, we can proceed further");
            fnFlag=true;
        }
    } else{
        emptyfieldMessages[0].classList.remove("d-none");
        // Next two lines not executed, why?
        // fnTarget.classList.add("error");
        // fnFlag=false;
        // console.log("Please fill this field");
    }
    if(lastName){
        emptyfieldMessages[1].classList.add("d-none");
        if(!nameRegex.test(lastName)){
            errorMessages[1].classList.remove("d-none");
            lnTarget.classList.add("error");
            // console.log("Name must only contain alphabets");
            lnFlag=false;
        } 
        else{
            errorMessages[1].classList.add("d-none");
            lnTarget.classList.remove("error");
            // console.log("Good to go, we can proceed further");
            lnFlag=true;
        }
    } else{
        emptyfieldMessages[1].classList.remove("d-none");
        // lnTarget.classList.add("error");
        // lnFlag=false;
        // console.log("Please fill this field");
    }
    if(email){
        emptyfieldMessages[2].classList.add("d-none");
        if(!emailRegex.test(email)){
            errorMessages[2].classList.remove("d-none");
            emailTarget.classList.add("error");
            // console.log("Invalid Email ID");
            emailFlag=false;
        } 
        else{
            errorMessages[2].classList.add("d-none");
            emailTarget.classList.remove("error");
            // console.log("Good to go, we can proceed further");
            emailFlag=true;
        }
    } else{
        emptyfieldMessages[2].classList.remove("d-none");
        // emailTarget.classList.add("error");
        // emailFlag=false;
        // console.log("Please fill this field");
    }
    if(password){
        emptyfieldMessages[3].classList.add("d-none");
        if(!pwdRegex.test(password)){
            errorMessages[3].classList.remove("d-none");
            pwdTarget.classList.add("error");
            // console.log("Invalid Password format");
            pwdFlag=false;
        } 
        else{
            errorMessages[3].classList.add("d-none");
            emailTarget.classList.remove("error");
            // console.log("Good to go, we can proceed further");
            pwdFlag=true;
        }
    } else{
        emptyfieldMessages[3].classList.remove("d-none");
        // pwdTarget.classList.add("error");
        // pwdFlag=false;
        // console.log("Please fill this field");
    }

    if(fnFlag && lnFlag && emailFlag && pwdFlag){
        fnTarget.value=lnTarget.value=emailTarget.value=pwdTarget.value = "";
        window.location.href= "/success.html";
    }
});

showPasswordButton.addEventListener("click", (event)=>{
    event.preventDefault();
    if (pwdTarget.getAttribute("type")=="text"){
        pwdTarget.setAttribute("type", "password")
    } else{
        pwdTarget.setAttribute("type", "text");
    }
})