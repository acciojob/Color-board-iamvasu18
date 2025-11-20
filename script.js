const container = document.getElementById("container");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#2ecc71", "#f1c40f", "#e67e22", "#1abc9c"];
const SQUARES = 800;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));

  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 10px ${color}`;
}

function removeColor(element) {
  setTimeout(() => {
    element.style.backgroundColor = "rgb(29, 29, 29)";
    element.style.boxShadow = "0 0 2px #000";
  }, 1000);
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
