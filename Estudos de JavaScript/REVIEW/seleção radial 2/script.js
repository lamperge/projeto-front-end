bt = document.querySelector ('button.botao')
bt.addEventListener ('click', definir)

function definir () {
    res = document.querySelector ('div.res') 
    radio = document.getElementsByName ('a')
    if (radio[0].checked)
    {res.innerHTML = 'Direita'} 
    else {res.innerHTML = 'Esquerda'}
}