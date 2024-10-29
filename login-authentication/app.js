import { auth,createUserWithEmailAndPassword } from "./firebase.js"; 
let signup = ()  =>{
    let email = document.getElementById("InputEmail");
    let password = document.getElementById("InputPassword");
    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((res) => {
    console.log("user", res.user)
  })
  .catch((error) => {
   console.log(error.code)
  });

}
let signupbtn = document.getElementById("signupbtn");
signupbtn.addEventListener("click",signup)