const words = [
  "abenteuer",
  "autarkie",
  "beispiel",
  "demokratie",
  "energie",
  "flughafen",
  "geselligkeit",
  "haeuser",
  "interessant",
  "jahreszeit",
  "kunstwerk",
  "liebe",
  "nachrichten",
  "telefon",
  "universitaet",

  "adventure",
  "autonomy",
  "example",
  "democracy",
  "energy",
  "airport",
  "sociability",
  "houses",
  "interesting",
  "season",
  "artwork",
  "love",
  "news",
  "telephone",
  "university",

  "aventura",
  "autonomia",
  "ejemplo",
  "democracia",
  "energia",
  "aeropuerto",
  "sociabilidad",
  "casas",
  "interesante",
  "estacion",
  "obra de arte",
  "amor",
  "noticias",
  "telefono",
  "universidad",
];

let palabraAleatoria;
let time = 10;
let score = 0;
let timer;

const randomWordElement = document.getElementById("randomWord");
const textInput = document.getElementById("text");
const timeSpan = document.getElementById("timeSpan");
const scoreElement = document.getElementById("score");
const endGameContainer = document.getElementById("end-game-container");
const startButton = document.getElementById("startButton");

function randomWords() {
  return words[Math.floor(Math.random() * words.length)];
}

function addToDOM() {
  palabraAleatoria = randomWords();
  randomWordElement.textContent = palabraAleatoria;
}

function actualizarTiempo() {
  timer = setInterval(() => {
    time--;
    timeSpan.textContent = `${time}s`;
    if (time <= 0) {
      clearInterval(timer);
      gameOver();
    }
  }, 1000);
}

function updateScore() {
  score++;
  scoreElement.textContent = score;
}

function gameOver() {
  endGameContainer.innerHTML = `
      <h2>¡Se acabó el tiempo!</h2>
      <p>Tu puntaje final es: ${score}</p>
      <button onclick="restartGame()">Jugar de nuevo</button>
    `;
  endGameContainer.style.display = "block";
  document.querySelector(".main").style.display = "none";
}

function restartGame() {
  location.reload();
}

function startGame() {
  startButton.style.display = "none";
  document.querySelector(".main").style.display = "block";
  addToDOM();
  actualizarTiempo();
}

textInput.addEventListener("input", (e) => {
  const palabraIngresada = e.target.value;
  if (palabraIngresada === palabraAleatoria) {
    time += 3;
    updateScore();
    addToDOM();
    e.target.value = "";
  }
});

startButton.addEventListener("click", startGame);
