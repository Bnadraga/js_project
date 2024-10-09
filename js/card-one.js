const birthYearInput = document.getElementById('birthYear');
const checkButton = document.getElementById('checkButton');
const resultElement = document.getElementById('result');
const formOne = document.querySelector('.card-one__form');

formOne.addEventListener('submit', e => {
  e.preventDefault();
});

checkButton.addEventListener('click', function () {
  const year = parseInt(birthYearInput.value);
  let isLeapYear;

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    isLeapYear = true;
  } else {
    isLeapYear = false;
  }

  if (isLeapYear) {
    resultElement.innerHTML = `Рік ${year} був високосним.`;
  } else {
    resultElement.innerHTML = `Рік ${year} не був високосним.`;
  }
});
