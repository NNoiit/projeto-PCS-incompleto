firebase.firestore().collection("series").get().then((snapshot) =>{
    const serie = snapshot.docs.map((doc) => ({...doc.data(), uid: doc.id}));
    mostraSerie(serie, "instrutor");

}).catch(error =>{
        console.log("erro" , error);
})

firebase.firestore().collection("aulas").get().then((snapshot) =>{
    const aula = snapshot.docs.map((doc) => ({...doc.data(), uid: doc.id}));
    
    mostraAula(aula, "instrutor");
}).catch(error =>{
        console.log("erro" , error);
})