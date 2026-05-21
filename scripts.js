const gridContainer = document.querySelector('.container');
const btn = document.querySelector('button');


// step 1 to create n by n grid 

let gridSize;

function removeGridRows () {
    
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

    if (gridSize != undefined) {
        removeGridRows();
    }

    gridSize = prompt ("Enter size;");

    addGrid(gridSize);
    
    // step 2: Add hoveing effect

    const columns = document.querySelectorAll('.column');


    addHoveringEffect(columns);
        
})




    