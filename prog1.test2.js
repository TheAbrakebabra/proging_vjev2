const arabicToRoman = require('./prog1')

describe('testiranje netocnosti', () => {

    it('1. netocan CCCC za 796', () => {
        expect(arabicToRoman(796)).toBe("CCCC")
    }) 

    it('2. netocan MCII za 1356', () => {
        expect(arabicToRoman(1356)).toBe("MCII")
    }) 

    it('3. netocan MMM za 3516', () => {
        expect(arabicToRoman(3516)).toBe("MMM")
    }) 

    it('4. netocan LII za 41', () => {
        expect(arabicToRoman(41)).toBe("LIII")
    }) 

    it('5. netocan X za 65', () => {
        expect(arabicToRoman(65)).toBe("X")
    }) 
}) 