function reset() {
    console.log('reset');
    const squareDivArray = Array.from(document.querySelectorAll('.square-div'));
    squareDivArray.forEach(squareDiv => {
        squareDiv.classList.remove('moused-over');
    });
    // container.classList.add('container-shake');
}

function setup(gridSideSize) {
    for (let i = 0; i < gridSideSize * gridSideSize; i++) {
        let squareDiv = document.createElement('div');
        squareDiv.classList.add('square-div');
        container.appendChild(squareDiv);
    }

    container.style.gridTemplateColumns = `repeat(${gridSideSize}, ${320/gridSideSize}px [col-start])`;
    container.style.gridTemplateRows = `repeat(${gridSideSize}, ${320/gridSideSize}px [row-start])`;

    const squareDivArray = Array.from(document.querySelectorAll('.square-div'));
    console.log(squareDivArray.length)
    squareDivArray.forEach(squareDiv => {
        squareDiv.addEventListener('mouseover', function() {
            squareDiv.classList.add('moused-over');
        })
    });
}

const container = document.querySelector('.container');
container

setup(16);

const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', function() { reset() });

const setGridButton = document.querySelector('.set-grid');
setGridButton.addEventListener('click', function() {
    let gridSideSize = document.querySelector('input[type=text]');

    if (gridSideSize.value > 100) {
        gridSideSize.style.border = '2px solid red';
    } else {
        reset();
        setup(gridSideSize.value);
        gridSideSize = "";
    }
});