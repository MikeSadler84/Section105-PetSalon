var userName = "Michael";
var userPass = "12345";
const usertxt = document.getElementById("userName");
const passtxt = document.getElementById("userPass");

function login(){

    console.log("Clicked");
    console.log(usertxt.value);
    console.log(passtxt.value);
    if(usertxt.value === "Michael" && passtxt.value === "12345"){
        console.log(`Hello, ${userName}! Welcome to the system.`);
        document.getElementById("main").style.display="none";
        document.getElementById("msg").innerHTML= `<h2>Welcome to the system</h2>`;
    }else{
        console.error("Your user name or password is incorrect.");
        document.getElementById("msg").innerHTML= `<p>Your user name or password is incorrect.</p>`;
    }
    clear();
}

// clear the input text

function clear(){
    passtxt.value="";
    usertxt.value="";
}