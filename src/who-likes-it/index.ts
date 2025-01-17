export const likes = (a : string[]) : string => {
    if (a.length === 0) {
        return 'no one likes this';
    } else if (a.length === 1) {
        return `${a[0]} likes this`;
    } else if (a.length === 2) {
        return `${a[0]} and ${a[1]} like this`;
    } else if (a.length === 3) {
        return `${a[0]}, ${a[1]} and ${a[2]} like this`;
    } else {
        const remainingCount = a.length - 2;
        return`${a[0]}, ${a[1]} and ${remainingCount} others like this`;
    }
}