function btn(event) {
    var menuContent = document.querySelector('.menu-content');
    menuContent.style.display = (menuContent.style.display === 'block') ? 'none' : 'block';

    // Закрыть меню, если щелкнуть за его пределами
    document.addEventListener('click', function(event) {
        if (!event.target.matches('.menu-btn') && !menuContent.contains(event.target)) {
            menuContent.style.display = 'none';
        }
    });
}

function checkAnswer(event) {
    let button = event.srcElement;
    let innerHTML = button.innerHTML;
    if (innerHTML === 'Earth') {
        // alert(innerHTML + ' Correct ! ! !');
        button.style.backgroundColor = 'Green';
        button.parentElement.querySelector('.result').innerHTML = 'Correct!';
    } else {
        // alert(innerHTML + ' Incorrect');
        button.style.backgroundColor = 'Red';
        button.parentElement.querySelector('.result').innerHTML = 'Incorrect!';
    };
}

function checkAnswer2() {
    let button = event.srcElement;
    let answer = document.getElementById("inputAnswer").value;
    let input = document.querySelector('input');
    let upcaseAnswer = answer.toUpperCase();
    if (upcaseAnswer === "SIRIUS") {
        // alert("Your answer " + upcaseAnswer + " is correctly");
        document.querySelector('.result2').innerHTML = 'Correct!';
        input.style.backgroundColor = 'Green';
        button.style.backgroundColor = 'Green';
    } else {
        // alert("Your answer " + upcaseAnswer + " is inCorrectly");
        document.querySelector('.result2').innerHTML = 'Incorrect!';
        input.style.backgroundColor = 'Red';
        button.style.backgroundColor = 'Red';
    }
}

// Функция для отображения/скрытия кнопки при прокрутке страницы
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var button = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        button.style.display = 'flex'; //flex block
    } else {
        button.style.display = 'none';
    }
}

// Функция для плавной прокрутки вверх страницы
function scrollToTop() {
    document.body.scrollTop = 0; // Для Safari
    document.documentElement.scrollTop = 0; // Для других браузеров
}
