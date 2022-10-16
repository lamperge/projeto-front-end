botao = document.querySelector ('button.botao')
botao.addEventListener ('click', atv)


function atv () {
    res = document.querySelector ('div.res')
    select = document.getElementsByName ('r1')
    if (select[0].checked)
    {resposta = 'A'}
    if (select[1].checked)
    {resposta = 'B'}
    res.innerHTML = `${resposta}`
}