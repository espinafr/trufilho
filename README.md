# P1 Programação Frontend Design

## Resolvendo conflitos
<img width="374" height="106" alt="Erro de push" src="https://github.com/user-attachments/assets/4f094d0c-363c-43f2-8b77-ed74a4efba30" />

Caso você tenha feito uma alteração nos arquivos e quer dar push para o GitHub mas o histórico do servidor está mais atualizado que o da sua máquina, execute o comando `git pull --rebase origin main` no terminal. Esse comando vai puxar todas as alterações do servidor para a sua máquina linearmente, sem criar várias ramificações no controle de versões.  

Caso haja algum conflito, o próprio vscode vai te auxiliar a resolvê-lo (só escolher a versão do código que deseja manter). Por fim, dando rebase e resolvendo os conflitos caso necessário, só dar push novamente.

## Base comum (IMPORTANTE!!)
Para tornar o desenvolvimento do trabalho mais facilitado e padrão entre os grupos, use o arquivo `base.html` como base para sua página. Todo o conteúdo novo deve ser inserido dentro da tag `<main>` desse arquivo.

Além disso, quando for adicionar algum arquivo `.css` específico para sua página, adicione-o diretamente na pasta `css`, sem criar alguma pasta extra dentro dela, a fim de evitar erros na hora da correção.

A logo está localizada em `img/logotudo.png` e as fotos de produtos devem estar dentro de `img/produtos/*`. As imagens individuais de cada página devem estar dentro de uma pasta com o nome da sua página. Por exemplo, para o grupo responsável pelo blog, suas imagens devem estar localizadas em `img/blog/*`.

Para o caso do `.js`, adote a estrutura que achar necessária para a sua página, mas existem dois arquivos principais que podem ser usados através do site, sendo eles:
- `produtos.json`
    - Esse arquivo guarda todos os produtos da loja. Modifique-o como quiser, mas não exclua as chaves existentes dentro dele. Pode ser usado para renderizar produtos automaticamente.
    - Cada produto segue a seguinte estrutura:
        - `id`: id único do produto, não precisa necessariamente ser um número.
        - `nome`: nome do produto.
        - `descricao`: descrição do produto.
        - `preco`: preço do produto.
        - `quantidade`: quantidade do produto no estoque.
        - `img`: nome da imagem do produto armazenada em `/img/produtos`.
- `lib_carrinho.js`
    - Biblioteca para adicionar, ler e remover itens do carrinho. As funções de ler, adicionar, remover e apagar retornam a lista de IDs atual no carrinho.
    - O localStorage pode funcionar ao abrir o HTML diretamente (`file://`), mas isso varia entre navegadores. Use um servidor local, como o Live Server, para testar o compartilhamento do carrinho entre as páginas de uma mesma origem.
    - O localStorage só suporta texto, então todos os valores em lista devem ser serializados (transformados) em JSON na hora de salvar e depois desserializados na hora de ler.
    - O código possui JSDocs comentando todas as funções e comentários nas linhas necessárias.
    - `carrinho_itens()` - Retorna uma lista de IDs de produtos no carrinho.
    - `carrinho_quantidade()` - Retorna a quantidade de itens no carrinho, contando IDs repetidos.
    - `carrinho_adicionar(id)` - Adiciona um produto ao carrinho com base no ID.
    - `carrinho_remover(id)` - Remove uma ocorrência do ID no carrinho.
    - `carrinho_apagar()` - Remove todos os produtos do carrinho.
    - **Essa biblioteca serve apenas para o registro de IDs no carrinho. Ela em nenhum momento acessa a lista real de produtos em `produtos.json`.**


## CHANGELOG.md
Um arquivo para registrar as mudanças feitas aos arquivos principais:
- `base.html`
- `base.css`
- `lib_carrinho.js`
- todas as imagens de logo e ícones


## Grupos e representantes
- Grupo 1 _(index.html)_
    - Guilherme Coracin Moraes
- Grupo 2 _(sobrenos.html)_
    - Gabriel Yago
- Grupo 3 _(produto.html)_
    - Leonel Begiato
- Grupo 4 _(blog.html)_
    - Pedro Stella
- Grupo 5 _(portfolio.html)_
    - Vinicius Cássio? (confirmar)
- Grupo 6 _(contato.html)_
    - Théo Ruela
- Grupo 7 _(faq.html)_
    - Danilo Nascimento
- Grupo 8 _(carrinho.html)_
    - Davi Andretta
