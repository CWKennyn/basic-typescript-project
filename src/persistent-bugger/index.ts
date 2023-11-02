export function persistence(num: number): number {
    const numToSplitStringArray = String(num).split('');
    let splitStringArrayToNumArray = numToSplitStringArray.map(Number);
    let count = 0;

    if (splitStringArrayToNumArray.length < 2) {
        return 0;
    }

    while (splitStringArrayToNumArray.length > 1) {
        let product = 1;
        for (const num of splitStringArrayToNumArray) {
            product *= num;
        }

        splitStringArrayToNumArray = Array.from(product.toString(), Number);
        count++;
    }

    return count;
}

