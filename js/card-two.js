const btnTwo = document.getElementById('card-two-btn')
const textTwo = document.querySelector('.card-two__text')

btnTwo.addEventListener('click', () => {
    const randomNumberTwo = Math.floor(Math.random() * 10) + 1;
    let inputTwo = document.getElementById('card-two-input').value
    inputTwo = parseInt(inputTwo)

    if(inputTwo === randomNumberTwo){
        textTwo.innerHTML = `Вітаю, ви вгадали число ${randomNumberTwo}!`
        textTwo.style.color = '#039900'
    }
    else {
        textTwo.style.color = '#900'
        textTwo.innerHTML = `Ви програли, комп’ютер загадав ${randomNumberTwo}`
    }
    document.getElementById('card-two-input').value = '';
})
