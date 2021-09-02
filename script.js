let btnWait = document.getElementById('btn-wait');
let btnCount = document.getElementById('btn-count');

let divWait = document.getElementById('div-wait');
let divCount = document.getElementById('div-count');

let count = 0;
divCount.innerHTML = count;
btnCount.addEventListener('click', function () {
  count++;
  divCount.innerHTML = count;
});

divWait.innerHTML = "Ready!";
btnWait.addEventListener('click', function () {
    divWait.innerHTML = "Waiting!";
    setTimeout( () => {divWait.innerHTML = "Done"}, 5000);
})