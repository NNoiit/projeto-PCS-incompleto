function verificarLogin() {

    /*if(firebase.auth().currentUser){
    firebase.auth().signOut()
    } 
    const email = document.getElementById("login").value;
    const senha = document.getElementById("senhalogin").value;

    firebase.auth().signinWithEmailAndPassword(email, senha).then(() => {
        swal.fire({
          title: "login"
        }).then( () => {
            setTimeout( () => {
                window.location.replace("perfil.html")
            })
        })
    }).catch((error) => {
        swal.fire({
            title: "Revise seus dados"
        })
    })*/

    var auth = null;
    firebase.auth().signinWithEmailAndPassword(document.getElementById("login"), document.getElementById("senhalogin")).then(function(user){
        alert("logado")
        auth = user;

    }).catch(function(error){
        alert("falho");
    });


    /*function tipoUsuario(){
        if(login == "Admin"){
            div = document.getElementsByClassName("aluno");
            div.style.display = "none";

        }
    }*/
    //localStorage.getItem();
}