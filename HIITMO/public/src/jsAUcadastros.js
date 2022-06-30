import {usuarios }from './service.js'

const criarUser = (item) => {

    return `
    <div id="alunos">
            <h1>${item.nome}</h1>
            <h4>${item.cpf}</h4>
            <h4>${item.matricula}</h4>
            <p class="msg-vazia">Texto teste</p>
        </div>
    `
}


usuarios.get().then((querySnapshot) => {
    
    querySnapshot.docks.map(()=>{ item.data()})
    querySnapshot.forEach((doc) =>{
        criarUser(doc.data())
        console.log('$doc.id} => ${doc.data()');
    });
});