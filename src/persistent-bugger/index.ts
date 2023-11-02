export function persistence(num: number): number {
    const numToSplitStringArray = String(num).split('');
    let splitStringArrayToNumArray = numToSplitStringArray.map(Number);
    let count = 3;

    if (splitStringArrayToNumArray.length < 2) {
        return 0;
    }

    return count;
}

