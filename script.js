const number = document.getElementById('number');
const decrease = document.getElementById('decrease');
const increase = document.getElementById('increase');

function increaseNum () {
    increase.addEventListener('click', function() {
        number.innerHTML++;
    })
}

function decreaseNum() {
    decrease.addEventListener('click', function() {
        number.innerHTML--;
    })
}

increaseNum();
decreaseNum();