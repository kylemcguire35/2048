/*************
MAIN ELEMENTS
*************/
const body = document.querySelector('body');
const board = document.querySelector('.grid');
let tiles = board.childNodes;
//------------------------------------------------------------------
/*************
GAME SETUP
*************/
const newGameBtn = document.querySelector('.new-game-btn');
newGameBtn.addEventListener('click', newGame);

function newGame() {
    clearBoard();
    generateSquare();
    generateSquare();
}

function clearBoard() {
    for (let i = 0; i < 16; i++) {
        tiles[i].innerHTML = 0;
    }
}

function generateSquare() {
    for (let i = 0; i < 100; i++) {
        let randomTile = Math.floor(Math.random() * 16);
        if (tiles[randomTile].innerHTML == 0) {
            let rate = Math.random();
            rate < 0.9 ? tiles[randomTile].innerHTML = 2 : tiles[randomTile].innerHTML = 4;
            style();
            popUpAnimation(tiles[randomTile]);
            break;
        }
    }
}

function generateBoard() {
    for (let i = 0; i < 16; i++) {
        let div = document.createElement('div');
        div.innerHTML = 0;
        board.appendChild(div);
    }
    generateSquare();
    generateSquare();
}

//Call to generate board on start-up
generateBoard();

function style() {
    for (let i = 0; i < 16; i++) {
        let tile = tiles[i].innerHTML;

        if (tile == 0) {
            tiles[i].style.color = 'rgb(205, 192, 180)';
        } else if (tile == 2 || tile == 4) {
            tiles[i].style.color = 'rgb(119, 110, 101)';
        } else {
            tiles[i].style.color = 'rgb(249, 246, 242)';
        }

        if (tile == 0) {
            tiles[i].style.backgroundColor = 'rgb(205, 192, 180)';
        } else if (tile == 2) {
            tiles[i].style.backgroundColor = 'rgb(238, 228, 218)';
        } else if (tile == 4) {
            tiles[i].style.backgroundColor = 'rgb(237, 224, 200)';
        } else if (tile == 8) {
            tiles[i].style.backgroundColor = 'rgb(242, 177, 121)';
        } else if (tile == 16) {
            tiles[i].style.backgroundColor = 'rgb(245, 149, 99)';
        } else if (tile == 32) {
            tiles[i].style.backgroundColor = 'rgb(246, 124, 95)';
        } else if (tile == 64) {
            tiles[i].style.backgroundColor = 'rgb(247, 94, 59)';
        } else if (tile == 128) {
            tiles[i].style.backgroundColor = 'rgb(237, 207, 114)';
        } else if (tile == 256) {
            tiles[i].style.backgroundColor = 'rgb(237, 204, 97)';
        } else if (tile == 512) {
            tiles[i].style.backgroundColor = 'rgb(237, 200, 80)';
        } else if (tile == 1024) {
            tiles[i].style.backgroundColor = 'rgb(237, 197, 63)';
        } else if (tile == 2048) {
            tiles[i].style.backgroundColor = 'rgb(237, 193, 46';
        } else {
            tiles[i].style.backgroundColor = 'rgb(49, 40, 31)';
        }
    }
}
//--------------------------------------------------------------------
/*************
GAMEPLAY
*************/
let movement;
let pause;

body.addEventListener('keydown', move);

function gameLogic(array, direction) {
    for (let i = 0; i < 4; i++) {
        const row = array[i];
        pause = false;
        //Move 2nd Tile
        if (row[1].innerHTML != 0) {
            if (row[0].innerHTML == 0) {
                slide(row[0], row[1], 1, direction);
            } else if (row[0].innerHTML == row[1].innerHTML ) {
                merge(row[0], row[1], 1, direction);
                pause = true;
            }
        }
        //Move 3rd Tile
        if (row[2].innerHTML != 0) {
            if (row[1].innerHTML == 0) {
                if (row[0].innerHTML == 0) {
                    slide(row[0], row[2], 2, direction);
                } else if (row[0].innerHTML == row[2].innerHTML) {
                    if (pause == false) {
                        merge(row[0], row[2], 2, direction);
                        pause = true;
                    } else {
                        slide(row[1], row[2], 1, direction);
                        pause = false;
                    }
                } else {
                    slide(row[1], row[2], 1, direction);
                    pause = false;
                }
            } else if (row[1].innerHTML == row[2].innerHTML) {
                merge(row[1], row[2], 1, direction);
                pause = true;
            }
        }
        //Move 4th Tile
        if (row[3].innerHTML != 0) {
            if (row[2].innerHTML == 0) {
                if (row[1].innerHTML == 0) {
                    if (row[0].innerHTML == 0) {
                        slide(row[0], row[3], 3, direction);
                    } else if (row[0].innerHTML == row[3].innerHTML) {
                        if (pause == false) {
                            merge(row[0], row[3], 3, direction);
                        } else {
                            slide(row[1], row[3], 2, direction);
                        }
                    } else {
                        slide(row[1], row[3], 2, direction);
                    }
                } else if (row[1].innerHTML == row[3].innerHTML) {
                    if (pause == false) {
                        merge(row[1], row[3], 2, direction);
                    } else {
                        slide(row[2], row[3], 1, direction);
                    }
                } else {
                    slide(row[2], row[3], 1, direction);
                }
            } else if (row[2].innerHTML == row[3].innerHTML) {
                merge(row[2], row[3], 1, direction);
            }
        }
    }
}


