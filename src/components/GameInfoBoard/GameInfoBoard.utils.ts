const decimal = (num: number): string => {
    return num.toString().padStart(2, "0");
};

export const displayTime = (time: number | null): string => {
    time = Number(time)
    if (time < 0) {
        return `00:00`
    }
    const mn = Math.floor(time / 60);
    const sc = time % 60;
    return `${decimal(mn)}:${decimal(sc)}`;
};