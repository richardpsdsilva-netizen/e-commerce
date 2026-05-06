//Classe produto

class Produto {
    constructor(nome, preco, imagem) {

        // Nome do produto (String)
        this.nome = nome;

        this.preco = preco;

        this.imagem = imagem;

    }

}

//--Classe Carrinho--
//--Responsaavel por:
//--guardar itensadicionados--
//--remover itensadicionados--
//--Calcular--
//--Atualizar a tela (HTML)--

class Carrinho {
    constructor() {
        //Array que guarda os produtos adicionados 
        this.itens = []


    }

    //-- Metodo = Adiciona Produto --

    adicionar(produto) {

        //-- Adicionamdo o produto na array

        this.itens.push(produto);
        //Re - Renderiza
        this.render
    }
    //Metodo: CalcularTotal
    //Soma o preco de todos os itens
    calcularTotal() {
        let total = 0;
        //Percorre todos os itens do capricho
        this.itens.forEach(item => {
            total += item.preco;
        });
        return total

    }
    //Merodo render
    //Atualiza completamente  html do carrinho
    render() {
        const lista = document.getElementById("listaCarrinho")

        //limpa tudo antes de redesenhar 
        // evita duplicação de elemento
        lista.innerHTML = "";

        this.itens.forEach((item, index) => {


            //Cria uma div para o item 
            const div = document.createElement("div");

            //Adiciona classe para Css
            div.classList.add("item - carrinho");

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


        })
    }
}
