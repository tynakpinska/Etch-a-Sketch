const body = document.querySelector("body");
body.style.height = "100vh";

const askForANumber = () => {
  const result = Number(prompt("Insert a number from 0 to 100"));
  createGrid(result);
};

const fillWithColor = e => {
  e.target.style.backgroundColor = "green";
};

const createGrid = numOfSquares => {
  body.textContent = "";
  const container = document.createElement("div");
  container.className = "container";
  container.style = `display: grid;
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
    container.appendChild(div);
  }

  const divs = document.querySelectorAll(".square");
  divs.forEach(d => {
    d.addEventListener("mouseover", fillWithColor);
  });
};

createGrid();
