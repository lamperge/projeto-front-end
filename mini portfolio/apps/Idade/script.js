var botao = document.querySelector ('button.botao')
    botao.addEventListener ('click', detectar )

    function detectar () {
        var inputnasc = document.querySelector ('input.nascinput')
        var nasc = Number (inputnasc.value)
        var agora = new Date ()
        var ano = agora.getFullYear ()
        var idade = ano - nasc
        var resultado = document.querySelector ('div.res')
        var selectsex = document.getElementsByName ('radsex')

    if (inputnasc.value.length == 0)
    {
        window.alert ('Insira o ano em que você nasceu.')
    } else {

    if ( idade < 0)
    {resultado.innerHTML = 'É impossível você ter nascido no ano que você inseriu.'}        

    if (selectsex[0].checked) {
    if (idade <= 5 && idade >= 0)
        {resultado.innerHTML = `Você é um bebê de ${idade} anos <br><br> <img src="imagens/bb.png">`
    } else if ( idade > 5 && idade <= 17) {
        resultado.innerHTML = `Você é um menino de ${idade} anos<br><br> <img src="imagens/boy.png">`
    } else if ( idade > 17 && idade <= 59) {
        resultado.innerHTML = `Você é um homem adulto de  ${idade} anos<br><br> <img src="imagens/man.png">`
    } else if ( idade > 60 && idade <= 120) {
        resultado.innerHTML = `Você é um homem idoso de ${idade} anos<br><br> <img src="imagens/oldman.png">` }
      else if (idade > 120 )
        {resultado.innerHTML = `Você é um vampiro!! <br><br> <img src="imagens/vampiro.png">`}
        }

        if (selectsex[1].checked) {
        if (idade <= 5 && idade >=0){
        resultado.innerHTML = `Você é uma bebê de ${idade} anos<br><br><img src="imagens/bb.png">`
    }
     else if ( idade > 5 && idade <= 17) {
        resultado.innerHTML = `Você é uma menina de ${idade} anos<br><br> <img src="imagens/girl.png">`
    } else if ( idade > 17 && idade <= 59) {
        resultado.innerHTML = `Você é uma mulher adulta de ${idade} anos<br><br> <img src="imagens/woman.png">`
    } else if ( idade > 60 && idade <= 120) {
        resultado.innerHTML = `Você é uma mulher idosa de ${idade} anos<br><br> <img src="imagens/oldwoman.png">`}
      else if (idade > 120 )
        {resultado.innerHTML = `Você é um vampira!! <br><br> <img src="imagens/vampira.png">`}
        } 
    }
    } 

