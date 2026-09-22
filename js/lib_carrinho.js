let storage; // variável para acessar o localStorage, onde é salvo os dados do carrinho

/**
 * Checa se o localStorage pode ser usado no ambiente atual
 * @returns {boolean} booleano indicando a disponiblidade do localStorage
 */
function storageDisponivel() {
    try { // tenta executar o código a seguir
        storage = window.localStorage; // o acesso ao localStorage pode falhar
        const teste = '__teste'; // variável para testar registros no localStorage
        
        storage.setItem(teste, teste); // tenta salvar o registro de teste
        storage.getItem(teste); // tenta ler o registro de teste
        storage.removeItem(teste); // tenta excluir o registro de teste
        
        return true; // chegar aqui quer dizer que tudo deu certo, então retorna verdadeiro
    } catch (error) { // caso aconteça um erro...
        // o navegador pode bloquear o armazenamento ou estar sem espaço
        return false; // retorna falso
    }
}

/**
 * Função para pegar todos os produtos salvos no carrinho
 * @returns {string[]} Lista com ids
 */
function carrinho_itens() {
    let produtos = JSON.parse(storage.getItem("carrinho")); // Lê o registro e converte o JSON para uma lista

    if (!Array.isArray(produtos)) { // Se o registro não existir ou não for uma lista
        storage.setItem("carrinho", JSON.stringify([])) // Cria o registro com um valor vazio

        return []; // retorna uma lista vazia
    }

    return produtos; // retorna a lista de IDs

}

/**
 * Retorna a quantidade de itens no carrinho
 * @returns {number} número de itens no carrinho
 */
function carrinho_quantidade() {
    return carrinho_itens().length; // Conta quantos itens tem no carrinho e retorna o número
}

/**
 * Função para adicionar produtos ao carrinho
 * @param {string} id id do produto a ser adicionado
 * @returns {string[]} lista de produtos do carrinho atualizada
 */
function carrinho_adicionar(id) {
    let itens = carrinho_itens() // pega os itens atuais do carrinho
    itens.push(String(id)); // transforma o id em string e o adiciona a lista de produtos

    storage.setItem("carrinho", JSON.stringify(itens)) // atualiza o registro de carrinho com o novo id

    return itens; // retorna carrinho atualizado
}

/**
 * Função para remover produtos do carrinho
 * @param {string} id id do produto a ser removido
 * @returns {string[]} lista de produtos do carrinho atualizada
 */
function carrinho_remover(id) {
    let itens = carrinho_itens() // pega os itens atuais do carrinho
    
    let indice_remocao = itens.indexOf(String(id)); // pega o índice (posição na lista) do ID do item que vai ser removido na lista de produtos no carrinho
    if (indice_remocao !== -1 ) { // Se o índice for encontrado na lista...
        itens.splice(indice_remocao, 1) // remove 1 item apartir do índice indicado, no caso aquele que queríamos remover
    } else { // se o produto não for achado...
        // não acontece nada (aqui poderia ter um erro, mas por simplicidade vamos deixar assim)
    }

    storage.setItem("carrinho", JSON.stringify(itens)); // atualiza o registro de carrinho
    return itens; // retorna carrinho atualizado
}

/**
 * Remove todos os produtos do carrinho
 * @returns {string[]} lista de produtos do carrinho atualizada
 */
function carrinho_apagar() {
    storage.setItem("carrinho", JSON.stringify([])); // Salva um array vazio no registro do carrinho
    return [];
}

if (!storageDisponivel()) { // Verifica se o localStorage está disponível
    // Se ele não estiver, exibe um alerta
    console.log("Erro acessando o localStorage.");
    alert("Não foi possível usar o localStorage. Verifique as configurações e o espaço de armazenamento do navegador.")
}