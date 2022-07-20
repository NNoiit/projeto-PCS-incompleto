firebase.auth().onAuthStateChanged(user =>{
    if(user){
      pegarInfoDB(user);  
    }
});

//pegando as informações do BD
function pegarInfoDB(email){

    firebase.firestore().collection("user").where("email", "==", email.email).get().then(snapshot =>{
        const users = snapshot.docs.map(doc => doc.data());
        console.log(users);
        console.log(users[0].tipo);

        infoSerie(users[0]);
        infoAula(users[0]);
        
    }).catch(error =>{
            console.log("erro" , error);
    })

}

function infoSerie(cpf){
    firebase.firestore().collection("series").where('cpf', '==', cpf.cpf).get().then((snapshot) =>{
        const serie = snapshot.docs.map((doc) => ({...doc.data(), uid: doc.id}));
        let btnEscondido = document.getElementsById("btn-novaSerie");
    btnEscondido.style.display = 'none';

    mostraSerie(serie);
        
    }).catch(error =>{
            console.log("erro" , error);
    })
}

function infoAula(cpf){
    firebase.firestore().collection("aulas").where('cpf', '==', cpf.cpf).get().then((snapshot) =>{
        const aulas = snapshot.docs.map((doc) => ({...doc.data(), uid: doc.id}));
        let btnEscondido = document.getElementsById("btn-novaSerie");
    btnEscondido.style.display = 'none';

    mostraAula(aulas);
        
    }).catch(error =>{
            console.log("erro" , error);
    })
}