class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board){
        const rows = new Map();
        const cols = new Map();
        const boxes = new Map();

        for(let row = 0; row < 9; row++){
            for(let column = 0; column < 9; column++){
                if(board[row][column] === '.') continue;

                const boxNumber = `${Math.floor(row/3)},${Math.floor(column / 3)}`;
                if((rows.get(row) && rows.get(row).has(board[row][column])) ||
                    (cols.get(column) && cols.get(column).has(board[row][column])) ||
                    (boxes.get(boxNumber) && boxes.get(boxNumber).has(board[row][column]))){
                        return false;
                    }
                
                if(!rows.has(row)) rows.set(row, new Set());
                if(!cols.has(column)) cols.set(column, new Set());
                if(!boxes.has(boxNumber)) boxes.set(boxNumber, new Set());

                rows.get(row).add(board[row][column]);
                cols.get(column).add(board[row][column]);
                boxes.get(boxNumber).add(board[row][column]);
            }
        }
        return true;
    }
}
