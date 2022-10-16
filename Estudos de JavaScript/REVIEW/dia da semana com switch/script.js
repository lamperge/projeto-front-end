res = document.querySelector ('div.res')
agora = new Date ()
ds = agora.getDay ()
switch (ds) {
    case 0: ds = `Domingo`
        break
    case 1: ds = `Segunda`
        break
    case 2: ds = `Terça`
        break
    case 3: ds = `Quarta`
        break
    case 4: ds = `Quinta`
        break
    case 5: ds = `Sexta`
        break
    case 6: ds = `Sábado`
        break 
}
res.innerHTML = `hoje é ${ds}` 