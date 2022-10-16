botao = document.querySelector ('button.botao')
botao.addEventListener ('click', contador)

function contador () {    
    input1 = document.querySelector ('input.input1')
    input2 = document.querySelector ('input.input2')
    input3 = document.querySelector ('input.input3')
    inicio = Number (input1.value)
    fim = Number (input2.value)
    passo = Number (input3.value)   
    res = document.querySelector ('div.res')
    res.innerHTML = 'Contando... <br>'

    if ( inicio == 0 || fim == 0 || passo == 0 )
    { window.alert (' Nenhum dos valores pode ser 0' )}

    else if ( inicio > fim )
    {
        for (c = inicio; c > fim; c -= passo )
        {
            res.innerHTML += `${c} `
        } 
    }

    else
    {
        for (inicio; fim > inicio; inicio += passo )
        {
            res.innerHTML += `${inicio} `
        } 
    }
    
    res.innerHTML += `${fim}`
} 
