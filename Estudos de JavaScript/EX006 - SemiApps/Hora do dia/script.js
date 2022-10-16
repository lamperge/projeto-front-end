var fundo = document.body
var imagem = document.querySelector ('div.imagem')  
var titulohora = document.querySelector ('h2.titulo2')
var agora = new Date ()
horario = agora.getHours ()
minutos = agora.getMinutes ()

titulohora.innerHTML =  `Agora são <strong>${horario}:${minutos}</strong>`

if ( horario >= 0 && horario < 5 || horario >= 18 && horario < 24 ) {
    imagem.innerHTML = '<img src="../Ex003/boanoite.png">'
    fundo.style.background = "#30478C"
} 
else if  ( horario >= 5 && horario < 16 ) 
{
    imagem.innerHTML = '<img src="../Ex003/dia.png">'
    fundo.style.background = "#F3B701"
}
else if ( horario >= 16 && horario < 18 ) {
    imagem.innerHTML = '<img src="../Ex003/tarde.png">'
    fundo.style.background = "#840005"
}