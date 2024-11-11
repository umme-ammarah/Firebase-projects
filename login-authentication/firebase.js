
    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
    import { getAuth , createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

    const firebaseConfig = {
      apiKey: "AIzaSyA7LIbcFBNmsFds9jjcM4cLAcVMorJPgf8",
      authDomain: "login-authentication-f009c.firebaseapp.com",
      projectId: "login-authentication-f009c",
      storageBucket: "login-authentication-f009c.appspot.com",
      messagingSenderId: "211140690108",
      appId: "1:211140690108:web:363aec4cd097aa6401d0b9"
    };
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);


  export{auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut}