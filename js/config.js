const configDefinicao = function () {
    const options = document.getElementsByClassName('option__module')

    for(let i = 0; i < options.length; i++) {
        console.log(options[i].value)

        document.getElementById(`option_${i}`).addEventListener('click', () => {
            window.location.href = `../../pages/pontuacao.html?opcao=${options[i].value}`
            console.log(options[i].value)
        })
    }
}

configDefinicao()