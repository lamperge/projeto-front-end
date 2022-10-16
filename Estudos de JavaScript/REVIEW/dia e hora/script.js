agora = new Date ()
diaSem = agora.getDay ()
hora = agora.getHours ()
min = agora.getMinutes ()
res = document.querySelector ('div.res') 

if (diaSem == 0)
{diaSem = 'Domingo'}
else if (diaSem == 1)
{diaSem = 'Segunda'}
else if (diaSem == 2)
{diaSem = 'Terça'}
else if (diaSem == 3)
{diaSem = 'Quarta'}
else if (diaSem == 4)
{diaSem = 'Quinta'}
else if (diaSem == 5)
{diaSem = 'Sexta'}
else if (diaSem == 6)
{diaSem = 'Sábado'}

res.innerHTML = `Hoje é ${diaSem} e a hora é ${hora}:${min}`

