const url = window.location.search.substring(1)
let config = parseInt(url.split('=')[1])

const nomeandoItens = function() {
    const gamer01 = window.localStorage.getItem('gamer_1')
    const gamer02 = window.localStorage.getItem('gamer_2')
    const divNomes = document.getElementById('nomes')

    const nome01 = document.createElement('span')
    nome01.classList.add('nome__participante')
    nome01.textContent = gamer01
    divNomes.appendChild(nome01)

    const nome02 = document.createElement('span')
    nome02.classList.add('nome__participante')
    nome02.textContent = gamer02
    divNomes.appendChild(nome02)

    if (gamer01 == '' || gamer02 == '') {

        const button01 = document.getElementById('for_1')
        button01.textContent = `Gol`

        const button02 = document.getElementById('for_2')
        button02.textContent = `Gol`

    }
    else {
        const button01 = document.getElementById('for_1')
        button01.textContent = `Gol de ${gamer01}`

        const button02 = document.getElementById('for_2')
        button02.textContent = `Gol de ${gamer02}`
    }
}
nomeandoItens()

const contadorPontos = function() {

    for(let i = 1; i <= 2; i++) {

        document.getElementById(`for_${i}`).addEventListener('click', () => {
            
            const tagContador = document.getElementById(`pontos_${i}`)

            let contador = tagContador.innerHTML
            
            let pontuacao = parseInt(contador) + 1
            
            tagContador.textContent = pontuacao
    
            const pontos01 = document.getElementById(`pontos_1`).innerHTML
            const pontos02 = document.getElementById(`pontos_2`).innerHTML
        
            if (pontos01 == config - 1 && pontos02 == config - 1)
                config += 1

            if (pontuacao == config){
                window.location.reload(true)
            }
        })

        document.getElementById(`refresh_${i}`).addEventListener('click', () => {
            const tagContador = document.getElementById(`pontos_${i}`)

            let contador = tagContador.innerHTML
            
            let pontuacao = parseInt(contador) - 1
            
            tagContador.textContent = pontuacao
        })
    }
}
contadorPontos()

const timerSeg = function () {
    let seg = document.getElementById('seconds')
    let segundos = parseInt(seg.innerHTML)

    if (segundos < 9) {
        seg.textContent = `0${segundos + 1}`
    }
    else {
        seg.textContent = segundos + 1
    }

    if (segundos == 59)
        seg.textContent = '00'
}

const timerMin = function() {
    let min = document.getElementById('minutes')
    let minutos = parseInt(min.innerHTML)

    if (minutos < 9) {
        min.textContent = `0${minutos + 1}`
    }
    else {
        min.textContent = minutos + 1
    }

    const dados = Date().toLocaleString().split(' ')
    let horario = dados[4]

    console.log(horario)
}

document.getElementById('start_timer').addEventListener('click', () => {
    setInterval(timerSeg, 1000)
    setInterval(timerMin, 60000)

    const dados = Date().toLocaleString().split(' ')
    let horario = dados[4]

    console.log(horario)
})

document.getElementById('finish').addEventListener('click', () => {
    window.localStorage.clear()

    window.location.href = `../index.html`
})