const dados = JSON.parse(localStorage.getItem('dados')) || [];

        const tabela = $("#tabela").DataTable({
            responsive: true,
            language: {
			"sProcessing": "Processando...",
			"sLengthMenu": "Mostrar _MENU_ registros",
			"sZeroRecords": "Nenhum registro encontrado",
			"sInfo": "Mostrando _START_ até _END_ de _TOTAL_ registros",
			"sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
			"sInfoFiltered": "(filtrado de _MAX_ registros no total)",
			"sInfoPostFix": "",
			"sSearch": "Pesquisar:",
			"sUrl": "",
			"oPaginate": {
				"sFirst": "Primeiro",
				"sPrevious": "Anterior",
				"sNext": "Próximo",
				"sLast": "Último"
			},
			"sAriaSortAsc": ": Ordenar coluna em ordem crescente",
			"sAriaSortDesc": ": Ordenar coluna em ordem decrescente"
			}
        });

        function exibirDados() {
            tabela.clear().draw();
            dados.forEach((elemento, chave) => {
                tabela.row.add([
                    chave,
                    elemento.nome,
                    elemento.sobrenome,
                    elemento.email,
                    elemento.cpf,
                    elemento.telefone,
                    elemento.cep,
                    elemento.rua,
                    elemento.bairro,
                    elemento.cidade,
                    elemento.estado,
                    `<a href="./cadastro.html?chave=${chave}"><i class="fa-regular fa-pen-to-square"></i></a>
                    <a href="#" onClick="remover(${chave})"><i class="fa-solid fa-trash-arrow-up"></i></a>`
                ]); 
            });

            tabela.draw();
        }

        function remover(chave) {
            dados.splice(chave, 1);
            localStorage.setItem('dados', JSON.stringify(dados));
            tabela.clear().draw();
            exibirDados();
        }

        exibirDados();


const estiloHeaderMenu = `
    header {
        height: 5vh;
    }

    nav ul {
        padding: 0px;
        margin: 0px;
    }

    nav ul a {
        text-decoration: none;
        color: #fff;
    }

    nav ul li {
        display: inline-flex;
        padding: 0px 10px;
    }

    li:hover {
        box-shadow: -2px -2px 0.9px rgba(0, 0, 0, 0.9);
    }

    ul:hover li:not(:hover) {
        color: rgb(132, 132, 132);
    }

    #menu {
        background-color: rgb(18, 18, 18);
        text-align: center;
        padding: 10px 0px;
        position: fixed;
        top: 0px;
        right: 0px;
        left: 0px;
}
`;


const estiloHeaderMenuCSS = document.createElement('style');
estiloHeaderMenuCSS.type = 'text/css';
estiloHeaderMenuCSS.appendChild(document.createTextNode(estiloHeaderMenu));
document.head.appendChild(estiloHeaderMenuCSS);

const estiloTabela = `
    #tabela {
        font-family: 'Arial', sans-serif;
        border-collapse: collapse;
        width: 100%;
        margin-top: 20px;
        background-color: #fff;
    }

    #tabela th, #tabela td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
       
    }

    #tabela th {
        background-color: #f2f2f3;
    }

    #tabela tbody tr:nth-child(even) {
        background-color: #f9f9f9;
    }

    #tabela a {
        color: #3498db;
        margin-right: 10px;
        cursor: pointer;
        color: rgb(230, 9, 9);

    }

    #tabela a:hover {
        color: #2980b9;
    }

    #tabela i {
        font-size: 18px;
        margin-right: 5px;
        background-color: #fff;
    }

`;


const estilo = document.createElement('style');
estilo.type = 'text/css';
estilo.appendChild(document.createTextNode(estiloTabela));
document.head.appendChild(estilo);