<<<<<<< HEAD
function tipoUser(tipo){

    navUser(tipo);
    dbUser(tipo);
}

function navUser(tipo){
    const barraNav = document.querySelector('#barra-nav');
    console.log(tipo);
    //Mostra o menu para gerente
    if(tipo == 'gerente'){
    
        barraNav.innerHTML = `
            <ul>
                <div class="gerente">
                    <li><img src="./img/icone-barra.png" alt="logo">
                    <li><a href="instrutores.html">Instrutores</a>
                    <li><a href="aluno.html">Alunos</a>
                </div>
            </ul>
        `
    }

    //Mostra o menu para instrutor
    if(tipo == 'instrutor'){

        barraNav.innerHTML = `
            <ul>
                <div class="instrutor">
                    <li><img src="./img/icone-barra.png" alt="logo">
                    <li><a href="serie.html">Series</a>
                    <li><a href="aulas.html">Aulas</a>
                </div>
            </ul>
        `
    }

    //Motra o menu para aluno
    if(tipo == 'aluno'){
        
        barraNav.innerHTML = `
            <ul>
                <div class="aluno">
                    <li><img src="./img/icone-barra.png" alt="logo">
                    <li><a href="serie.html">Series</a>
                    <li><a href="aulas.html">Aulas</a>
                </div>
            </ul>
        `
    }
=======
function tipoUser(tipo){

    navUser(tipo);
    dbUser(tipo);
}

function navUser(tipo){
    const barraNav = document.querySelector('#barra-nav');
    console.log(tipo);
    //Mostra o menu para gerente
    if(tipo == 'gerente'){
    
        barraNav.innerHTML = `
            <ul>
                <div class="gerente">
                    <li><img src="./img/icone-barra.png" alt="logo">
                    <li><a href="instrutores.html">Instrutores</a>
                    <li><a href="aluno.html">Alunos</a>
                </div>
            </ul>
        `
    }

    //Mostra o menu para instrutor
    if(tipo == 'instrutor'){

        barraNav.innerHTML = `
            <ul>
                <div class="instrutor">
                    <li><img src="./img/icone-barra.png" alt="logo">
                    <li><a href="serie.html">Series</a>
                    <li><a href="aulas.html">Aulas</a>
                </div>
            </ul>
        `
    }

    //Motra o menu para aluno
    if(tipo == 'aluno'){
        
        barraNav.innerHTML = `
            <ul>
                <div class="aluno">
                    <li><img src="./img/icone-barra.png" alt="logo">
                    <li><a href="serie.html">Series</a>
                    <li><a href="aulas.html">Aulas</a>
                </div>
            </ul>
        `
    }
>>>>>>> cf95a91d19080c583842f8da13503f201cbaefb3
}