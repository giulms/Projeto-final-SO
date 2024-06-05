const playerNameF = document.querySelector('#player-name');
const userNameBox = document.querySelector('#user-name-box');
const startBtn = document.querySelector('#start-btn');

const questionsBox = document.querySelectorAll('.question-box');
const numberOfQuestions = questionsBox.length;

const nextBtn = document.querySelectorAll('.next-btn');
const previousBtn = document.querySelectorAll('.prev-btn');

const answers = [
  undefined,
  '1969',
  'ibm',
  'unix',
  'msdos',
  '1984',
  '5',
  '2001',
  'ios',
  'quântica',
  'windows 11',
];

let currentQuestion = 1;
let score = 0;

console.log(questionsBox.length);

startBtn.addEventListener('click', function () {
  window.alert('Bem-vindo(a) ao nosso quiz, ' + playerNameF.value + '!');
  questionsBox[0].style.display = 'none';
  questionsBox[1].style.display = 'block';
});

nextBtn.forEach((btn, i) =>
  btn.addEventListener('click', () => {
    const answer = questionsBox[currentQuestion].firstElementChild.value;
    if (answer.toLowerCase() === answers[currentQuestion]) {
      score++;
    }
    console.log(score);
    questionsBox[currentQuestion].style.display = 'none';
    currentQuestion++;
    questionsBox[currentQuestion].style.display = 'block';
    if (i == nextBtn.length - 1) {
        window.alert(
            `Parabéns, ${playerNameF.value}! Você acertou ${score} de ${numberOfQuestions - 1} questões!`
        );
        location.reload();
    }
  })
  
);

previousBtn.forEach((btn) =>
  btn.addEventListener('click', () => {
    questionsBox[currentQuestion].style.display = 'none';
    currentQuestion--;
    questionsBox[currentQuestion].style.display = 'block';
  })
);
