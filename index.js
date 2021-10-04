const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
let timerId = null;

const onStartClick = () => {
  document.body.style.backgroundColor =
    colors[
      randomIntegerFromInterval(0, colors.indexOf(colors[colors.length - 1]))
    ];
};

startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
    onStartClick();
  }, 1000);

  startBtn.setAttribute("disabled", true);
});

stopBtn.addEventListener("click", () => {
  clearInterval(timerId);

  startBtn.removeAttribute("disabled");
});