//On Arrow Keydown
function move(event) {
    let keyCode = event.which || event.keyCode;
    event.preventDefault();
    movement = false;

    const rows = [[tiles[0], tiles[1], tiles[2], tiles[3]],
    [tiles[4], tiles[5], tiles[6], tiles[7]],
    [tiles[8], tiles[9], tiles[10], tiles[11]],
    [tiles[12], tiles[13], tiles[14], tiles[15]]];

    const cols = [[tiles[0], tiles[4], tiles[8], tiles[12]],
    [tiles[1], tiles[5], tiles[9], tiles[13]],
    [tiles[2], tiles[6], tiles[10], tiles[14]],
    [tiles[3], tiles[7], tiles[11], tiles[15]]];

    const revRows = [[tiles[3], tiles[2], tiles[1], tiles[0]],
    [tiles[7], tiles[6], tiles[5], tiles[4]],
    [tiles[11], tiles[10], tiles[9], tiles[8]],
    [tiles[15], tiles[14], tiles[13], tiles[12]]];

    const revCols = [[tiles[12], tiles[8], tiles[4], tiles[0]],
    [tiles[13], tiles[9], tiles[5], tiles[1]],
    [tiles[14], tiles[10], tiles[6], tiles[2]],
    [tiles[15], tiles[11], tiles[7], tiles[3]]];

    if (keyCode == 38 || keyCode == 87) {
        gameLogic(cols, 'up');

        tiles = [cols[0][0], cols[1][0], cols[2][0], cols[3][0],
                cols[0][1], cols[1][1], cols[2][1], cols[3][1],
                cols[0][2], cols[1][2], cols[2][2], cols[3][2],
                cols[0][3], cols[1][3], cols[2][3], cols[3][3]];
    }

    if (keyCode == 40 || keyCode == 83) {
        gameLogic(revCols, 'down');

        tiles = [revCols[0][3], revCols[1][3], revCols[2][3], revCols[3][3],
                revCols[0][2], revCols[1][2], revCols[2][2], revCols[3][2],
                revCols[0][1], revCols[1][1], revCols[2][1], revCols[3][1],
                revCols[0][0], revCols[1][0], revCols[2][0], revCols[3][0]];
    }

    if (keyCode == 37 || keyCode == 65) {
       gameLogic(rows, 'left');

        tiles = [...rows[0], ...rows[1], ...rows[2], ...rows[3]];
    }

    if (keyCode == 39 || keyCode == 68) {
        gameLogic(revRows, 'right');

        tiles = [revRows[0][3], revRows[0][2], revRows[0][1], revRows[0][0],
        revRows[1][3], revRows[1][2], revRows[1][1], revRows[1][0],
        revRows[2][3], revRows[2][2], revRows[2][1], revRows[2][0],
        revRows[3][3], revRows[3][2], revRows[3][1], revRows[3][0]];
    }

    if (movement == true) {
        setTimeout(function() {
            generateSquare();
        }, 150);
    }
}

function merge(tileOne, tileTwo, distance, direction) {
    tileOne.innerHTML = parseInt(tileOne.innerHTML) + parseInt(tileTwo.innerHTML);
    tileTwo.innerHTML = 0;
    movement = true;
    
    style();
    slideAnimation(tileOne, tileTwo, distance, direction);
    setTimeout(function() {
        mergeAnimation(tileOne);
    }, 150);
}

function slide(tileOne, tileTwo, distance, direction) {
    tileOne.innerHTML = tileTwo.innerHTML;
    tileTwo.innerHTML = 0;
    movement = true;

    style();
    slideAnimation(tileOne, tileTwo, distance, direction);
}
//-------------------------------------------------------------
/************
ANIMATIONS
************/
function popUpAnimation(tile) {
    tile.classList.add('pop-up-animation');
    setTimeout(function() {
        tile.classList.remove('pop-up-animation');
    }, 150);
}

function slideAnimation(tileOne, tileTwo, distance, direction) {
    if (distance == 1) {
        tileOne.classList.add(`slide-${direction}-1`);
        setTimeout(function() {
            tileOne.classList.remove(`slide-${direction}-1`);
        }, 150)
    } else if (distance == 2) {
        tileOne.classList.add(`slide-${direction}-2`);
        setTimeout(function() {
            tileOne.classList.remove(`slide-${direction}-2`);
        }, 150)
    } else {
        tileOne.classList.add(`slide-${direction}-3`);
        setTimeout(function() {
            tileOne.classList.remove(`slide-${direction}-3`);
        }, 150)
    }
}

function mergeAnimation(tile) {
    tile.classList.add('merge-animation');
    setTimeout(function() {
        tile.classList.remove('merge-animation');
    }, 150);
}