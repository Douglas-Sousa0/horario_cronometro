let elemento_contagem = document.getElementById('contagem')
let area_marcar = document.getElementById('area-marcar')
let botao_marcar = document.getElementById('botao-marcar')
let titulo = document.querySelector('h1')
let botao_horario = document.getElementById('botao-horario')
let botao_cronometro = document.getElementById('botao-cronometro')
let area_selecao = document.getElementById('area-selecionar')

let contagem_horario
let contagem_cronometro

let segundos = 0
let minutos = 0
let horas = 0  


function ajustar_texto(valor){
    if(valor < 10){
        return `0${valor}`
    } else{
        return valor
    }
}


function exibir_contagem_horario(){
        let hora_atual = new Date()
    
        elemento_contagem.innerText = `${hora_atual.getHours()}:${hora_atual.getMinutes()}:${hora_atual.getSeconds()}:${hora_atual.getMilliseconds()}`
}

function exibir_contagem_cronometro(){
    // cálculo horário
    if(segundos < 59){
        segundos += 1
    } else{
        segundos = 0
        minutos += 1
    }

    if(minutos === 60){
        minutos = 0
        horas += 1
    }

    if(horas === 24){
        horas = 0
    }

    // ajustando texto para não ficar somente um número se for menor que 10
    exibir_horas = ajustar_texto(horas)
    exibir_minutos = ajustar_texto(minutos)
    exibir_segundos = ajustar_texto(segundos)

    elemento_contagem.innerText = `${exibir_horas}:${exibir_minutos}:${exibir_segundos}`
}


function marcar(){
    marcacao = document.createElement('li')
    marcacao.innerText = `- ${elemento_contagem.innerText}`

    area_marcar.appendChild(marcacao)
}


function ativar_cronometro(){
    clearInterval(contagem_horario)
    
    titulo.innerText = 'Cronômetro'
    elemento_contagem.innerText = '00:00:00'

    contagem_cronometro = setInterval(exibir_contagem_cronometro, 1000)
}

function ativar_horario(){
    clearInterval(contagem_cronometro)
    
    titulo.innerText = 'Horário'
    elemento_contagem.innerText = '00:00:00:000'

    contagem_horario = setInterval(exibir_contagem_horario, 1)
}


botao_horario.onclick = ativar_horario
botao_cronometro.onclick = ativar_cronometro

botao_marcar.onclick = marcar

