const colors = ['red', 'green', 'blue', 'gray', 'rgba(133,122,200)', '#f15025'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
  const randomNumber = getNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
  color.style.color = colors[randomNumber];
});

function getNumber() {
  const num = Math.floor(Math.random() * colors.length);
  // console.log(num);
  return num;
}
