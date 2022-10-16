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

    if ( input1.value.length == 0 || input2.value.length == 0 || input3.value.length == 0 )
    { window.alert ('Você não inseriu algum número.' )}

    else if (passo <= -1 || passo == 0)
    {
        window.alert ('O passo não pode ser 0 e nem negativo.')
    }

    else if ( inicio > fim )
    {
        for (c = inicio; c > fim; c -= passo )
        {
            res.innerHTML += `${c}, `
        } 
    }

    else
    {
        for (inicio; fim > inicio; inicio += passo )
        {
            res.innerHTML += `${inicio}, `
        } 
    }
    
    res.innerHTML += `<strong>${fim}.</strong>`
} 
