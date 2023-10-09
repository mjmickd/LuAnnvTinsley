// Constants 
const COLORS = {
    '0': 'white',
    '1': 'LuAnn',
    '-1': 'Tinsley'
};

// state variables 
let board; // array of 3 column arrays
let turn; // 1 or -1
let winner; // null = no winner, 1 or -1 winner; 'T' = tie game

// cached elements 
const messageEl = document.querySelector('h1');
const playAgainBtn = document.querySelector('button');
const markerEls = [... document.querySelectorAll('#markers > div')];
// event listeners 
document.getElementById('markers').addEventListener('click', handleDrop);
playAgainBtn.addEventListener('click', init);

/*-------- functions ------*/
init();
//initialize all state, then call render()
function init() {
    // to visualize the board's mapping to the DOM, 
    // rotate the board array 90 degrees counter clockwise
    board = [ 
    [0, 0, 0], //this is column 0 
    [0, 0, 0], // this is column 1
    [0, 0, 0] // this is column 2 
];
turn = 1;
winner = null;

render(); 
}

function handleDrop(evt) {
    const colIdx = 
    markerEls.indexOf(evt.target);
    if (colIdx === -1 || winner) return;
    const colArr = board [colIdx]
    const rowIdx = colArr.indexOf(0);
    colArr[rowIdx] = turn;
    turn *= -1;
    winner = getWinner(colIdx, rowIdx);
    render(); 
}

function getWinner(colIdx, rowIdx) {
    return checkVerticalWin(colIdx, rowIdx) ||
    checkHorizontalWin(colIdx, rowIdx) ||
    checkDiagonalWinNESW(colIdx, rowIdx); 
}

function checkDiagonalWinNESW(colIdx, rowIdx){
    
}

function checkHorizontalWin(colIdx, rowIdx) {

}
