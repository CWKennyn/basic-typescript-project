export function cookingTime(eggs: number): number | string {
    if (eggs === 0) {
        return eggs;
    } else if (eggs <= 8) {
        return 5;
    } else if (eggs <= 16) {
        return 10;
    }
    return eggs;
}
