botao = document.querySelector ('button.botao')
botao.addEventListener ('click', contar)

function contar () {
    var input1 = document.querySelector ('input.inicio')
    var input2 = document.querySelector ('input.final')
    var input3 = document.querySelector ('input.passo')
    var inicio = Number (input1.value)
    var final = Number (input2.value)
    var passo = Number (input3.value)
    var res = document.querySelector ('div.res')

    for (var contar = inicio; contar < final ; contar += passo ) 
    {
        res.innerHTML += `${contar} `
    } 
}