const todoItem = document.querySelectorAll('.inputcommsgerro')
const botaoEnviar = document.querySelector('.botao')

const preenchimento = document.querySelectorAll('.box')
const msgErroIndividual = document.querySelectorAll('.msgerro')

    for(let i=0; i < preenchimento.length; i++){
        preenchimento[i].addEventListener("change", () =>{
            if( preenchimento[i].value != ""){

                preenchimento[i].classList.add('valido');
                preenchimento[i].classList.remove('invalido');  
                msgErroIndividual[i].classList.add('valido');
                msgErroIndividual[i].classList.remove('invalido');
            }else{
                preenchimento[i].classList.add('invalido');
                preenchimento[i].classList.remove('valido');msgErroIndividual[i].classList.add('invalido');msgErroIndividual[i].classList.remove('valido');
            }
        }
        )
    }

function enviarDados() {    
    for (const items of todoItem)
     {        
        const box = items.querySelector('.box')
        const textoErro = items.querySelector('.msgerro')
       
        if (box.value === "") {
            box.classList.add('invalido')
            box.classList.remove('valido')
            textoErro.classList.add('invalido')
        } else {
            box.classList.remove('invalido')
            box.classList.add('valido')
            textoErro.classList.remove('invalido')
        }
    }     
}
