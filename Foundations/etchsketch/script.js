const gridSizeInput = document.getElementById("gridSize");
const createGridButton = document.getElementById("createGrid");
const container = document.getElementById("container");

let isMouseDown = false;
let isTouching = false;

createGridButton.addEventListener("click", () => {
    const size = parseInt(gridSizeInput.value);
    if (size > 0 && size <= 100) {
        createGrid(size);
    } else {
        alert("Please enter a number between 1 and 100.");
    }
});

// Track mouse state
document.body.addEventListener("mousedown", () => {
    isMouseDown = true;
});
document.body.addEventListener("mouseup", () => {
    isMouseDown = false;
});

// Track touch state
container.addEventListener("touchstart", (e) => {
    isTouching = true;
    handleTouch(e);
}, { passive: false });

container.addEventListener("touchmove", (e) => {
    if (isTouching) {
        handleTouch(e);
    }
}, { passive: false });

container.addEventListener("touchend", () => {
    isTouching = false;
});

// Delegate mouse interactions
container.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("square")) {
        if (isMouseDown) {
            markClicked(e.target);
        } else {
            markHovered(e.target);
        }
    }
});

container.addEventListener("mouseout", (e) => {
    if (e.target.classList.contains("square") && !e.target.classList.contains("clicked")) {
        e.target.classList.remove("hovered");
    }
});

container.addEventListener("click", (e) => {
    if (e.target.classList.contains("square")) {
        markClicked(e.target);
    }
});

// Handle touch-based interactions
function handleTouch(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const element = document.elementFromPoint(touch.clientX, touch.clientY);
    if (element && element.classList.contains("square")) {
        markClicked(element);
    }
}

// Grid generation
function createGrid(size) {
    container.innerHTML = "";
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    }
}

// Helpers
function markClicked(el) {
    el.classList.add("clicked");
    el.classList.remove("hovered");
}

function markHovered(el) {
    if (!el.classList.contains("clicked")) {
        el.classList.add("hovered");
    }
}
