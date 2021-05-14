const { test, expect } = require('@jest/globals')
const sort = require('./basicSort.js')

test('properly sorts an array', () => {
    const array = ['B', 'C', 'A']
    const array2 = ['A', 'B', 'C']
    expect(sort(array).toBe(array2))
})