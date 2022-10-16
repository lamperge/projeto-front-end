var b = document.querySelector ('button.b')
b.addEventListener ('click', ativar)

function ativar () {
    res = document.querySelector ('div.res')
    //seleção de sexo
    selecradial = document.getElementsByName ('radio')
    if (selecradial[0].checked)
    {sexo = 'Homem'} else 
    {sexo = 'Mulher'}

    res.innerHTML = `Você é ${sexo}`
}