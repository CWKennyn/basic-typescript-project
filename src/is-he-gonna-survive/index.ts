export function hero(bullets: number, dragons: number): boolean {
    const calculateTwoBulletsPerDragonToOneBullet = bullets / 2;
    return calculateTwoBulletsPerDragonToOneBullet >= dragons;


}
