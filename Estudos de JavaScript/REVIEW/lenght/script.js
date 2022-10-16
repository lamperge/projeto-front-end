var botao = document.querySelector ('button.botao')
botao.addEventListener ('click', readname)

function readname () {
    var res = document.querySelector ('div.res')
    var input = document.querySelector ('input.input')
    var nome = input.value
    res.innerHTML = `O seu nome é ${nome} e ele possui ${nome.length} letras.`
}