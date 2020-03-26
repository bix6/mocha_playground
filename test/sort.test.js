const sort = require('../index').sort;
const expect = require('chai').expect;

describe('Sort function', () => {
    it('should handle empty list', () => {
        expect(sort([])).to.deep.equal([]);
    });
    it('should handle single item list', () => {
        expect(sort([1])).to.deep.equal([1]);
    });
    it('should handle two item ordered list', () => {
        expect(sort([1, 2])).to.deep.equal([1, 2]);
    });
    it('should handle three item ordered list', () => {
        expect(sort([1, 2, 3])).to.deep.equal([1, 2, 3]);
    });
    it('should handle two item reversed list', () => {
        expect(sort([2, 1])).to.deep.equal([1, 2]);
    });
    it('should handle three item reversed list', () => {
        expect(sort([3, 2, 1])).to.deep.equal([1, 2, 3]);
    });
    it('should handle three item unordered list', () => {
        expect(sort([2, 3, 1])).to.deep.equal([1, 2, 3]);
    });
    it('should handle five item unordered list', () => {
        expect(sort([3,1,5,4,2])).to.deep.equal([1,2,3,4,5]);
    });
});