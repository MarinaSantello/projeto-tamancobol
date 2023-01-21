window.localStorage.clear

document.getElementById('start').addEventListener('click', () => {
    const nome01 = document.getElementById('nome_1').value
    const nome02 = document.getElementById('nome_2').value

    window.localStorage.setItem('gamer_1', nome01)
    window.localStorage.setItem('gamer_2', nome02)

    window.location.href = './pages/config_partidas.html'
})