



//Forms
const registrationForm =  document.querySelector('form');
const loginForm =  document.getElementById('logForm');
//Form inputs

const regPassword = document.getElementById('regpass');
const regCPassword = document.getElementById('regcpass');
const regUsername = document.getElementById('regusername');
const regEmail = document.getElementById('regemail');
const regBtn = document.getElementById('regBtn');
const logPassword = document.getElementById('logpass');
const logEmail = document.getElementById('logemail');
const logBtn = document.getElementById('logbtn');

user_details = [];




 registrationForm.addEventListener('submit', e =>{
    e.preventDefault();

    if(regPassword.value === regCPassword.value ){
        var user = {
            "User name" : regUsername.value,
            "email" : regEmail.value,
            "password" : regPassword.value  
           };
       
           
       
     
           user_details.push(JSON.stringify(user));
           
           localStorage.setItem('information', user_details)

           registrationForm.reset();
           window.location.href ="./login.html";
     
    }else{
        alert("Password mismatch")
        regCPassword.classList.add("border-danger")
    }

   
    

})




 
loginForm.addEventListener('submit',  e=>{
    e.preventDefault();

  let data =  JSON.parse(localStorage.getItem('information')) 
  
    console.log(data)
    console.log(data.email)

    if(logEmail.value === data.email && logPassword.value === data.password){
        window.location.href = "./index.html";
    }else{
        alert("User does not exist")
        window.location.href = "./register.html";
    }
   


})