import { deadAntCount } from "./index";
describe("solution", function() {
    it("examples", function() {
        expect(deadAntCount("ant ant ant ant")).toBe(0);
        expect(deadAntCount(null)).toBe(0);
        expect(deadAntCount("ant anantt aantnt")).toBe(2);
        expect(deadAntCount("ant ant .... a nt")).toBe(1);
    });
});

