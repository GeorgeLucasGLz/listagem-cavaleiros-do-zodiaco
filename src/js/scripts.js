const changeBtn = document.querySelector('#change')
const options = document.querySelector('option')
const body = document.querySelector('body')
const main = document.querySelector('main')
let card = document.querySelectorAll('.cartao-cdz')
let cardList = document.querySelector('.listagem-cdz')
let cardDescription = document.querySelector('descricao')
changeBtn.addEventListener('change', changeTheme)

/*
card.forEach(cardCdz => {

    cardCdz.addEventListener('click', clicou)

    function clicou() {

        main.style.visibility = 'hidden'
        cardCdz.style.visibility = 'visible'
        cardCdz.classList.add('card-center')
        cardCdz.classList.remove('cartao')
        cardCdz.classList.add('seiya-tag')
        
    }
})

body.addEventListener('click', voltarTudo)
*/






function changeTheme() {

    if (changeBtn.value === 'padrao') {

        body.classList.remove('purple-galaxy')
        main.classList.remove('purple-galaxy')
        body.classList.remove('red-galaxy')
        main.classList.remove('red-galaxy')
    }

    if (changeBtn.value === 'galaxia-roxa') {

        body.classList.add('purple-galaxy')
        main.classList.add('purple-galaxy')
        body.classList.remove('red-galaxy')
        main.classList.remove('red-galaxy')
    }

    if (changeBtn.value === 'galaxia-vermelha') {

        body.classList.add('red-galaxy')
        main.classList.add('red-galaxy')
    }

}


