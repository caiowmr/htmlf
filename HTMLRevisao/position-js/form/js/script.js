const form = document.getElementById('form');
const nome = document.getElementById('nome');
const email = document.getElementById('email');

var dados = JSON.parse(localStorage.getItem('dados')) || [];

const key = new URLSearchParams(window.location.search).get('chave');

function salvar(){
    let newNomew = nome.value;
    let newemail = email.value; 

    if(key){
        dados[key] = {nome: newNomew, email: newemail};

    }else{
        dados.push({nome: newNomew, email: newemail});
    }
    localStorage.setItem('dados', JSON.stringify(dados));
    window.location.href = "../html/index.html"

    if(key){
        nome.value = dados[key].nome;
        email.value = dados[key].email;
    }
}