import _ from "lodash";

const matrixArray = (board: number[][]) =>
    board[0].map((_, colIdx) => board.map(row => row[colIdx]));

export const createBoard = (size: number, numbers: number[]): number[][] => {
    return Array(size)
        .fill(null)
        .map(() =>
            Array(size)
                .fill(0)
                .map(() => _.sample(numbers)!)
        );
};

export const checkForMatchesHorizontal = (board: number[][]): number[][] => {
    const tiles = _.cloneDeep(board);
    const boardSize = tiles.length;

    const newBoard: number[][] = [];

    for (let i = 0; i < boardSize; i++) {
        const row = tiles[i];
        let queue: number[] = [row[0]];

        // TODO error

        for (let j = 1; j < boardSize + 1; j++) {
            if (row[j] === queue[0]) {
                queue.push(row[j]);
            } else {
                // todo the same code
                if (queue.length >= 3) {
                    for (let index = 1; index <= queue.length; index++) {
                        row[j - index] = 0;
                    }
                }

                queue = [row[j]];
            }
        }
        newBoard.push(row);
    }
    return newBoard;
};

export const hasEmptyTiles = (board: number[][]): boolean =>
    board.some(row => row.some(tile => tile === 0));

export const getValuesDown = (board: number[][]): number[][] => {
    const newBoard = _.cloneDeep(board);

    for (let i = 1; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (newBoard[i][j] === 0) {
                newBoard[i][j] = newBoard[i - 1][j];
                newBoard[i - 1][j] = 0;
            }
        }
    }
    return newBoard;
};

export const addNewRow = (board: number[][], numbers: number[]): number[][] => {
    const newBoard = _.cloneDeep(board);
    newBoard[0] = newBoard[0].map(num => (num === 0 ? _.sample(numbers)! : num));
    return newBoard;
};

export const checkForAllMatches = (board: number[][]) => {
    let newBoard = _.cloneDeep(board);
    newBoard = checkForMatchesHorizontal(newBoard);
    newBoard = matrixArray(checkForMatchesHorizontal(matrixArray(newBoard)));
    return newBoard;
};

// 

const toggleTiles = (
    board: number[][],
    tilePos: { x: number; y: number },
    nextTileIndex: -1 | 1
) => {
    const newBoard = _.cloneDeep(board);
    const { x, y } = tilePos;

    [newBoard[y][x], newBoard[y][x + nextTileIndex]] = [
        newBoard[y][x + nextTileIndex],
        newBoard[y][x]
    ];

    return newBoard;
};

const reverseCoords = (pos: { x: number; y: number }) => ({
    y: pos.x,
    x: pos.y
});
