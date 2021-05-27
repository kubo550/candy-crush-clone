import _ from "lodash";
import { NextIndexes, TilePos } from "./Board.types";

export const matrixArray = (board: number[][]): number[][] =>
    board[0].map((_, colIdx) => board.map(row => row[colIdx]));

export const createBoard = (size: number, numbers: number[]): number[][] => {
    const make2dArray = (size: number) => Array(size)
        .fill(null)
        .map(() =>
            Array(size)
                .fill(0)
                .map(() => _.sample(numbers)!)
        );
    let board = make2dArray(size)
    while (!_.isEqual(board, checkForAllMatches(board))) {
        board = make2dArray(size)
    }
    return board
};

const checkForMatchesHorizontal = (board: number[][], subsTilesToGo?: (id: number, quan: number) => void): number[][] => {
    const tiles = _.cloneDeep(board);
    const boardSize = tiles.length;

    const newBoard: number[][] = [];

    for (let i = 0; i < boardSize; i++) {
        const row = tiles[i];
        let queue: number[] = [row[0]];


        for (let j = 1; j < boardSize + 1; j++) {
            if (row[j] === queue[0]) {
                queue.push(row[j]);
            } else {
                if (queue.length >= 3) {
                    for (let index = 1; index <= queue.length; index++) {
                        row[j - index] = 0;

                    }
                    subsTilesToGo && subsTilesToGo(queue[0], queue.length)
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

export const checkForAllMatches = (board: number[][], subsTilesToGo?: (id: number, quan: number) => void): number[][] => {
    let newBoard = _.cloneDeep(board);
    newBoard = checkForMatchesHorizontal(newBoard, subsTilesToGo);
    newBoard = matrixArray(checkForMatchesHorizontal(matrixArray(newBoard), subsTilesToGo));
    return newBoard;
};

// 

const toggleArray = (
    board: number[][],
    tilePos: TilePos,
    nextTileIndex: -1 | 0 | 1
): number[][] => {
    const newBoard = _.cloneDeep(board);
    const { x, y } = tilePos;

    [newBoard[y][x], newBoard[y][x + nextTileIndex]] = [
        newBoard[y][x + nextTileIndex],
        newBoard[y][x]
    ];

    return newBoard;
};

const reverseCoords = (pos: TilePos): TilePos => ({
    y: pos.x,
    x: pos.y
});


const toggle = {
    hotizontal: (
        board: number[][],
        tilePos: TilePos,
        nextTileIndex: 1 | 0 | -1
    ) => toggleArray(board, tilePos, nextTileIndex),
    vertical: (
        board: number[][],
        tilePos: TilePos,
        nextTileIndex: 1 | 0 | -1
    ) =>
        matrixArray(
            toggleArray(matrixArray(board), reverseCoords(tilePos), nextTileIndex)
        )
};

export const swipeTiles = (
    board: number[][],
    pos: TilePos,
    dir: NextIndexes
): number[][] => {

    const isHorizontal = dir.x !== 0

    const nextTileIndex = isHorizontal ? dir.x : dir.y

    return toggle[isHorizontal ? "hotizontal" : "vertical"](
        board,
        pos,
        nextTileIndex
    );
}

// 

export const calculateDirection = (
    offsetX: number,
    offsetY: number
): NextIndexes | null => {
    const isHorizontal = Math.abs(offsetX) > Math.abs(offsetY);
    const OFFSET_TO_MAKE_MOVE = 20
    if (Math.abs(offsetX) < OFFSET_TO_MAKE_MOVE && Math.abs(offsetY) < OFFSET_TO_MAKE_MOVE) {
        return null
    }

    const x = offsetX > 0 ? 1 : -1;
    const y = offsetY > 0 ? 1 : -1;

    return {
        x: 0 + (isHorizontal ? x : 0),
        y: 0 + (!isHorizontal ? y : 0),
    } as NextIndexes
};

export const calculateNewPosition = (
    tilePos: TilePos,
    direction: TilePos
): TilePos => {
    const x = tilePos.x + direction.x;
    const y = tilePos.y + direction.y;

    return { x, y };
};

export const isValidMove = (newPos: TilePos, boardSize: number): boolean => {
    const coords = Object.values(newPos);
    return coords.every(coord => coord >= 0 && coord <= boardSize - 1);
};