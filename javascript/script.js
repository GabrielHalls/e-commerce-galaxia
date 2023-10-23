const API = 'https://fakestoreapi.com/products'; /*aqui é o link da API*/ 

fetch(API) /* AQUI ELE TÁ BUSCANDO A API */
.then(res=>res.json()) /* AQUI MOSTRA A RESPOSTA JASON */
.then((data)=>mostrarProdutos(data)); /* AQUI IMPRIME A RESPOSTA NO LOG */





function mostrarProdutos(data){ /* CRIADO A FUNÇÃO P/ MOSTRAR OS PRODUTOS */
    let produtos = document.querySelector('.produtos')/*  AQUI SELECIONA A DIV PAI = PRODUTOS */

    data.forEach(data => {
        let produto = document.createElement('div') /*  AQUI ELE CRIA UM ELEMENTO*/
    produto.classList.add('produto') /* AQUI ELE ADICIONA CLASS NO ELEMENTO QUE FOI CRIADO */

    produto.innerHTML=  /* IMPRIME O CONTEUDO QUE FOI CRIADO */
    `
    <img src="${data.image}" alt="PC Gamer">
    <h3> ${data.title} </h3>
    <span>R$ ${data.price} </span>
    <div class="botoes">
      <button>comprar</button>
      <button>ver mais</button>
    </div> 
    `

    produtos.appendChild(produto) /*  COLOCA ELEMENTO FILHO DENTRO DO ELEMENTO PAI */
    });
    
}
/*  AQUI CHAMA A FUNÇÃO CRIADA */