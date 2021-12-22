const arabicToRoman = require('./prog1')

describe('testiranje istinitosti', () => {

    it('I za 1', () => {
        expect(arabicToRoman(1)).toBe("I")
    }) 

    it('II za 2', () => {
        expect(arabicToRoman(2)).toBe("II")
    }) 

    it('III za 3', () => {
        expect(arabicToRoman(3)).toBe("III")
    }) 

    it('IV za 4', () => {
        expect(arabicToRoman(4)).toBe("IV")
    }) 

    it('V za 5', () => {
        expect(arabicToRoman(5)).toBe("V")
    }) 

    it('VI za 6', () => {
        expect(arabicToRoman(6)).toBe("VI")
    }) 

    it('VII za 7', () => {
        expect(arabicToRoman(7)).toBe("VII")
    }) 

    it('IX za 9', () => {
        expect(arabicToRoman(9)).toBe("IX")
    }) 

    it('X za 10', () => {
        expect(arabicToRoman(10)).toBe("X")
    }) 

}) 