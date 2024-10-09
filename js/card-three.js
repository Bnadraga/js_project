let user = 0, computer = 0;
const options = ["камінь", "ножиці", "папір"];

function play(userPlay) {
    const computerPlay = options[Math.floor(Math.random() * options.length)];
    let result = "";

    if (userPlay === computerPlay) result = "Нічия!";
    else if ((userPlay === "камінь" && computerPlay === "ножиці") ||
             (userPlay === "ножиці" && computerPlay === "папір") ||
             (userPlay === "папір" && computerPlay === "камінь")) {
        user;
        result = "Ви виграли!";
    } else {
        computer;
        result = "Комп'ютер виграв!";
    }

    document.getElementById('card-three-block').innerHTML = `Комп'ютер: ${computerPlay}<br>${result}`;
    document.getElementById('computer').textContent = computer;
    document.getElementById('user').textContent = user;
}

document.getElementById('card-three-stone').onclick = () => play('камінь');
document.getElementById('card-three-scissors').onclick = () => play('ножиці');
document.getElementById('card-three-paper').onclick = () => play('папір');