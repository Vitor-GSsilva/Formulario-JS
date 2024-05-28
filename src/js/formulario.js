const inputs = document.querySelectorAll(".input")
const avisos = document.querySelectorAll(".aviso");
const botao = document.getElementById('button')

inputs.forEach((input, index) => {
    botao.addEventListener('click', function(){
        
        if(input.value !== ""){
            input.style.borderColor = "green"
            avisos[index].classList.add("nao-mostrar")
        }else if(input.value == ""){
            input.style.borderColor = "red"
            avisos[index].classList.remove("nao-mostrar")
        }
    });    
});