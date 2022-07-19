<<<<<<< HEAD
if(!verificaCadastro()){
    const email= pegaEmailUrl();
    pegarCadatroEmail(email);
}

//pega os dados do formulario
const form = document.querySelector("[id=registrar-form]");

//Função para pegar o email do url
function pegaEmailUrl(){
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('email');
}
//verifica se é uma alteração ou cadastro
function verificaCadastro(){
    return pegaEmailUrl() ? false : true;
}

function pegarCadatroEmail(email){

    firebase.firestore().collection("user").where("email", "==", email).get().then(snapshot =>{
        const users = snapshot.docs.map(doc => doc.data());

        if(users.length > 0){
            preencherCadatro(users[0]);
            //preencherForm(doc.data());
        }else{
            console.log("Não existe");
            window.location.href = "../instrutores.html";
        }
    }).catch(error =>{
            console.log("erro" , error);
    }
    )
}

//usando as informações apra preencher os campos do cadastro
function preencherCadatro(users){
    document.getElementById("nome").value = users.nome;
    document.getElementById("email").value = users.email;
    document.getElementById("email").disabled = true;
    document.getElementById("cpf").value = users.cpf;
    let select = document.getElementById('tipo');
    select.options[select.selectedIndex].value = users.tipo;
}

//verifica se o email é valido
function onEmail(){

    if(/\S+@\S+\.\S+/.test(email.value)){
        document.getElementById("atention").innerHTML = "Email valido";
    }else{
        document.getElementById("atention").innerHTML = "Email invalido";
    }

}

//verifica se os campos foram preenchidos
function formValid(){
    const nome = form.nome.value;
    if(!nome){
        return true;
    }

    const email = form.email.value;
    if(!email){
        return true;
    }

    const cpf = form.cpf.value;
    if(!cpf){
        return true;
    }

    return true;
}

//cadastra o usuario

form.addEventListener('submit', (event)=>{

    event.preventDefault();

    let nome = form.nome.value,
    email = form.email.value,
    cpf = form.cpf.value;
    
    let select = document.getElementById('tipo');
	let tipo = select.options[select.selectedIndex].value;


    //confirmar que os cmpos foram preenchidos
    if(!formValid()){
        document.getElementById("atention").innerHTML = "Preencha todos os campos!!";
    }else{
        const dados = {
        nome: nome,
        email: email,
        cpf: cpf,
        tipo: tipo,
        senha: cpf
        };
        
        firebase.auth().createUserWithEmailAndPassword(email, cpf).then(() =>{
            alert("Usuario cadastrado com sucesso!");

            //Resdireciona para pagina de instrutores
            if(tipo == 'instrutor'){
                window.location.href = "../instrutores.html";
            }
        
            //Redireciona para pagina de Alunos
            else if(tipo == 'aluno'){
                window.location.href = "../aluno.html";
            }

        }).catch(error => {
            alert("Erro ao cadastrar usuario!" , error);
        });

        if(verificaCadastro()){
            firebase.firestore().collection('user').add(dados).then(() =>{
                console.log("adicionada");
            }).catch(()=>{
                console.log("falhou");
            });
        }else{
            firebase.firestore().collection('user').doc(email).update(dados).then(() =>{
                console.log("atualizada");
            }).catch(()=>{
                console.log("falhou");
            });
        }
        
    }

    //Adicionando no firestore
})
=======
if(!verificaCadastro()){
    const email= pegaEmailUrl();
    pegarCadastroEmail(email);
}

//pega os dados do formulario
const form = document.querySelector("[id=registrar-form]");

//Função para pegar o email do url
function pegaEmailUrl(){
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('email');
}
//verifica se é uma alteração ou cadastro
function verificaCadastro(){
    return pegaEmailUrl() ? false : true;
}

function pegarCadastroEmail(email){

    firebase.firestore().collection("user").where("email", "==", email).get().then(snapshot =>{
        const users = snapshot.docs.map(doc => doc.data());

        if(users.length > 0){
            preencherCadastro(users[0]);
            //preencherForm(doc.data());
        }else{
            console.log("Não existe");
            window.location.href = "../instrutores.html";
        }
    }).catch(error =>{
            console.log("erro" , error);
    }
    )
}

//usando as informações apra preencher os campos do cadastro
function preencherCadastro(users){
    document.getElementById("nome").value = users.nome;
    document.getElementById("email").value = users.email;
    document.getElementById("email").disabled = true;
    document.getElementById("cpf").value = users.cpf;
    let select = document.getElementById('tipo');
    select.options[select.selectedIndex].value = users.tipo;
}

//verifica se o email é valido
function onEmail(){

    if(/\S+@\S+\.\S+/.test(email.value)){
        document.getElementById("atention").innerHTML = "Email valido";
    }else{
        document.getElementById("atention").innerHTML = "Email invalido";
    }
}

//verifica se o cpf já esta cadastrado
function onCpf(){

    const cpfExiste = firebase.firestore().collection('user').where('cpf', '==', cpf.value);

    if(cpfExiste > 0){
        document.getElementById("atention").innerHTML = "Este CPF já está cadastrado";
        return false;
    }
    return true;
}
//verifica se os campos foram preenchidos
function formValid(){
    const nome = form.nome.value;
    if(!nome){
        return false;
    }

    const email = form.email.value;
    if(!email){
        return false;
    }

    const cpf = form.cpf.value;
    if(!cpf || !onCpf()){
        return false;
    }

    return true;
}

//cadastra o usuario

form.addEventListener('submit', (event)=>{

    event.preventDefault();

    let nome = form.nome.value,
    email = form.email.value,
    cpf = form.cpf.value;
    
    let select = document.getElementById('tipo');
	let tipo = select.options[select.selectedIndex].value;


    //confirmar que os cmpos foram preenchidos
    if(!formValid()){
        document.getElementById("atention").innerHTML = "Preencha todos os campos!!";
    }else{
        const dados = {
        nome: nome,
        email: email,
        cpf: cpf,
        tipo: tipo,
        senha: cpf
        };
        
        if(verificaCadastro()){

            firebase.auth().createUserWithEmailAndPassword(email, cpf).then(data =>{

                //Cadastrando no firestore
                firebase.firestore().collection('user').add(dados).then(() =>{
                    console.log("adicionada");
                }).catch(()=>{
                    console.log("falhou");
                });

                /* TALVEZ SEJA UMA FORMA MELHOR DE OBTER O UID
                const uid = data.user.uid;

                const users = firebase.firestore().collection('user');
                users.doc(uid).set(dados);
            */ 
                alert("Usuario cadastrado com sucesso!");

                //Resdireciona para pagina de instrutores
                if(tipo == 'instrutor'){
                    window.location.href = "../instrutores.html";
                }
            
                //Redireciona para pagina de Alunos
                else if(tipo == 'aluno'){
                    window.location.href = "../aluno.html";
                }

            }).catch(error => {
                alert("Erro ao cadastrar usuario!" , error);
            });

        } else{
            firebase.firestore().collection('user').doc(`user/${email}`).update(dados).then(() =>{
                console.log("atualizada");
            }).catch(()=>{
                console.log("falhou");
            });
        }
    }
})
>>>>>>> cf95a91d19080c583842f8da13503f201cbaefb3
    