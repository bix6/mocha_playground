const divide = require('../index').divide;
const expect = require('chai').expect;

describe('Divide function', () => {
    it('should divide positive integers correctly', () => {
        expect(divide(8,4)).to.equal(2);
    });
    it('should throw an error when divide by 0', () => {
        expect(() => { divide(8,0) }).to.throw();
    });
});