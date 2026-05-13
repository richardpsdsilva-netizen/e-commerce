/* =====================================================
   DEFINIÇÃO DAS CLASSES
   ===================================================== */

class Produto {
    constructor(nome, preco, imagem) {
        this.nome = nome;
        this.preco = preco;
        this.imagem = imagem;
    }
}

class Loja {
    constructor() {
        this.produtos = [];
        this.carrinho = [];
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);
    }

    renderProdutos() {
        const container = document.getElementById('produtos');
        if (!container) return;

        container.innerHTML = this.produtos.map((p, index) => `
            <div class="produto-card">
                <img src="${p.imagem}" alt="${p.nome}" style="width:100%; border-radius: 8px; margin-bottom: 10px;">
                <h3>${p.nome}</h3>
                <p>R$ ${p.preco.toFixed(2)}</p>
                <button onclick="window.loja.adicionarAoCarrinho(${index})" class="btn-entrar">
                    ADICIONAR
                </button>
            </div>
        `).join('');
    }

    adicionarAoCarrinho(index) {
        const produto = this.produtos[index];
        this.carrinho.push(produto);
        this.renderCarrinho();
    }

    renderCarrinho() {
        const lista = document.getElementById('listaCarrinho');
        const totalDisp = document.getElementById('total');
        
        lista.innerHTML = this.carrinho.map(item => `
            <div style="border-bottom: 1px solid #333; padding: 5px 0;">
                ${item.nome} - <strong>R$ ${item.preco.toFixed(2)}</strong>
            </div>
        `).join('');

        const total = this.carrinho.reduce((acc, item) => acc + item.preco, 0);
        totalDisp.innerText = `Total: R$ ${total.toFixed(2)}`;
    }
}

/* =====================================================
   INICIALIZAÇÃO E LÓGICA DE TRANSIÇÃO
   ===================================================== */

// Instanciamos a loja globalmente para que o HTML consiga acessá-la
window.loja = new Loja();

// Cadastramos os produtos
window.loja.adicionarProduto(new Produto("Balde do Stranger Things", 89.90, "img/balde_de_pipoca_netflix_personagens_stranger_things_preto_unico_21303_1_43552b2ce68a78f8328609719597bfe0.webp"));
window.loja.adicionarProduto(new Produto("Chaveieo do Stranger Things", 55.00, "img/chaveiro-eleven-stranger-things1-4e160fb944b8d6ec0116115863583437-640-0.webp"));
window.loja.adicionarProduto(new Produto("Peter-griffin", 65.00, "img/peter-griffin-helps-feed-african-children-in-need-v0-wjl9r6sffk8d1.png"));
window.loja.adicionarProduto(new Produto("Garrafa do Stranger Things", 199.90, "img/shopping.webp"));

// Função solta para o botão da Splash Screen
function entrarNaLoja() {
    const splash = document.getElementById('splash-screen');
    const loja = document.getElementById('loja-content');

    // 1. Inicia o efeito de desaparecer
    splash.style.transition = 'opacity 1s';
    splash.style.opacity = '0';
    
    // 2. Espera a animação acabar para trocar de tela
    setTimeout(() => {
        splash.style.display = 'none'; 
        loja.style.display = 'block';  
        
        // Renderiza os produtos na tela
        window.loja.renderProdutos();
    }, 1000);

container.innerHTML = this.produtos.map((p, index) => `
    <div class="produto-card">
        <img src="${p.imagem || 'https://via.placeholder.com/250'}" 
             alt="${p.nome}" 
             style="width:100%; height:200px; object-fit:cover; border-radius: 8px; margin-bottom: 10px;">
        <h3>${p.nome}</h3>
        <p>R$ ${p.preco.toFixed(2)}</p>
        <button onclick="window.loja.adicionarAoCarrinho(${index})" class="btn-entrar">
            ADICIONAR
        </button>
    </div>
`).join('');
}