const scientists = [
  {
    name: 'Albert',
    surname: 'Einstein',
    born: 1879,
    dead: 1955,
    id: 1,
  },
  {
    name: 'Isaac',
    surname: 'Newton',
    born: 1643,
    dead: 1727,
    id: 2,
  },
  {
    name: 'Galileo',
    surname: 'Galilei',
    born: 1564,
    dead: 1642,
    id: 3,
  },
  {
    name: 'Marie',
    surname: 'Curie',
    born: 1867,
    dead: 1934,
    id: 4,
  },
  {
    name: 'Johannes',
    surname: 'Kepler',
    born: 1571,
    dead: 1630,
    id: 5,
  },
  {
    name: 'Nicolaus',
    surname: 'Copernicus',
    born: 1473,
    dead: 1543,
    id: 6,
  },
  {
    name: 'Max',
    surname: 'Planck',
    born: 1858,
    dead: 1947,
    id: 7,
  },
  {
    name: 'Katherine',
    surname: 'Blodgett',
    born: 1898,
    dead: 1979,
    id: 8,
  },
  {
    name: 'Ada',
    surname: 'Lovelace',
    born: 1815,
    dead: 1852,
    id: 9,
  },
  {
    name: 'Sarah E.',
    surname: 'Goode',
    born: 1855,
    dead: 1905,
    id: 10,
  },
  {
    name: 'Lise',
    surname: 'Meitner',
    born: 1878,
    dead: 1968,
    id: 11,
  },
  {
    name: 'Hanna',
    surname: 'Hammarström',
    born: 1829,
    dead: 1909,
    id: 12,
  },
];

function getBornIn19thCentury() {
  const scientists19th = scientists.filter(
    scientist => scientist.born >= 1800 && scientist.born < 1900
  );
  displayScientists(scientists19th);
}

function sortAlphabetically() {
  const sortedScientists = [...scientists].sort((a, b) =>
    a.surname.localeCompare(b.surname)
  );
  displayScientists(sortedScientists);
}

function sortByYearsLived() {
  const sortedByYears = [...scientists].sort(
    (a, b) => b.dead - b.born - (a.dead - a.born)
  );
  displayScientists(sortedByYears);
}

function findLatestBorn() {
  const latestBorn = scientists.reduce(
    (latest, scientist) => (scientist.born > latest.born ? scientist : latest),
    scientists[0]
  );
  displayScientists([latestBorn]);
}

function findYearOfBirth(name) {
  const scientist = scientists.find(sc => sc.name === name);
  return scientist ? scientist.born : null;
}

function findScientistsBySurnameStartingWith(letter) {
  const filteredScientists = scientists.filter(sc =>
    sc.surname.startsWith(letter)
  );
  displayScientists(filteredScientists);
}

function removeScientistsByFirstNameStartingWith(letter) {
  const filteredScientists = scientists.filter(
    sc => !sc.name.startsWith(letter)
  );
  displayScientists(filteredScientists);
}

function findLongestAndShortestLived() {
  const livedYears = scientists.map(sc => ({
    ...sc,
    yearsLived: sc.dead - sc.born,
  }));
  const longestLived = livedYears.reduce((prev, current) =>
    current.yearsLived > prev.yearsLived ? current : prev
  );
  const shortestLived = livedYears.reduce((prev, current) =>
    current.yearsLived < prev.yearsLived ? current : prev
  );
  displayScientists([longestLived, shortestLived]);
}

function findScientistsWithSameInitials() {
  const sameInitials = scientists.filter(
    sc => sc.name.charAt(0) === sc.surname.charAt(0)
  );
  displayScientists(sameInitials);
}

function allScientistsWorkedIn19thCentury() {
  const allIn19th = scientists.every(sc => sc.born >= 1800 && sc.dead < 1900);
  alert(`Усі вчені працювали в 19 столітті: ${allIn19th}`);
}

function displayScientists(scientistsList) {
  const listElement = document.querySelector('.card-ten__list');
  listElement.innerHTML = '';
  scientistsList.forEach(scientist => {
    const item = document.createElement('li');
    item.classList.add('card-ten__item');
    item.innerHTML = `<p class="card-ten__text">${scientist.name} ${scientist.surname}</p>`;
    listElement.appendChild(item);
  });
}

document.getElementById('btn1').addEventListener('click', getBornIn19thCentury);
document.getElementById('btn2').addEventListener('click', sortAlphabetically);
document.getElementById('btn3').addEventListener('click', sortByYearsLived);
document.getElementById('btn4').addEventListener('click', findLatestBorn);
document.getElementById('btn5').addEventListener('click', () => {
  alert(`Рік народження Albert Einstein: ${findYearOfBirth('Albert')}`);
});
document.getElementById('btn6').addEventListener('click', () => {
  findScientistsBySurnameStartingWith('C');
});
document.getElementById('btn7').addEventListener('click', () => {
  removeScientistsByFirstNameStartingWith('A');
});
document
  .getElementById('btn8')
  .addEventListener('click', findLongestAndShortestLived);
document
  .getElementById('btn9')
  .addEventListener('click', findScientistsWithSameInitials);
