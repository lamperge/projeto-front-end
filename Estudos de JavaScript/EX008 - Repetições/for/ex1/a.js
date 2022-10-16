    botao = document.querySelector ('button.botao')
botao.addEventListener ('click', contar)

function contar () {
    res = document.querySelector ('div.res')
    input1 = document.querySelector ('input.inicio')
    input2 = document.querySelector ('input.fim')
    input3 = document.querySelector ('input.passo')
    inicio = Number (input1.value)
    fim = Number (input2.value)
    passo = Number (input3.value)

    if (inicio == 0 || fim == 0 || passo == 0 ) 
    {
        window.alert ('Nenhum dos valores pode ser 0')
    }
    else {
    for (c = inicio; c < fim; c += passo )
    {
        res.innerHTML +=` ${c} ,` 
    }
    res.innerHTML += `${fim}.`} }

