const basicSort = require('./basicSort')

test('properly sorts an array', () => {
    const numsUnsorted = [30, 10, 20, 60, 644, 40, 50, 80, 90, 70, 12]
    const numsSorted = [10, 12, 20, 30, 40, 50, 60, 70, 80, 90, 644]
    const wordsUnsorted = ["Juliet", "Romeo", "Delta"]
    const wordsSorted = ["Delta", "Juliet", "Romeo"]
    expect(basicSort(numsUnsorted)).toEqual(numsSorted)
    expect(basicSort(wordsUnsorted)).toEqual(wordsSorted)
})
