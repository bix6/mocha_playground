const expect = require('chai').expect;
const isEven = require('../isEven');

describe('isEven', () => {
    it('should find 4 is even', () => {
        expect(isEven(4)).to.be.true;
    });
    it('should find 5 is not even', () => {
        expect(isEven(5)).to.be.false;
    });
});