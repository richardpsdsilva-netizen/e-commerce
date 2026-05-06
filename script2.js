//CODIGO MAIS COMPLETO DO PROFESSOR

/// =====================================================
// SISTEMA DE LOJA (EXPLICAÇÃO COMPLETA)
// =====================================================



// =====================================================
// CLASSE Produto
// =====================================================
// Representa UM produto individual da loja
// É só um "molde" (estrutura de dados)
// =====================================================

class Produto {

  constructor(nome, preco, imagem) {

    // Nome do produto (string)
    this.nome = nome;

    // Preço do produto (number)
    this.preco = preco;

    // URL da imagem (string)
    this.imagem = imagem;
  }
}





// =====================================================
// CLASSE Carrinho
// =====================================================
// Responsável por:
// - Guardar itens adicionados
// - Remover itens
// - Calcular total
// - Atualizar a tela (HTML)
// =====================================================

class Carrinho {

  constructor() {

    // Array que guarda os produtos adicionados
    this.itens = [];
  }



  // =================================================
  // MÉTODO: adicionarProduto
  // =================================================
  // Recebe um produto e coloca no carrinho
  // Depois atualiza a interface
  // =================================================

  adicionarProduto(produto) {

    // Adiciona o produto no array
    this.itens.push(produto);

    // Re-renderiza o carrinho (atualiza a tela)
    this.render();
  }



  // =================================================
  // MÉTODO: removerProduto
  // =================================================
  // Remove um item baseado no índice
  // =================================================

  removerProduto(index) {

    // Remove 1 item na posição "index"
    this.itens.splice(index, 1);

    // Atualiza a interface
    this.render();
  }



  // =================================================
  // MÉTODO: calcularTotal
  // =================================================
  // Soma o preço de todos os itens
  // =================================================

  calcularTotal() {

    let total = 0;

    // Percorre todos os itens do carrinho
    this.itens.forEach(item => {

      // Soma o preço de cada produto
      total += item.preco;
    });

    return total;
  }



  // =================================================
  // MÉTODO: render
  // =================================================
  // Atualiza completamente o HTML do carrinho
  // =================================================

  render() {

    // Pega o elemento onde o carrinho será exibido
    const lista = document.getElementById("listaCarrinho");


    // Limpa tudo antes de redesenhar
    // (evita duplicação de elementos)
    lista.innerHTML = "";


    // Para cada item no carrinho...
    this.itens.forEach((item, index) => {

      // Cria uma div para o item
      const div = document.createElement("div");

      // Adiciona classe CSS
      div.classList.add("item-carrinho");


      // Define o conteúdo HTML
      div.innerHTML = `
        <h4>${item.nome}</h4>
        <p>R$ ${item.preco}</p>

        <button
          class="remover"

          onclick="
            loja.carrinho.removerProduto(${index})
          ">
          Remover
        </button>
      `;

      // Adiciona o item na tela
      lista.appendChild(div);
    });


    // Atualiza o valor total na tela
    document.getElementById("total").innerHTML =
      `Total: R$ ${this.calcularTotal()}`;
  }
}





// =====================================================
// CLASSE Loja
// =====================================================
// Controla tudo:
// - Lista de produtos
// - Carrinho
// - Renderização dos produtos
// =====================================================

class Loja {

  constructor() {

    // Lista de produtos disponíveis
    this.produtos = [];

    // Cada loja tem um carrinho
    this.carrinho = new Carrinho();
  }



  // =================================================
  // MÉTODO: adicionarProduto
  // =================================================
  //  Adiciona um produto na loja
  // =================================================

  adicionarProduto(produto) {

    this.produtos.push(produto);
  }



  // =================================================
  // MÉTODO: renderProdutos
  // =================================================
  // Mostra os produtos na tela
  // =================================================

  renderProdutos() {

    // Área onde os produtos serão exibidos
    const areaProdutos =
      document.getElementById("produtos");


    // Limpa antes de desenhar
    areaProdutos.innerHTML = "";


    // Para cada produto...
    this.produtos.forEach((produto, index) => {

      // Cria um card
      const card = document.createElement("div");

      // Classe CSS
      card.classList.add("card");


      // Conteúdo do card
      card.innerHTML = `
        <img src="${produto.imagem}">
        <h3>${produto.nome}</h3>
        <p>R$ ${produto.preco}</p>

        <button
          onclick="
            loja.carrinho.adicionarProduto(
              loja.produtos[${index}]
            )
          ">
          Adicionar ao Carrinho
        </button>
      `;

      // Adiciona o card na tela
      areaProdutos.appendChild(card);
    });
  }
}





// =====================================================
// OBJETO GLOBAL
// =====================================================
// Torna a loja acessível no HTML (onclick)
// =====================================================

window.loja = new Loja();




// =====================================================
// CRIAÇÃO DOS PRODUTOS
// =====================================================
// Aqui você popula a loja manualmente
// =====================================================

loja.adicionarProduto(
  new Produto(
    "Notebook Gamer",
    3500,
    "https://picsum.photos/300/200?1&quot;
  )
);

loja.adicionarProduto(
  new Produto(
    "Mouse RGB",
    120,
    "https://picsum.photos/300/200?2&quot;
  )
);

loja.adicionarProduto(
  new Produto(
    "Teclado Mecânico",
    250,
    "https://picsum.photos/300/200?3&quot;
  )
);

loja.adicionarProduto(
  new Produto(
    "Monitor Full HD",
    900,
    "https://picsum.photos/300/200?4&quot;
  )
);




// =====================================================
// INÍCIO DA APLICAÇÃO
// =====================================================
// Renderiza os produtos na tela
// =====================================================

loja.renderProdutos();