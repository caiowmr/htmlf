const form = document.getElementById("cadastro-form");
    const cep = document.getElementById("cep");
    const rua = document.getElementById("rua");
    const bairro = document.getElementById("bairro");
    const cidade = document.getElementById("cidade");
    const estado = document.getElementById("estado");
    
    function buscaCep(valor){
        const mensagem = document.getElementById("msgErro");
        if(mensagem){
            form.removeChild(mensagem);
        }
    
        var cepValido = valor.replace(/\D/g, "");
        if(cepValido != ""){
    
            var padraoCEP = /^[0-9]{8}$/;
    
            if(padraoCEP.test(cepValido)){
    
                rua.value = "buscando...";
                bairro.value = "buscando...";
                cidade.value = "buscando...";
                estado.value = "buscando...";
    
    
                const script = document.createElement("script");
                script.src = `https://viacep.com.br/ws/${cepValido}/json/?callback=retorno`;
                document.body.appendChild(script);
            }else{
                msgErro("Inválido");
            }
        }else{
            msgErro("é inválido");
        }
    }
    
    function retorno(resposta){
        if(!("erro" in resposta)){
            cep.value = resposta.cep;
            rua.value = resposta.logradouro;
            bairro.value = resposta.bairro;
            cidade.value = resposta.localidade;
            estado.value = resposta.uf;
        }else{
            msgErro("Cep Não Encontrado");
        }
    }
    
    function msgErro(msg){
        erro = document.createElement("label");
        erro.style.color = "red";
        erro.style.fontWeight = "bold";
        erro.id = "msgErro";
        erro.innerText = " CEP: " + cep.value + " " + msg;
        cep.parentNode.insertBefore(erro, cep.nextSibling);
        form.reset();
    }
    const nome = document.getElementById('nome');
    const sobrenome = document.getElementById('sobrenome')
    const email = document.getElementById('email');
    const cpf = document.getElementById('cpf');
    const telefone = document.getElementById('telefone')
    
    const key = new URLSearchParams(window.location.search).get('chave');
    var dados = JSON.parse(localStorage.getItem('dados')) || [];
    
    function cadastrar() {
    let novoNome = nome.value;
    let novoSobrenome = sobrenome.value;
    let novoEmail = email.value;
    let novoCpf = cpf.value;
    let novoTelefone = telefone.value;
    let novoCep = cep.value;
    let novaRua = rua.value;
    let novoBairro = bairro.value;
    let novaCidade = cidade.value;
    let novoEstado = estado.value;

    if (key !== null) {
        dados[key] = {
            nome: novoNome,
            sobrenome: novoSobrenome,
            email: novoEmail,
            cpf: novoCpf,
            telefone: novoTelefone,
            cep: novoCep,
            rua: novaRua,
            bairro: novoBairro,
            cidade: novaCidade,
            estado: novoEstado
        };
    } else {
        dados.push({
            nome: novoNome,
            sobrenome: novoSobrenome,
            email: novoEmail,
            cpf: novoCpf,
            telefone: novoTelefone,
            cep: novoCep,
            rua: novaRua,
            bairro: novoBairro,
            cidade: novaCidade,
            estado: novoEstado
        });
    }

    localStorage.setItem('dados', JSON.stringify(dados));
    window.location.href = "../html/tabelaCadastros.html";
}
    
    if(key){
        nome.value = dados[key].nome;
        sobrenome.value = dados[key].sobrenome
        email.value = dados[key].email;
        cpf.value = dados[key].cpf;
        telefone.value = dados[key].telefone;
        cep.value = dados[key].cep;
        rua.value = dados[key].rua;
        bairro.value = dados[key].bairro;
        cidade.value = dados[key].cidade;
        estado.value = dados[key].estado;
    
    }