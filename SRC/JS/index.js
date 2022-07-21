const todoItem = document.querySelectorAll('.inputcommsgerro')
const botaoEnviar = document.querySelector('.botao')

botaoEnviar.addEventListener('click', 
        function (event){
        event.preventDefault()
})

function enviarDados() {
    for (const items of todoItem) {
        const box = items.querySelector('.box')
        const textoerro = items.querySelector('.msgerro')
       
        if (box.value === "") {
            box.classList.add('invalido')
            box.classList.remove('valido')
            textoerro.classList.add('invalido')
        } else {
            box.classList.remove('invalido')
            box.classList.add('valido')
            textoerro.classList.remove('invalido')
        }
    }
}
