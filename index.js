const body = document.querySelector("body");

const askForANumber = () => {
  const result = Number(prompt("Insert a number from 0 to 100"));
  createGrid(result);
};

const fillWithColor = e => {
  if (e.target.style.backgroundColor) {
    let colorValues = e.target.style.backgroundColor.slice(4).split(",");
    colorValues = colorValues.map(v => v.trim());
    let red = colorValues[0] - 20 > 0 ? colorValues[0] - 20 : 0;
    let green = colorValues[1] - 20 > 0 ? colorValues[1] - 20 : 0;
    let blue =
      colorValues[2].substring(0, colorValues[2].length - 1) - 20 > 0
        ? colorValues[2].substring(0, colorValues[2].length - 1) - 20
        : 0;
    e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  } else {
    e.target.style.backgroundColor = `rgb(${Math.round(
      Math.random() * 255
    )}, ${Math.round(Math.random() * 255)}, ${Math.round(
      Math.random() * 255
    )})`;
  }
};

const createGrid = numOfSquares => {
  body.textContent = "";
  const container = document.createElement("div");
  container.className = "container";
  container.style = `max-width: 100vw;
                        max-height: 90vh;
                        aspect-ratio: 1;
                        display: grid;
                        grid-template-columns: repeat(${
                          numOfSquares || 16
                        }, 1fr);
                        grid-template-rows: repeat(${
                          numOfSquares || 16
                        }, 1fr);`;
  body.appendChild(container);

  const button = document.createElement("button");
  button.textContent = "Click here to set a number of squares per side";
  button.style = "padding: 5px; margin: 10px;";
  button.addEventListener("click", askForANumber);
  body.insertBefore(button, container);

  for (let i = 1; i <= (Math.pow(numOfSquares, 2) || 256); i++) {
    const div = document.createElement("div");
    div.className = "square";
    div.style.height = `${90 / numOfSquares}vh`;
    div.style.border = '1px solid green';
    div.style.aspectRatio = '1';
    container.appendChild(div);
  }

  const divs = document.querySelectorAll(".square");
  divs.forEach(d => {
    d.addEventListener("mouseover", fillWithColor);
  });
};

createGrid();
