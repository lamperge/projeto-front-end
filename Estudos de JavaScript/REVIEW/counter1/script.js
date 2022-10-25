var botao = document.querySelector ('button.botao')
botao.addEventListener ('click',resultado)

var botao2 = document.querySelector ('button.botao2')
botao2.addEventListener ('click', clear)


function resultado () {
    //manipulação de DOM
    var res = document.querySelector ('div.res')
    var input1 = document.querySelector ('input.input1')
    var input2 = document.querySelector ('input.input2')
    var input3 = document.querySelector ('input.input3')
    var start = Number (input1.value) 
    var end = Number (input2.value)
    var step = Number (input3.value)

    //programação
    if (input1.value.length == 0 || input2.value.length == 0 || input3.value.length == 0 )
    {
        alert ('Insira todos os valores.')
    }
    else if (end > start) {
        for (c = start; c < end ; c += step )
        {
            res.innerHTML += `${c},`
        }
        res.innerHTML += `${end}.`
        } 
    else if (end < start) {
            for (c = start; c > end ; c -= step )
            {
                res.innerHTML += `${c},`
            }
            res.innerHTML += `${end}.`
            }
    }

function clear () {
    var res = document.querySelector ('div.res')
    res.innerHTML = ``
}
