const user = localStorage.getItem('mini_projeto')

if(!user){
    window.location.href = 'login.html'
}

const formSelect = document.querySelector('.form-select')
const assuntos = ['duvidas', 'consultas', 'orçamentos', 'reclamações']

for(let assunto of assuntos){
    const selectOption = document.createElement('option')
    formSelect.appendChild(selectOption)
    selectOption.setAttribute('value', assunto)
    selectOption.innerText = assunto
}

const button = document.querySelector('.btn-primary')
const inputName = document.querySelector('#nome')

button.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log(`formulário de ${inputName.value} submetido com sucesso!`)
    window.alert(`formulário de ${inputName.value} submetido com sucesso!`)
})
