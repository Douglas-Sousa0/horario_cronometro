let elemento_horario = document.getElementById('horario')
let area_marcar = document.getElementById('area-marcar')
let botao_marcar = document.getElementById('botao-marcar')

function pegar_hora(){
    let hora_atual = new Date()

    return hora_atual
}

function exibir_hora(){
    let hora_atual = new Date()

    elemento_horario.innerText = `${hora_atual.getHours()}:${hora_atual.getMinutes()}:${hora_atual.getSeconds()}:${hora_atual.getMilliseconds()}`
}

function marcar_hora(){
    let hora_atual = new Date()

    marcacao = document.createElement('li')
    marcacao.innerText = `- ${hora_atual.getHours()}:${hora_atual.getMinutes()}:${hora_atual.getSeconds()}:${hora_atual.getMilliseconds()}`

    area_marcar.appendChild(marcacao)
}

botao_marcar.onclick = marcar_hora

setInterval(exibir_hora, 1)