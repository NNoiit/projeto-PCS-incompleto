firebase.auth().onAuthStateChanged(user =>{
    if(user){
        pegarInfoDB(user);
    }
});

firebase.firestore().collection("series").get().then((snapshot) =>{
    const serie = snapshot.docs.map((doc) => ({...doc.data(), uid: doc.id}));
    
    mostraSerie(serie);

}).catch(error =>{
        console.log("erro" , error);
})