const gridContainer = document.querySelector('.grid-container')
const btn = document.querySelector('.btn');

function getGrid(num){
    gridContainer.style.setProperty('--grid-rows', num)
    gridContainer.style.setProperty('--grid-cols', num)
    for (c = 0; c < (num * num); c++){
        let cell = document.createElement('div');
        gridContainer.appendChild(cell).className = 'gridSquare'; 
    };
};
getGrid(16);

let gridSquares = document.querySelectorAll('.gridSquare')

gridSquares.forEach((gridSquare) => {
    gridSquare.addEventListener('mouseover', () => {
        gridSquare.style.backgroundColor = 'black';
    })
})
