

const {sum} = require('../src/sum');


test('1 + 2 to equal 3',() => {
    expect(sum(1, 2)).toBe(3);
})