var button = document.querySelector('button');
button.addEventListener('click', function() {
var randomLoc = 1 + Math.floor(Math.random() * 6);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location1 + 2;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
var a = []
while (isSunk == false) {
    guess = prompt("Приготовьтесь, цельтесь, ОГОНЬ! (Введите число от 1 до 8):");
    if (guess < 1 || guess > 8 || isNaN(guess) || guess == "" || guess.indexOf(' ') > -1) {
        alert("Пожалуйста, введите корректное число!");
        } else if (a.indexOf(guess) != (-1)) {
        alert("В это поле вы уже стреляли.");
        }
    else {
        a.push(guess);
        guesses = guesses + 1;
        if (guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1;
            alert("Попали!");
            if (hits == 3) {
                isSunk = true;
                alert("Вы потопили мой корабль.");
            }
            } else {alert("Мимо!");
            }
        }
    }
var stats = "Вы сделали " + guesses + " попыток, чтобы потопить мой корабль. " +
    "Это значит, что точность вашей стрельбы " + Math.floor(100*3/guesses) + "%.";
alert(stats);
})
