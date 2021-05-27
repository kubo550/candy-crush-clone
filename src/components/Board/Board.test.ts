import { createBoard, matrixArray, hasEmptyTiles, getValuesDown, addNewRow, checkForAllMatches } from "./Board.utils";

describe("2dBoardOperations", () => {

    // ^ matrixArray 
    test("matrixSimpleArr", () => {
        const input = [
            [1, 2],
            [3, 4],
        ];

        const expected = [
            [1, 3],
            [2, 4],
        ];

        const result = matrixArray(input);
        expect(result).toEqual(expected);
    });

    test("matrixBigArray", () => {
        const input = [
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
            [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
            [30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
            [40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
            [50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
            [60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
            [70, 71, 72, 73, 74, 75, 76, 77, 78, 79],
            [80, 81, 82, 83, 84, 85, 86, 87, 88, 89],
            [90, 91, 92, 93, 94, 95, 96, 97, 98, 99],
        ];

        const expected = [
            [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
            [1, 11, 21, 31, 41, 51, 61, 71, 81, 91],
            [2, 12, 22, 32, 42, 52, 62, 72, 82, 92],
            [3, 13, 23, 33, 43, 53, 63, 73, 83, 93],
            [4, 14, 24, 34, 44, 54, 64, 74, 84, 94],
            [5, 15, 25, 35, 45, 55, 65, 75, 85, 95],
            [6, 16, 26, 36, 46, 56, 66, 76, 86, 96],
            [7, 17, 27, 37, 47, 57, 67, 77, 87, 97],
            [8, 18, 28, 38, 48, 58, 68, 78, 88, 98],
            [9, 19, 29, 39, 49, 59, 69, 79, 89, 99],
        ];

        const result = matrixArray(input);
        expect(result).toEqual(expected);
    });

    // ^ createBoard 

    test('create randomize Board', () => {
        const avaiableValues = [1, 2, 3, 4, 5, 6]
        const boardSize = 6

        const res1 = createBoard(boardSize, avaiableValues)
        const res2 = createBoard(boardSize, avaiableValues)
        expect(res1).not.toEqual(res2)

    });

    // ^ hasEmptyTiles

    test('hasEmptyTiles without zeroes', () => {
        const board = [
            [4, 1, 2, 1],
            [1, 2, 1, 4],
            [3, 1, 2, 1],
            [2, 1, 3, 4],
        ];
        const result = hasEmptyTiles(board);
        expect(result).toBe(false);
    });

    test('hasEmptyTiles with zeroes', () => {
        const board = [
            [4, 0, 0, 0, 1, 1],
            [1, 2, 1, 0, 5, 4],
            [3, 1, 2, 0, 1, 1],
            [2, 1, 3, 5, 4, 4],
            [2, 1, 3, 1, 1, 4],
            [2, 1, 3, 2, 3, 4],
        ];
        const result = hasEmptyTiles(board);
        expect(result).toBe(true);
    })

    // ^ getValuesDown

    test('values 3 times', () => {
        let board = [
            [1, 2, 3, 4],
            [1, 2, 3, 4],
            [1, 2, 3, 4],
            [0, 0, 0, 0],
        ];
        const expected = [
            [0, 0, 0, 0],
            [1, 2, 3, 4],
            [1, 2, 3, 4],
            [1, 2, 3, 4],
        ]
        board = getValuesDown(board);
        board = getValuesDown(board);
        board = getValuesDown(board);

        expect(board).toEqual(expected)

    })


    test('values get down', () => {
        const board = [
            [4, 1, 2, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];
        const expected = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [4, 1, 2, 1],
        ]
        const result = getValuesDown(board);
        expect(result).toEqual(expected);
    })

    test('get values down harder arr', () => {
        const board = [
            [1, 2, 3, 4, 5, 6],
            [0, 0, 0, 0, 0, 0],
            [1, 2, 3, 4, 5, 6],
            [0, 0, 0, 0, 0, 0],
            [1, 2, 3, 4, 5, 6],
            [0, 0, 0, 0, 0, 0],
        ];
        const expected = [
            [0, 0, 0, 0, 0, 0],
            [1, 2, 3, 4, 5, 6],
            [0, 0, 0, 0, 0, 0],
            [1, 2, 3, 4, 5, 6],
            [0, 0, 0, 0, 0, 0],
            [1, 2, 3, 4, 5, 6],
        ]
        const result = getValuesDown(board);
        console.table(result);

        expect(result).toEqual(expected);
    })

    // ^ addNewRow

    test('addNewRow', () => {
        const avaiableValues = [1]
        let board = [
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1],
        ]
        const expected = [
            [1, 1, 1, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1],
        ]

        board = addNewRow(board, avaiableValues);
        expect(board).toEqual(expected);
    })

    test('adding new values ', () => {
        const avaiableValues = [1, 2, 3, 4]
        let board = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ]
        const notExpected = [
            [0, 0, 0, 0],
        ]

        board = addNewRow(board, avaiableValues);
        expect(board[0]).not.toEqual(notExpected);

    })

    // ^ checkForAllMatches

    test('check For All Horizontal Matches ', () => {
        let board = [
            [1, 1, 1],
            [2, 3, 1],
            [2, 2, 2],
        ]

        const expected = [
            [0, 0, 0],
            [2, 3, 1],
            [0, 0, 0],
        ]

        board = checkForAllMatches(board)

        expect(board).toEqual(expected);

    })

    test('check For All Vertical Matches ', () => {
        let board = [
            [1, 1, 4],
            [1, 3, 4],
            [1, 4, 4],
        ]

        const expected = [
            [0, 1, 0],
            [0, 3, 0],
            [0, 4, 0],
        ]

        board = checkForAllMatches(board)

        expect(board).toEqual(expected);

    })

    test('check For All Matches ', () => {
        let board = [
            [1, 1, 1, 3, 5],
            [2, 4, 3, 3, 5],
            [2, 3, 6, 6, 5],
            [2, 2, 1, 3, 5],
            [2, 3, 3, 3, 5],
        ];
        const expected = [
            [0, 0, 0, 3, 0],
            [0, 4, 3, 3, 0],
            [0, 3, 6, 6, 0],
            [0, 2, 1, 3, 0],
            [0, 0, 0, 0, 0],
        ];

        board = checkForAllMatches(board);

        expect(board).toEqual(expected)
    })


})



