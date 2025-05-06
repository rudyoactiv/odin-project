const gridSizeInput = document.getElementById("gridSize");
const createGridButton = document.getElementById("createGrid");
const container = document.getElementById("container");

createGridButton.addEventListener("click", () => {
    const size = parseInt(gridSizeInput.value);
    if (size > 0 && size <= 100) {
        createGrid(size);
    } else {
        alert("Please enter a number between 1 and 100.");
    }
});


let isMouseDown = false;

document.body.addEventListener("mousedown", () => {
    isMouseDown = true;
});

document.body.addEventListener("mouseup", () => {
    isMouseDown = false;
});

function createGrid(size) {
    container.innerHTML = "";
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");

        square.addEventListener("click", () => {
            square.classList.add("clicked");
            square.classList.remove("hovered");
        });

        square.addEventListener("mouseover", () => {
            if (isMouseDown && !square.classList.contains("clicked")) {
                square.classList.add("clicked");
                square.classList.remove("hovered");
            } else if (!square.classList.contains("clicked")) {
                square.classList.add("hovered");
            }
        });

        square.addEventListener("mouseout", () => {
            if (!square.classList.contains("clicked")) {
                square.classList.remove("hovered");
            }
        });

        container.appendChild(square);
    }
}
