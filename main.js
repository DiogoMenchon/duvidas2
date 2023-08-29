const form = document.getElementById('form-contato');
const tabelaContatos = document.getElementById('tabela-contatos');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    adicionarContato(nome, telefone);

    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';
});

function adicionarContato(nome, telefone) {
    const linha = document.createElement('tr');
    linha.innerHTML = `
        <td>${nome}</td>
        <td>${telefone}</td>
    `;
    tabelaContatos.appendChild(linha);
}