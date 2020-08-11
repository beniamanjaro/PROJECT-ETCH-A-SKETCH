const gridContainer = document.querySelector('.grid-container')
const btn = document.querySelector('.btn');
let gridSquares = document.querySelectorAll('.gridSquare')

function getGrid(num) {
    gridContainer.style.setProperty('--grid-rows', num)
    gridContainer.style.setProperty('--grid-cols', num)
    for (c = 0; c < (num * num); c++){
        let cell = document.createElement('div');
        gridContainer.appendChild(cell).className = 'gridSquare'; 
    };
};

function clearGrid() {
    $(".gridSquare").remove();
}

function refreshGrid() {
    let x = prompt("Enter the grid size:")
    x = Number(x);
    if(x < 1 || isNaN(x) || x > 60){
        alert("stop being a sheboon and choose a positive number lower than 60")
        clearGrid();
        getGrid(16);
    } else{
        clearGrid();
        getGrid(x);
    }
}


$(document).ready(function() {
    getGrid(16);

    $(".gridSquare").mouseover(function() {
        $(this).css("background-color", "black");
        });

    $(".btn").click(function() {
        refreshGrid();

        $(".gridSquare").mouseover(function() {
        $(this).css("background-color", "black");
        });
    });
});
