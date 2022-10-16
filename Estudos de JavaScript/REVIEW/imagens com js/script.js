botao = document.querySelector ('button.botao')
botao.addEventListener ('click', star)

function star () {
    var esp = document.querySelector ('div.foto')
    foto = document.createElement ('img')
    foto.setAttribute ('src','../imagens/estrela.png')
    esp.appendChild (foto)
}   