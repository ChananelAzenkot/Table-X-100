function changeBGToBlack() {
  const root = document.querySelector(":root");
  root.style.setProperty("--mainColor", "black");
  root.style.setProperty("--alternativeColor", "white");
}

function changeBGToWhite() {
  const root = document.querySelector(":root");
  root.style.setProperty("--mainColor", "white");
  root.style.setProperty("--alternativeColor", "black");
}

for (let i = 0; i <= 10; i++) {
  for (let j = 0; j <= 10; j++) {
    const span = document.createElement("span");
    span.innerHTML = i * j;
    const message = i + " * " + j + " = " + i * j;
    span.setAttribute("mytitle", message);

    if (j == 0) {
      span.innerHTML = i + j;
      span.style.backgroundColor = getRandomColor();
      span.style.color = getRandomColor();
      span.classList.add("disable-hover");
      span.onclick = function () {
        num1 = i;
        showResult();
      };
    }
    if (i == 0) {
      span.innerHTML = i + j;
      span.style.backgroundColor = getRandomColor();
      span.style.color = getRandomColor();
      span.classList.add("disable-hover");
      span.onclick = function () {
        num2 = j;
        showResult();
      };
    }
    if (i == 0 && j == 0) {
      span.innerHTML = "❌";
      span.style.backgroundColor = "black";
      span.style.color = "black";
    }
    document.body.appendChild(span);
  }
  document.body.appendChild(document.createElement("br"));
}

let num1;
let num2;
function showResult() {
  restCode();
  if (num1 && num2) {
    const result = num1 * num2;
    const resultSpan = document.querySelector(
      `span[mytitle="${num1} * ${num2} = ${result}"]`
    );
    resultSpan.classList.add("theNumber");
    num1 = null;
    num2 = null;
  }
}

function restCode() {
  const selectedNumber = document.querySelector(".theNumber");
  const restColor = document.querySelector("span");
  if (selectedNumber != null && restColor != null) {
    selectedNumber.classList.remove("theNumber");
    restColor.parentNode.removeChild("span");
  }
}
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
