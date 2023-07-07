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
    const inputEmail = form.querySelector('#email')
    const inputSenha = form.querySelector('#senha')

    form.addEventListener('submit', (event)=>{
        event.preventDefault()
        
        const user = database.find(
            item => item.email == inputEmail.value
        )

        if(!user){
            window.alert('usuário ou senha inválidos!')
            return
        }

        if(user.senha != inputSenha.value){
            window.alert('usuário ou senha inválidos!')
            return
        }

        localStorage.setItem(`mini_projeto`, JSON.stringify(user))

        window.alert('Usuário logado com sucesso!')

        inputEmail.value = ''
        inputSenha.value = ''

        setTimeout(()=>{
            window.location.href = 'index.html'
        }, 2000)

        return
    })

})();


