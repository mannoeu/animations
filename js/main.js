const cursor = document.querySelector(".cursor");

function cursorAnimated(event) {
  const { clientX: x, clientY: y } = event;
  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
}

window.addEventListener("mousemove", cursorAnimated);
