let categoriaParametro = ''

function chamarAPi() {
  let API = `https://fakestoreapi.com/products/${categoriaParametro}`; /*aqui é o link da API*/
  fetch(API) /* AQUI ELE TÁ BUSCANDO A API */
    .then(res => res.json()) /* AQUI MOSTRA A RESPOSTA JASON */
    .then((data) => mostrarProdutos(data)); /* AQUI IMPRIME A RESPOSTA NO LOG */
}
chamarAPi()


function mostrarProdutos(data) { /* CRIADO A FUNÇÃO P/ MOSTRAR OS PRODUTOS */
  let produtos = document.querySelector('.produtos')/*  AQUI SELECIONA A DIV PAI = PRODUTOS */
  produtos.innerHTML = ''


  data.forEach(data => {
    let produto = document.createElement('div') /*  AQUI ELE CRIA UM ELEMENTO*/
    produto.classList.add('produto') /* AQUI ELE ADICIONA CLASS NO ELEMENTO QUE FOI CRIADO */

    produto.innerHTML =  /* IMPRIME O CONTEUDO QUE FOI CRIADO */
      `
    <img src="${data.image}">
    <h3> ${data.title} </h3>
    <span>R$ ${data.price} </span>
    <span class="descricao" id="${data.id}">${data.description} </span>
    <div class="botoes">
      <button>comprar</button>
      <button class="verMaisprod">ver mais</button>
    </div> 
    `
    produtos.appendChild(produto) /*  COLOCA ELEMENTO FILHO DENTRO DO ELEMENTO PAI */

    produto.querySelector('.verMaisprod').addEventListener('click', (event) => {
      const produtoInfo = event.target.parentElement.parentElement
      const descricao = produtoInfo.querySelector(".descricao")
      descricao.classList.toggle('descricao-on')
    })
  });
}
/*  AQUI CHAMA A FUNÇÃO CRIADA */

const botoesCategoria = document.querySelectorAll('header nav ul li')

botoesCategoria.forEach((botaoCategoria) => {
  botaoCategoria.addEventListener('click', (event) => {
    const botaoinfo = event.target /* event targ é para pegar o elemento */
    const nomeCategoria = botaoinfo.innerText /* innerTex é para pegar o texto dentro do elemento */

    categoriaParametro = `/category/${nomeCategoria}`

    chamarAPi()
  })

})

    let home = document.querySelector('.voltarInicio')
    home.addEventListener('click', inicioHome);
    function inicioHome() {
      categoriaParametro = ''
      chamarAPi()
}

