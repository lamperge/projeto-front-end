botao = document.querySelector ('button.botao')
botao.addEventListener ('click', tabuada)

function tabuada () {
    input = document.querySelector ('input.numero')
    numero = Number (input.value)
    res = document.querySelector ('select#res')
    res.innerHTML = ''

    if (input.value.length == 0)
    {
        window.alert ('Digite um número.')
    }

    else {
        var multiplo = 1
        for ( multiplo ; multiplo <= 15; multiplo += 1)
        {
            var item = document.createElement ('option')
            item.text = `${numero} x ${multiplo} = ${numero * multiplo}`
            res.appendChild (item)
        }
    }
}