const firstPage = document.querySelector(".login-page-for-admin");
const inputs = document.querySelectorAll(".login-page-for-admin input");
const adminButton = document.querySelector(".login-page-for-admin button");
let user = document.querySelector(".login-page-for-admin .username")
let userPassword = document.querySelector(".login-page-for-admin .userpassword")
let warning = document.querySelector(".login-page-for-admin h1");

const secondPage = document.querySelector(".login-page-for-user");
const userButton = document.querySelector(".login-page-for-user button")
let secondWarning = document.querySelector(".login-page-for-user .userwarning")
let inputsUser = document.querySelectorAll(".user-input");

const thirdPage = document.querySelector(".output")
let outputValues = document.querySelectorAll(".output-value")
let thirdWarning = document.querySelector(".output .third-warning")
// let outputName = document.querySelector(".output-name")
// let outputSurName = document.querySelector(".output-surname")
// let outputProblem = document.querySelector(".output-problem")
// const inputValue = {};
// inputs.forEach((input) => {
//     input.addEventListener("change", function(){
//         const {name: inputName, value} = this;
//         inputValue[inputName] = value;
//     })
// })


adminButton.addEventListener("click", (e) => {
    e.preventDefault();
    loginAdmin();
})


userButton.addEventListener("click", (e)=>{
    e.preventDefault();
    let arr = []
    thirdPage.style.display = "block"
    secondPage.style.display = "none"

    inputsUser.forEach(input => {
        if(input.value == " "){
            thirdWarning.innerHTML = "something went wrong"
        }        
        else{
            // let arr = []
            // thirdPage.style.display = "block"
            // secondPage.style.display = "none"
            arr.push(input.value)
        }
    })

    outputValues.forEach((outputValue,idx) => {
        outputValue.innerText += " " + arr[idx]
    })

    // outputName.innerText += arr[0]
    // outputSurName.innerText += arr[1]
    // outputProblem.innerText += arr[2]
})






function loginUser(){
    let arr = [];
    inputsUser.forEach((input) => {
        if(input != ""){
            arr.push(input.value)
        }
    })
}



function loginAdmin(){
    if(user.value=="samedusa" && userPassword.value=="gencem777")
    {
        firstDisplayOut();
    }
    else
    {
        warning.innerHTML = "invalid username or password!"
    }
}

function firstDisplayOut() {
    setTimeout(function(){ firstPage.style.display='none';firstPage.style.webkitTransition  = 'opacity 2s ease-in-out';
    firstPage.style.transition = 'opacity 2s ease-in-out';secondPage.style.display = "block"}, 1000);
}