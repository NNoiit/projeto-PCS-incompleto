console.log("antes da func");

firebase.auth().onAuthStateChanged(function(usser){
    if(user){
        window.location.href = "../perfil.html";
    }
})

function login() {
    
    let email = document.querySelector("#login");
    let password = document.querySelector("#senhaLogin");
    console.log("pegou os valores");

    firebase.auth().signInWithEmailAndPassword(email.value, password.value).then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("logou");
        window.location.href = "../perfil.html";
        // ...
    })
    .catch((error) => {
        alert("Erro");
        console.log("falho", error.code);
    });
}
function erroLogin(error) {
    if(error.code == "auth/user-not-found"){
        return "Usuario não encontrado";
    }

    if(error.code == "auth/wrong-password"){
        return "Senha incorreta";
    }
    return error.message;
}

function recuperarSenha(){
    firebase.auth().sendPasswordResetEmail(email.value).then(() => {
        // Email sent.
        alert("Email enviado");
    }).catch(error => {
        // An error happened.
        alert(erroLogin(error));
    });
}

/*function verificaLogin() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            console.log("te amo Puala, esta logado");
            window.location.href = "../perfil.html";
        } else {
            // No user is signed in.
            console.log("te amo Puala, não esta logado");
        }
    });
}*/


 