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

function generateRandomColor () {
    let code = "#";
    const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    
    for (let i = 0; i < 6; i++) {
        code += hexArray[Math.floor(Math.random() * 16)];
    }

    return code;
}

function addHoveringEffect (columns) {
    columns.forEach((column) => {
        let opacity = 0.1;
        let color = generateRandomColor();
        column.addEventListener("mouseenter", (event) => {
            column.setAttribute("style", `
               opacity:${opacity}; background-color: ${color} `);
            opacity = opacity == 1.0 ? opacity :opacity + 0.1;
        })
    })

}

btn.addEventListener('click', ()=> {

    if (gridSize != undefined) {
        removeGrid();
    }

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




    