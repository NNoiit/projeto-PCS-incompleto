firebase.auth().onAuthStateChanged(user =>{
    if(user){
      pegarInfoDB(user);  
    }
});

//pegando as informações do BD
function pegarInfoDB(email){

    firebase.firestore().collection("user").where("email", "==", email.email).get().then(snapshot =>{
        const users = snapshot.docs.map(doc => doc.data());

        infoSerie(users[0]);
        
    }).catch(error =>{
            console.log("erro" , error);
    })

}

function infoSerie(cpf){

    firebase.firestore().collection("series").where('cpf', '==', cpf.cpf).get().then((snapshot) =>{
        const serie = snapshot.docs.map((doc) => ({...doc.data(), uid: doc.id}));

        mostraSerie(serie);
        
    }).catch(error =>{
            console.log("erro" , error);
    })
}

