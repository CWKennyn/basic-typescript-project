export const likes = (a : string[]) : string => {
    if (a.length === 0) {
        return 'no one likes this';
    }
    if (a.length === 1) {
        return `${a.toString()} likes this`
    }
    return a.toString();

}