export const randomFromArray = (colors: string[]) => {
    const i = Math.floor(Math.random() * colors.length);
    return colors[i];
};

export const createBoard = (size: number, colors: string[]) => {
    const board = Array(size ** 2)
        .fill(null)
        .map((_, idx) => {
            const primaryColor = randomFromArray(colors)

            return {
                primaryColor,
                idx
            }
        });
    return board;
};