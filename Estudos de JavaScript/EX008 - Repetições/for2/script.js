var botao = document.querySelector ('button.botao')
botao.addEventListener ('click', contador)

function contador () {
    res = document.querySelector ('div.res')

    var input1 = document.querySelector ('input.input1')
    var input2 = document.querySelector ('input.input2')
    var input3 = document.querySelector ('input.input3')

    i = Number (input1.value)
    f = Number (input2.value)
    p = Number (input3.value)

    if (i == 0 || f == 0 || p == 0)
    { window.alert ('Nenhum dos valores pode ser 0') }
    else if (i < f) {
        for (i ; i < f; i += p)
        {
            res.innerHTML += `${i} `
        }
    }
    else if (f < i) {
        for (i ; i > f; i -= p )
        {
            res.innerHTML += `${i} `
        }
    }
  
}