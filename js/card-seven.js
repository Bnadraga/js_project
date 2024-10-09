const pool = document.getElementById('pool');
const ball = document.getElementById('ball');

pool.addEventListener('click', function (event) {
  const poolRect = pool.getBoundingClientRect();
  const ballRect = ball.getBoundingClientRect();
  const clickX = event.clientX - poolRect.left;
  const clickY = event.clientY - poolRect.top;
  const minX = ballRect.width / 2;
  const minY = ballRect.height / 2;
  const maxX = poolRect.width - ballRect.width / 2;
  const maxY = poolRect.height - ballRect.height / 2;

  const newX = Math.max(minX, Math.min(clickX, maxX));
  const newY = Math.max(minY, Math.min(clickY, maxY));

  ball.style.left = `${newX - ballRect.width / 2}px`;
  ball.style.top = `${newY - ballRect.height / 2}px`;
});
