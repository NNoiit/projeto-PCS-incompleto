import { collection, getDocs } from "firebase/firestore";

const tipoUsuario = (item) => {


    

    if(item.usuario == "gerenteG"){
        let div = document.getElementsByClassName("gerenteG");
        div[0].style.display = 'block';
    }
    else if(item.usuario == "instrutor"){
        let div = document.getElementsByClassName("intrutor");
        div[0].style.display = 'block';

    }else if(item.usuario == "aluno"){
        let div = document.getElementsByClassName("aluno");
        div[0].style.display = 'block';
    }

    const querySnapshot = await getDocs(collection(db, "usuario"));
    querySnapshot.forEach((doc) => {
        tipoUsuario(doc.data);
    console.log(`${doc.id} => ${doc.data()}`);
    });

}
