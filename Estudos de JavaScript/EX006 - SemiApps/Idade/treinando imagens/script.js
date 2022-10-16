var espaço = document.querySelector ('div.imagens')
var botao = document.querySelector ('button.botao')
botao.addEventListener ('click', aparecer)

function aparecer () {
    var espaço = document.querySelector ('div.imagens')
    var imagem = document.createElement ('img')
    // img.setAttribute ('class','foto') essa linha serve para criar atributos (class, id) e seus respectivos valores. Nesse exemplo seria como ir no HTML e colocar <img class='foto'>
    imagem.setAttribute ('src', '../imagens/bb.png')
    espaço.appendChild (imagem)

}