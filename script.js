//your JS code here. If required.
const container=document.getElementsByClassName("container");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#2ecc71", "#f1c40f", "#e67e22", "#1abc9c"];
for(let i=0;i<=800;i++){
	const boxes=document.createElement("div");
	boxes.classList.add("square");
	boxes.addEventListener("mouseover",()=>setColor(boxes));
	boxes.addEventListener("mouseleave",()=>removeColor(boxes));
	container.appendChild(boxes);
}
function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 10px ${color}, 0 0 20px ${color}`;
}
function removeColor(element) {
  setTimeout(() => {
    element.style.backgroundColor = "#1d1d1d";
    element.style.boxShadow = "0 0 2px #000";
  }, 1000);
}

// Pick a random color
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}