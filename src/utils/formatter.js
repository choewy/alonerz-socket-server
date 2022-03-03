export const dateFormat = (string) => {
    const date = string.slice(0, 10).split('-').join('.');
    const time = string.slice(11, 16);
    return `${date}. ${time}`;
};