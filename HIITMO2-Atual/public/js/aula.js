//pegando o form de aula
const form = document.querySelector("[id=form-aula]");

function mostraAula(aula){

    aula.forEach(aula => {
        console.log(aula);
        let bloco = document.querySelector('.bloco-aula');
        let div = document.createElement('div');
        div.id = aula.uid;
        
        //criando os botões
        let btnAlterar = document.createElement('button');
        btnAlterar.innerHTML = "Alterar";

        let btnExcluir = document.createElement('button');
        btnExcluir.innerHTML = "Excluir";
        

        div.innerHTML = `
            <h1>${aula.exercicio}</h1>
        `
        bloco.append(div);
        bloco.appendChild(btnAlterar);
        bloco.appendChild(btnExcluir);

        div.addEventListener('click', () =>{
            
        })
        //especificando o evento de click para o botão editar
        btnAlterar.addEventListener('click', () =>{
            window.location.href = "../cadastro-aula.html?uid=" + aula.uid;
        });

        //Exclui a div-usuario
        btnExcluir.addEventListener('click', (event) =>{
            event.stopPropagation();

            confirmDelet(aula);
        });
    });

}

//passando para a pagina de cadastro de aula
form.addEventListener('submit', (event)=>{

    event.preventDefault();
    let exercicio = form.exercicio.value, cpf = form.cpf.value, aula = form.aula.value, repeticoes = form.repeticoes.value;
    const dados = {
        cpf: cpf,
        exercicio: exercicio,
        aula: aula,
        repeticoes: repeticoes
    }
    checkCpf(dados);
})

//////////////////////////////////////////////////////////////////

//funções para controle da pagina
document.getElementById("btn-novaaula").onclick = function() {
    let divaula = document.getElementsByClassName("bloco-aula");
    divaula[0].style.display = 'none';

    let divPrincipal = document.getElementById("div-form-aula");
    divPrincipal.style.display = 'block';
}

function checkCpf(dados){

    firebase.firestore().collection('user').where('cpf', '==', cpf.value).get().then((snapshot) =>{
        const user = snapshot.docs.map((doc) => doc.data());
        if(user.length > 0){
            console.log("cpf ja cadastrado");
            firebase.firestore().collection('aulas').add(dados).then(() =>{
                console.log("cadastrada");
                window.location.href = "../aula.html";
            }).catch(()=>{
                console.log("falhou");
            });
        }else{
            console.log("cpf não cadastrado");
            return true;
        }
    })

}

//função para deletar a aula selecionada
function removerAluno(aula){
    firebase.firestore().collection('user').doc(aula.uid).delete().then(()=>{
        document.getElementById(aula.uid).remove();
    })
}

//confirma o delete
function confirmDelet(aula){
    const showRemover = confirm(`Deseja excluir o ${aula.nome}`);

    if(showRemover){
        removerAluno(aula);
    }
}