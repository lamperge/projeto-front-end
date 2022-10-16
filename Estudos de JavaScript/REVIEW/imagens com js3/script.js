botao = document.querySelector ('button.botao')
botao.addEventListener ('click', createimg)

function createimg () {
    res = document.querySelector ('div.res')
    a = document.createElement ('img')
    a.setAttribute ('src','peng.png')
    res.appendChild (a)

}