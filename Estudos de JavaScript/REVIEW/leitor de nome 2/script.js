input = document.querySelector ('input.input')
valor = input.value
botao = document.querySelector ('button.red')
resultado = document.querySelector ('div.res')

botao.addEventListener ('click', nome)

function nome () {
    input = document.querySelector ('input.input')
    valor = input.value
    botao = document.querySelector ('button.red')
    resultado = document.querySelector ('div.res')
    resultado.innerHTML = `Seu nome tem ${valor.length} letras.`
}