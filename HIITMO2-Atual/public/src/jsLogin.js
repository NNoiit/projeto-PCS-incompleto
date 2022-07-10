import { auth, db } from "./configFirebase.js";
import { getAuth, signInWithEmailAndPassword } from "./firebase/auth";


const btnLogin = document.querySelector("btn-login");

console.log("S2 Puala");

export function login(){
    
    alert("Erro");
    console.log("S2 Puala");

    let email = document.getElementById("login"), password = document.getElementById("senhalogin");
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("S2 Puala");
        // ...
    })
    .catch((error) => {
        alert("Erro");
        console.log("falho");
    });
}


 