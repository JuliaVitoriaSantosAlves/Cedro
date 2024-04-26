// Array para armazenar as propostas dos usuários
let propostas = [];

// Função para adicionar uma nova proposta ao banco de dados
function adicionarProposta(area, estrategia, categoria, descricao) {
    propostas.push({
        area: area,
        estrategia: estrategia,
        categoria: categoria,
        descricao: descricao
    });
}

// Exportar funções para uso em outros arquivos
module.exports = {
    adicionarProposta: adicionarProposta,
    propostas: propostas
};