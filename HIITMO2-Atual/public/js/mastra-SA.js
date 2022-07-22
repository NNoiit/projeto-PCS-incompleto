function mostraAula(aula, tipo){

    aula.forEach(aula => {
    
        let bloco = document.querySelector('.bloco-aula');
        let div = document.createElement('div');
        div.id = aula.uid;
        
        //criando os botões
        let btnAlterar = document.createElement('button');
        btnAlterar.innerHTML = "Alterar";

        let btnExcluir = document.createElement('button');
        btnExcluir.innerHTML = "Excluir";
        
        let btnInscrever = document.createElement('button');
        btnInscrever.innerHTML = "+";

        div.innerHTML = `
            <h1>${aula.aula}</h1>
            <h4>${aula.date}</h4>
            <h2>${aula.lotacao}</h2>
        `
        bloco.append(div);
        
        if(tipo == "instrutor"){
            bloco.appendChild(btnAlterar);
            bloco.appendChild(btnExcluir);
        } else if(tipo == "aluno"){
            bloco.appendChild(btnInscrever);
        }

        div.addEventListener('click', () =>{
            
        })

        //
        btnInscrever.addEventListener('click', () =>{
            inscreverAula(cpf);
        })

        //especificando o evento de click para o botão editar
        btnAlterar.addEventListener('click', () =>{
            document.getElementsByClassName("bloco-aula")[0].style.display = 'none';

            document.getElementById("div-form-aula").style.display = 'block';

            pegarDadoAula(aula.uid);
        });

        //Exclui a div-usuario
        btnExcluir.addEventListener('click', (event) =>{
            event.stopPropagation();

            confirmDelet(aula);
        });
    });

}


//Função para pegar os dado no db apartir do uid
function pegarDadoAula(uid){
    firebase.firestore().collection("aulas").doc(uid).get().then(doc =>{

        if(doc.exists){
            preencherAula(doc.data(), uid);
        }else{
            console.log("Não existe");
            window.location.href = "../instrutores.html";
        }
    }).catch(error =>{
            console.log("erro" , error);
    }
    )
}

//
function inscreverAula(cpf){}

//////////////////////////////////////////

//mostra a series
function mostraSerie(serie){

    serie.forEach(serie => {
    
        let bloco = document.querySelector('.bloco-serie');
        let div = document.createElement('div');
        div.id = serie.uid;
        
        //criando os botões
        let btnInscrever = document.createElement('button');
        btnInscrever.innerHTML = "+";
        
        div.innerHTML = `
            <h1>${serie.serie}</h1>
        `
        bloco.append(div);
        bloco.appendChild(btnInscrever);

        div.addEventListener('click', () =>{
            console.log("click da div funfando");
        });
        //especificando o evento de click para o botão editar

    });

}

//função para pegar os dados no db apartir do uid
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

