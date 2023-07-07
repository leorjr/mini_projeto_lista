const user = localStorage.getItem('mini_projeto')

if(!user){
    window.location.href = 'login.html'
}

const body = document.querySelector('body')
const header = document.createElement('header')
body.appendChild(header)

const nav = document.createElement('nav')
nav.classList.add('navbar')
nav.classList.add('navbar-expand-lg')
nav.classList.add('bg-body-tertiary')
header.appendChild(nav)

const div = document.createElement('div')
div.classList.add('container-fluid')
nav.appendChild(div)

div.innerHTML = `
    <h1 class="navbar-brand">
        <a href="./index.html">Farmácia <span>Z</span></a>
    </h1>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.html">Todos os medicamentos</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="contato.html">Fale conosco</a>
            </li>
        </ul>
        <button type="button" class="btn btn-dark">Trocar Tema</button>
    </div>
`

const medicamentos = [
    {
        img: './images/comprimidos.png',
        title: 'Comprimidos',
        valor: 'R$ 100,00'
    },
    {
        img: './images/pomada.jpg',
        title: 'Pomada',
        valor: 'R$ 50,00'
    },
    {
        img: './images/colirio.jpg',
        title: 'Colírio',
        valor: 'R$ 10,00'
    },
    {
        img: './images/injecao.jpg',
        title: 'Injeção',
        valor: 'R$ 15,00'
    }
]

const carrinhoDeCompras = []

const listaDeFavoritos = []

const secaoListagemMedicamentos = document.querySelector('section#listagem')
const lista = secaoListagemMedicamentos.querySelector('ul')

const adicionarAoCarrinho = (e) =>{
    console.log(e)
}

medicamentos.forEach(medicamento =>{
    const itemLista = document.createElement('li')

    itemLista.innerHTML = `
    <div class="card" id=${medicamento.title}>
        <i class="fa-regular fa-heart" id="heart-${medicamento.title}"></i>
        <img src=${medicamento.img} class="card-img-top" alt=${medicamento.title}>
        <div class="card-body">
            <h5 class="card-title">${medicamento.title}</h5>
            <p class="card-text">${medicamento.valor}</p>
            <a href="#" class="btn btn-warning" id="botao-${medicamento.title}">adicionar</a>
        </div>
    </div>
    `
    lista.appendChild(itemLista)

    const botao = document.getElementById(`botao-${medicamento.title}`)
    const heart = document.getElementById(`heart-${medicamento.title}`)

    botao.addEventListener('click', ()=>{
        carrinhoDeCompras.push(medicamento)
        console.log(carrinhoDeCompras)
        window.alert(`${medicamento.title} adicionado ao carrinho`)
    })

    heart.addEventListener('click', ()=>{

        const indexElement = listaDeFavoritos.findIndex(item => item.title == medicamento.title)

        if(indexElement != -1){
            listaDeFavoritos.splice(indexElement)
            heart.classList.remove('fa-solid')
            heart.classList.add('fa-regular')
            heart.style.color = 'red'
            `medicamento ${medicamento.title} removido da lista`
            console.log(listaDeFavoritos)
            return;
        }

        listaDeFavoritos.push(medicamento)
        heart.classList.add('fa-solid')
        heart.classList.remove('fa-regular')
        heart.style.color = 'red'
        window.alert(`${medicamento.title} adicionado aos favoritos`)
        console.log(`medicamento ${medicamento.title} adicionado a lista`)
        console.log(listaDeFavoritos)
        return;
        
    })
    
})

const botaoTema = document.querySelector('.btn-dark')
let darkThemeIsActive = false;

botaoTema.addEventListener('click', ()=>{

    if(darkThemeIsActive){
        body.style.background = 'white'
        darkThemeIsActive = false
        return
    }

    body.style.background = 'black'
    darkThemeIsActive = true
    return
})
