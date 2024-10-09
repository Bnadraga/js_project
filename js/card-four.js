const plus = document.getElementById("add"); 
const minus = document.getElementById("remove"); 
const molt = document.getElementById("moltiplicate"); 
const divi = document.getElementById("divis"); 
const resultFour = document.getElementById("result-four"); 

plus.addEventListener('click', () => { 
  const n1 = parseInt(document.getElementById("n1").value); 
  const n2 = parseInt(document.getElementById("n2").value); 
  if (!isNaN(n1) && !isNaN(n2)) { 
    resultFour.textContent = `${n1 + n2}`; 
  } else {
    resultFour.textContent = "Неможливо виконати дію!";
  }
}); 
 
minus.addEventListener('click', () => { 
  const n1 = parseInt(document.getElementById("n1").value); 
  const n2 = parseInt(document.getElementById("n2").value); 
  if (!isNaN(n1) && !isNaN(n2)) {
    resultFour.textContent = `${n1 - n2}`; 
  } else {
    resultFour.textContent = "Неможливо виконати дію!";
  }
}); 
 
molt.addEventListener('click', () => { 
  const n1 = parseInt(document.getElementById("n1").value); 
  const n2 = parseInt(document.getElementById("n2").value); 
  if (!isNaN(n1) && !isNaN(n2)) {
    resultFour.textContent = `${n1 * n2}`; 
  } else {
    resultFour.textContent = "Неможливо виконати дію!";
  }
}); 
 
divi.addEventListener('click', () => { 
  const n1 = parseInt(document.getElementById("n1").value); 
  const n2 = parseInt(document.getElementById("n2").value); 
  if (isNaN(n2) || n2 === 0) { 
    alert('Неможливо виконати дію!'); 
  } else if (!isNaN(n1)) {
    resultFour.textContent = `${n1 / n2}`; 
  } else {
    resultFour.textContent = "Неможливо виконати дію!";
  }
});