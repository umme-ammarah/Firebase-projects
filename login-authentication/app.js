import { auth, createUserWithEmailAndPassword ,signInWithEmailAndPassword,onAuthStateChanged,signOut} from "./firebase.js";
import { isLogin } from "./toggleForm.js";

onAuthStateChanged(auth, (user) => {
  if (user) {
  
    const uid = user.uid;
   console.log("user sign in", user)
  } else {
    // User is signed out
    // ...
    console.log(" user  signout",user)
  }
});
//signup function
const signup = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("User signed up:", user);
          
        })
        .catch((error) => {
            console.error("Error during signup:", error.code);
        });
};

// Login function
const login = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User logged in:", user);
        window.location.href = "dashboard.html";
      })
      .catch((error) => {
        console.error("Error during login:", error.code);
      });
  };
 

  //logout

  const logOut = () => {
    console.log("Logging out..."); // Debug log
    signOut(auth)
        .then(() => {
            console.log("Successfully logged out."); // Debug log
            window.location.href = "index.html";
        })
        .catch((error) => {
            console.error("Error during logout:", error); // Log the error
        });
};


authButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission
    if (isLogin) {
      login(); // Call the login function if in login mode
    } else {
      signup(); // Call the signup function if in signup mode
    }
  });


const logOutbtn = document.getElementById("logOutbtn");
logOutbtn.addEventListener("click",logOut);