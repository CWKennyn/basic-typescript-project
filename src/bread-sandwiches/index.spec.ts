import { slicesToName, nameToSlices } from "./index";
describe("slicesToName", function() {
    it("should return the name of the sandwich", function() {
        expect(slicesToName(false)).toEqual(null);
        expect(slicesToName(1)).toEqual(null);
        expect(slicesToName(-2)).toEqual(null);
        expect(slicesToName('bread')).toEqual(null);
        expect(slicesToName(2)).toEqual('sandwich');
        expect(slicesToName(3)).toEqual('bread sandwich');
        expect(slicesToName(11)).toEqual('bread sandwich sandwich sandwich sandwich sandwich');
        expect(slicesToName(8)).toEqual('sandwich sandwich sandwich sandwich');
    });
});
// describe("nameToSlices", function() {
//     it("should return the number of slices", function() {
//         expect(nameToSlices(12)).toEqual(null);
//         expect(nameToSlices('')).toEqual(null);
//         expect(nameToSlices('sandwich sandwich bread sandwich')).toEqual(null);
//         expect(nameToSlices('sand wich')).toEqual(null);
//         expect(nameToSlices('bread sandwich')).toEqual(3);
//         expect(nameToSlices('sandwich sandwich sandwich sandwich')).toEqual(8);
//         expect(nameToSlices('bread')).toEqual(null);
//         expect(nameToSlices('bread sandwich sandwich sandwich')).toEqual(7);
//         expect(nameToSlices('bread sandwich bread sandwich')).toEqual(null);
//     });
// });
