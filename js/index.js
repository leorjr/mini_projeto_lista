// const header = document.querySelector('header')
// const nav = `
//     <nav class="navbar navbar-expand-lg bg-body-tertiary">
//         <div class="container-fluid">
//             <h1 class="navbar-brand">
//                 <a href="./index.html">Farmácia <span>Z</span></a>
//             </h1>
//         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//             <li class="nav-item">
//                 <a class="nav-link active" aria-current="page" href="index.html">Todos os medicamentos</a>
//             </li>
//             <li class="nav-item">
//                 <a class="nav-link" href="contato.html">Fale conosco</a>
//             </li>
//             </ul>
//         </div>
//         </div>
//     </nav>
// `

{/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button> */}

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
    </div>
`


