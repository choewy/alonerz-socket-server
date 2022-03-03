const random = () => {
    const min = 0, max = 255;
    return Math.floor(Math.random() * (max - min));
};

export const randomColor = () => {
    const r = random(), g = random(), b = random();
    return `rgb(${r}, ${g}, ${b})`
};