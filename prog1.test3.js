const arabicToRoman = require('./prog1')

describe('testiranje istinitosti', () => {

    it('DCCLIV za 754', () => {
        expect(arabicToRoman(754)).toBe("DCCLIV")
    }) 

    it('CCXXXIV za 234', () => {
        expect(arabicToRoman(234)).toBe("CCXXXIV")
    }) 

    it('DCXIII za 613', () => {
        expect(arabicToRoman(613)).toBe("DCXIII")
    }) 

    it('DCXIII za 51', () => {
        expect(arabicToRoman(51)).toBe("LI")
    }) 

}) 