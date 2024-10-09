function findLargest() {
  const inputOneEight = document.getElementById('card-eight-input-one').value;
  const inputTwoEight = document.getElementById('card-eight-input-two').value;
  const inputThreeEight = document.getElementById(
    'card-eight-input-three'
  ).value;
  const textEight = document.querySelector('.card-eight__text');

  const num = e => {
    return !isNaN(e) && e.trim() !== '';
  };

  if (!num(inputOneEight) || !num(inputTwoEight) || !num(inputThreeEight)) {
    textEight.innerHTML = `Error! Not valid!`.style.color = '#900';
    return;
  }

  const inputOne = parseFloat(inputOneEight);
  const inputTwo = parseFloat(inputTwoEight);
  const inputThree = parseFloat(inputThreeEight);

  const largestNum = Math.max(inputOne, inputTwo, inputThree);

  textEight.innerHTML = `Найбільше число, яке ви ввели - ${largestNum}`;
}
document
  .getElementById('card-eight-input-one')
  .addEventListener('input', findLargest);
document
  .getElementById('card-eight-input-two')
  .addEventListener('input', findLargest);
document
  .getElementById('card-eight-input-three')
  .addEventListener('input', findLargest);
