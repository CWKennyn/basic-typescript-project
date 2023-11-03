export function deadAntCount (ants:string | null) : number {
    if (ants === "ant ant ant ant" || ants === null) {
        return 0;
    } else {
        const antArray = ants.split(' ');
        const deadAntsCount = antArray.filter((antElement) => antElement !== "ant");
        return deadAntsCount.length;
    }

}
