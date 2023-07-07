(async ()=> {
    let database = JSON.parse(localStorage.getItem('database'))

    if(!database){
        const database = []
        localStorage.setItem('database', JSON.stringify(database))
    }

    const user = localStorage.getItem('mini_projeto')

    if(user){
        window.location.href = 'index.html'
    }
    
    const form = document.querySelector('form')
    const inputNome = form.querySelector('#nome')
    const inputEmail = form.querySelector('#email')
    const inputSenha = form.querySelector('#senha')

    form.addEventListener('submit', async (event)=>{
        event.preventDefault()

        const user = {
            nome: inputNome.value,
            email: inputEmail.value,
            senha: inputSenha.value,
        }

        const novosDados = [...database, user]

        localStorage.removeItem('database')
        localStorage.setItem('database', JSON.stringify(novosDados))

        window.alert('Usuário cadastrado com sucesso!')

        setTimeout(()=>{
            window.location.href = 'login.html'
        }, 3000)
        return
    })

})();


