//pegando o form de serie
const form = document.querySelector("[id=form-serie]");

function mostraAula(aula, tipo){

    aula.forEach(aula => {
    
        let bloco = document.querySelector('.bloco-serie');
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
        if(tipo == "instrutor"){
            bloco.appendChild(btnAlterar);
            bloco.appendChild(btnExcluir);
        }

        div.addEventListener('click', () =>{
            
        })
        //especificando o evento de click para o botão editar
        btnAlterar.addEventListener('click', () =>{
            document.getElementsByClassName("bloco-serie")[0].style.display = 'none';

            document.getElementById("div-form-serie").style.display = 'block';

            pegarDadoAula(aula.uid);
        });

        //Exclui a div-usuario
        btnExcluir.addEventListener('click', (event) =>{
            event.stopPropagation();

            confirmDelet(aula, "aula");
        });
    });

}

function mostraSerie(serie, tipo){

    serie.forEach(serie => {
    
        let bloco = document.querySelector('.bloco-serie');
        let div = document.createElement('div');
        div.id = serie.uid;
        
        //criando os botões
        let btnAlterar = document.createElement('button');
        btnAlterar.innerHTML = "Alterar";

        let btnExcluir = document.createElement('button');
        btnExcluir.innerHTML = "Excluir";
        

        div.innerHTML = `
            <h1>${serie.exercicio}</h1>
        `
        bloco.append(div);

        if(tipo == "instrutor"){
            bloco.appendChild(btnAlterar);
            bloco.appendChild(btnExcluir);
        }

        div.addEventListener('click', () =>{
            
        })
        //especificando o evento de click para o botão editar
        btnAlterar.addEventListener('click', () =>{
            document.getElementsByClassName("bloco-serie")[0].style.display = 'none';

            document.getElementById("div-form-serie").style.display = 'block';

            pegarDadoSerie(serie.uid);
        });

        //Exclui a div-usuario
        btnExcluir.addEventListener('click', (event) =>{
            event.stopPropagation();

            confirmDelet(serie, "serie");
        });
    });

}

//passando para a pagina de cadastro de serie
form.addEventListener('submit', (event)=>{

    event.preventDefault();

    let exercicio = form.exercicio.value, cpf = form.cpf.value, serie = form.serie.value, repeticoes = form.repeticoes.value;
    uid = form.uid.value;
    console.log(uid);
    if(uid == "null"){
        const dados = {
            cpf: cpf,
            exercicio: exercicio,
            serie: serie,
            repeticoes: repeticoes
        }
        console.log("0" + dados);
        checkCpf(dados, uid);
    } else {
            dados = {
            exercicio: exercicio,
            serie: serie,
            repeticoes: repeticoes
            }
            console.log(dados);
        checkCpf(dados, uid);
    }
})

//////////////////////////////////////////////////////////////////

//funções para controle da pagina
document.getElementById("btn-novaSerie").onclick = function() {
    let divSerie = document.getElementsByClassName("bloco-serie");
    divSerie[0].style.display = 'none';

    let divPrincipal = document.getElementById("div-form-serie");
    divPrincipal.style.display = 'block';
}

//checa se o do aluno cpf existe e cadastra
function checkCpf(dados, uid){

    firebase.firestore().collection('user').where('cpf', '==', cpf.value).get().then((snapshot) =>{
        const user = snapshot.docs.map((doc) => doc.data());
        if(user.length > 0){
            console.log("cpf ja cadastrado");

            if(uid == "null"){
                console.log("puala");
                firebase.firestore().collection('series').add(dados).then(() =>{
                    console.log("cadastrada");
                    window.location.reload();
                }).catch(()=>{
                    console.log("falhou1");
                });
            } else {
                firebase.firestore().collection('series').doc(uid).update(dados).then(() =>{
                    console.log("atualizada");
                    window.location.reload();
                }).catch(()=>{
                    console.log("falhou2");
                });
            }

        }else{
            console.log("cpf não cadastrado");
            return true;
        }
    })

}

//função para pegar os dados no db
function pegarDadoSerie(uid){

    firebase.firestore().collection("series").doc(uid).get().then(doc =>{

        if(doc.exists){
            preencherSerie(doc.data(), uid);
        }else{
            console.log("Não existe");
            window.location.href = "../instrutores.html";
        }
    }).catch(error =>{
            console.log("erro" , error);
    }
    )
}

//função para pegar os dados no db
function pegarDadoAula(uid){

    firebase.firestore().collection("aula").doc(uid).get().then(doc =>{

        if(doc.exists){
            preencherAula(doc.data());
        }else{
            console.log("Não existe");
            window.location.href = "../instrutores.html";
        }
    }).catch(error =>{
            console.log("erro" , error);
    }
    )
}

function preencherSerie(dados, uid){
    document.getElementById("cpf").value = dados.cpf;
    document.getElementById("cpf").disabled = true;

    document.getElementById("exercicio").value = dados.exercicio;
    document.getElementById("repeticoes").value = dados.repeticoes;
    document.getElementById("serie").value = dados.serie;
    document.getElementById("uid").value = uid;

}

//função para deletar a serie selecionada
function removerSerie(serie){
    firebase.firestore().collection('series').doc(serie.uid).delete().then(()=>{
        document.getElementById(serie.uid).remove();
    })
}

//função para deletar a aula selecionada
function removerAula(aula){
    firebase.firestore().collection('aulas').doc(aula.uid).delete().then(()=>{
        document.getElementById(aula.uid).remove();
    })
    window.location.reload();
}

//confirma o delete
function confirmDelet(dado, tipo){
    const showRemover = confirm(`Deseja excluir o ${dado.nome}`);

    if(showRemover){
        if(tipo == "serie")
        removerSerie(dado);

        if(tipo == "aula")
        removerAula(dado);
    }
}