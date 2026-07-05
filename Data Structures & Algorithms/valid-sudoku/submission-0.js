class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const set = new Set();
        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board[i].length; j++){
                const cell = board[i][j];
                if(cell === '.'){
                    continue
                }
                const row = `row: ${i}, value: ${cell}`;
                const column = `column: ${j}, value: ${cell}`;
                const boxNumber = 3 * Math.floor(i / 3) + Math.floor(j / 3);
                const box = `boxNumber: ${boxNumber}, value: ${cell}`;
                console.log(row + " Row: " + set.has(row));
                console.log(column + " Column: " + set.has(column));
                console.log("BoxNumber: " + boxNumber + " Box: " + set.has(boxNumber));
                if(set.has(row) || set.has(column) || set.has(box)) return false;
                set.add(row).add(column).add(box);
            }
        }
        return true;
    }
}
