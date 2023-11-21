function adicionarDados() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;

    if (nome === "" || email === "") {
        alert("Por favor, preencha todos os campos.");
    } else {
        // Obtenha os dados existentes do localStorage
        var dadosSalvos = JSON.parse(localStorage.getItem('dados')) || [];

        // Adicione os novos dados
        dadosSalvos.push({ nome: nome, email: email });

        // Salve os dados atualizados de volta no localStorage
        localStorage.setItem('dados', JSON.stringify(dadosSalvos));

        // Atualize a tabela
        atualizarTabela();

        // Limpe os campos do formulário
        document.getElementById('nome').value = "";
        document.getElementById('email').value = "";
    }
}

function atualizarTabela() {
    var tabela = document.getElementById('tabelaDados');
    tabela.innerHTML = ""; // Limpe a tabela antes de atualizar

    var dadosSalvos = JSON.parse(localStorage.getItem('dados')) || [];

    // Adicione os dados da localStorage na tabela
    for (var i = 0; i < dadosSalvos.length; i++) {
        var novaLinha = tabela.insertRow(-1);

        var cellNome = novaLinha.insertCell(0);
        var cellEmail = novaLinha.insertCell(1);

        cellNome.innerHTML = dadosSalvos[i].nome;
        cellEmail.innerHTML = dadosSalvos[i].email;
    }
}

// Chame a função para atualizar a tabela ao carregar a página
atualizarTabela();
