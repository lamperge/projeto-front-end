let input1 = document.querySelector ('input.input')
let select = document.querySelector ('select#select')
let res  = document.querySelector ('div.res')

let valores = []

function IsNumero (n) {
    if (Number (n) >= 1 && Number (n) <= 100 ) {
        return true
    } else {
        return false 
    }
}

function InLista (n, l) {
    if (l.indexOf (Number (n)) != -1 ) {
        return true
    } else {
        return false 
    }
}

function adicionar () {
    if (IsNumero(input1.value) && !InLista(input1.value, valores)) {
        valores.push (Number (input1.value))
        let item = document.createElement ('option')
        item.text = `Valor ${input1.value} adicionado`
        select.appendChild (item)
    }
    else {
        window.alert ('Valor inválido ou já encontrado na lista')
    } 

    input1.value = ''
    input1.focus ()
}

function finalizar () {
    if (valores.length == 0 ){
        alert ('Adicione valores antes de finalizar')
    } 
    else {
        let tot = valores.length
        let maior = valores [0]
        let menor = valores [0]
        let soma = 0
        let media = 0
                for (let pos in valores ) 
        {   soma += valores [pos]
            if (valores [pos] > maior )
            maior = valores [pos]
            if (valores [pos] < menor )
            menor = valores [pos]
        }

        media = soma / tot 
        res.innerHTML = ``
        res.innerHTML += `<p> * ao todos temos ${tot} números cadastrados </p>`
        res.innerHTML += `<p>* O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>* O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>* A soma dos valores informados foi ${soma}</p>`  
        res.innerHTML += `<p>* A média dos valores informados foi ${media}</p>`  
    }
}

