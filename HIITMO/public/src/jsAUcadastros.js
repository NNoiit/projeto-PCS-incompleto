import {usuarios }from './service.js'

const criarUser = (usuario) => {

    return `
    `
}


usuarios.get().then((querySnapshot) => {
    
    querySnapshot.docks.map(()=>{ item.data()})
    querySnapshot.forEach((doc) =>{
        criarUser(doc.data())
        console.log('$doc.id} => ${doc.data()');
    });
});