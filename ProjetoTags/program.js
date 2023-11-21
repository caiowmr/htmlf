// Função para validar um formulário
function validarFormulario() {
    // Obtenha os valores dos campos
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;

    // Valide os campos (pode adicionar mais validações conforme necessário)
    if (nome === "" || email === "") {
        alert("Por favor, preencha todos os campos.");
    } else {
        // Se todos os campos estiverem preenchidos, faça algo, por exemplo, envie para o servidor
        alert("Formulário enviado com sucesso!");
        // Aqui você pode adicionar lógica para enviar os dados para o servidor, salvar em um banco de dados, etc.
    }
}

// Função para manipular eventos ao carregar a página
window.onload = function () {
    // Exemplo de manipulação de evento de clique em um botão
    var meuBotao = document.getElementById('meuBotao');
    meuBotao.addEventListener('click', function () {
        alert('Botão clicado!');
    });

    // Exemplo de manipulação de evento de mudança em uma caixa de seleção
    var minhaSelecao = document.getElementById('minhaSelecao');
    minhaSelecao.addEventListener('change', function () {
        alert('Seleção alterada para: ' + minhaSelecao.value);
    });

    // Exemplo de manipulação de evento de submissão de formulário
    var meuFormulario = document.getElementById('meuFormulario');
    meuFormulario.addEventListener('submit', function (event) {
        // Impede a submissão padrão do formulário para que você possa realizar suas próprias ações
        event.preventDefault();
        // Adicione aqui sua lógica personalizada após a submissão do formulário
        alert('Formulário enviado manualmente!');
    });
};
