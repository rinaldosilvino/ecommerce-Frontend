// Banco de dados dos produto
const data = [
    {
      id: 1,
      img: "./img/jaqueta.svg",
      nameItem: "Lightweight Jacket",
      description:
        "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
      value: 100,
      addCart: "Adicionar ao carrinho",
      tag: ["Camisetas"],
    },
    {
      id: 2,
      img: "./img/gorro.svg",
      nameItem: "Black Hat",
      description:
        "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
      value: 100,
      addCart: "Adicionar ao carrinho",
      tag: ["Acessórios"],
    },
    {
      id: 3,
      img: "./img/mascara.svg",
      nameItem: "Mask",
      description:
        "Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...",
      value: 40,
      addCart: "Adicionar ao carrinho",
      tag: ["Acessórios"],
    },
    {
      id: 4,
      img: "./img/camiseta_preta.svg",
      nameItem: "T-Shirt",
      description:
        "Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...",
      value: 100,
      addCart: "Adicionar ao carrinho",
      tag: ["Camisetas"],
    },
    {
      id: 5,
      img: "./img/camiseta_branca.svg",
      nameItem: "Short-Sleeve T-Shirt",
      description:
        "Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...",
      value: 100,
      addCart: "Adicionar ao carrinho",
      tag: ["Camisetas"],
    },
    {
      id: 6,
      img: "./img/moletom.svg",
      nameItem: "Champion Packable Jacket",
      description:
        "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...",
      value: 100,
      addCart: "Adicionar ao carrinho",
      tag: ["Camisetas"],
    },
  ];
  
var carrinho = []

function carregarItens(){
  const listUl = document.querySelector(".product-list")
    data.forEach(element => {
      let li = document.createElement('li')
      li.className = "product"
      li.innerHTML = `
          <figure class="product-figure">
            <img
              src="${element.img}"
              alt=""
              title=""
              class="product-img"
            />
          </figure>
        <div class="product-details">
            <div class="product-category">
              <p class="product-name-category">${element.tag[0]}</p>
            </div>
            <main class="product-main">
              <h1 class="product-title">${element.nameItem}</h1>
              <h5 class="product-description">${element.description}</h5>
              <strong class="product-price">R$ ${element.value}.00</strong>
              <a href="#"onclick="javascript:return adicionarCarrinho(${element.id})" class="product-add-a" ><b class="product-add-cart">${element.addCart}</b></a>
            </main>
        </div>
      ` 
      listUl.appendChild(li)
    });
}
carregarItens()
function exibirCarrinhoVazio(){
  if(carrinho.length === 0){
    var divContainer = document.querySelector(".cart-list")
    var div = document.createElement('div')
    div.className = "card-list-empty"
    div.innerHTML = `
      <b class="card-list-empty--b">Carrinho Vazio</b>
      <p class="card--list-empty--p">Adicione carrinhos</p>
    ` 
    divContainer.appendChild(div)
  }
}
exibirCarrinhoVazio()


function adicionarCarrinho(id){
  if(id){
    if(carrinho.length === 0){
      var empty = document.querySelector('.card-list-empty')
      empty.remove()
    }
    var item = data.find(x => x.id === id)
    var div = document.createElement('div')
    var divContainer = document.querySelector(".cart-list")
    item.id = carrinho.length+1
    div.className = "container-flex"
    div.id = item.id
    div.innerHTML = `
      <img src=${item.img} alt="">
      <div class="container-body">
          <h4>${item.nameItem}</h4>
          <h5>R$ ${item.value}.00</h5>
          <a href="#" "onclick="javascript:return removerProduto(${item.id})">Remover Produto</a>
      </div>
  `
    divContainer.appendChild(div)
    carrinho.push(item)
    countCart()
  }
}

function countCart(){
  if(carrinho.length > 0){
    var valorTotal = 0
    if(document.querySelector('.cart-total-itens')){
      document.querySelector('.cart-total-itens').remove()
    }
    var divCartTotal = document.createElement('div')
    var divCart = document.querySelector('.cart-total')
    carrinho.forEach(element => {
      valorTotal += element.value
    })
    divCartTotal.className = "cart-total-itens"
    divCartTotal.innerHTML = `
        <div class="cart-count-itens">
        <p>Quantidade</p>
        <p>${carrinho.length}</p>
      </div>
      <div class="cart-total-price">
        <p>Total</p>
        <p>${valorTotal}</p>
      </div>
    `
    divCart.appendChild(divCartTotal)
  }

}

function filtraCategoria(categoriaSelecionada){
  var mainContainer = document.querySelector('.products-content')
  document.querySelector(".product-list").remove()
  var listUl = document.createElement("ul")
  listUl.className = "product-list"
  data.forEach(element => {
    if(element.tag[0] === categoriaSelecionada || categoriaSelecionada === 'Todos'){
      let li = document.createElement('li')
      li.className = "product"
      li.innerHTML = `
            <figure class="product-figure">
            <img
              src="${element.img}"
              alt=""
              title=""
              class="product-img"
          />
        </figure>
        <div class="product-details">
            <div class="product-category">
              <p class="product-name-category">${element.tag[0]}</p>
            </div>
            <main class="product-main">
              <h1 class="product-title">${element.nameItem}</h1>
              <h5 class="product-description">${element.description}</h5>
              <strong class="product-price">R$ ${element.value}.00</strong>
              <a href="#"onclick="javascript:return adicionarCarrinho(${element.id})" class="product-add-a" ><b class="product-add-cart">${element.addCart}</b></a>
            </main>
        </div>
      ` 
      listUl.appendChild(li)
    }
  });
  mainContainer.appendChild(listUl)

}

function removerProduto(id){
  document.getElementById(id.toString()).remove()
}





