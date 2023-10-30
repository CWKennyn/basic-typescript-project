import { cookingTime } from "./index";
describe("Egg tests", function() {
    it("0 eggs", function() {
        expect(cookingTime(0)).toEqual(0);
    });

    it("5 eggs", function() {
        expect(cookingTime(5)).toEqual(5);
    });

    it("10 eggs", function() {
        expect(cookingTime(10)).toEqual(10);
    });
});
