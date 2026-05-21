const gridContainer = document.querySelector('.container');
const btn = document.querySelector('button');
const DEFAULT_GRID_SIZE = 16;

// step 1 to create n by n grid 

let gridSize;

function removeGrid () {
    
    const rows = document.querySelectorAll('.row');
    
    rows.forEach((row) => {
        row.remove();
    })
}

function addGrid (gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const row1 = document.createElement('div');
        row1.classList.add('row');
    
        for (let j = 0; j < gridSize; j++) {
            const column = document. createElement('div');
            column.classList.add('column');
            row1.appendChild(column);
        }
        
        gridContainer.appendChild(row1);
    }
}

function addHoveringEffect (columns) {
    columns.forEach((column) => {
        column.addEventListener("mouseenter", (event) => {
            column.classList.add('hover-effect');
        })
    })

}
btn.addEventListener('click', ()=> { 

    gridSize = prompt ("Enter size;");

    if (gridSize > 0 && gridSize <= 100){
        removeGrid();
        addGrid(gridSize);
    }else {
        alert('Enter number between 0 to 100 only')
    }

    // step 2: Add hoveing effect
    const columns = document.querySelectorAll('.column');

    addHoveringEffect(columns);
        
})




    