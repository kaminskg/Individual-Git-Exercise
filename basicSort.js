module.exports = (listOfItems) => {
    let arraySize = listOfItems.length
    for (let i = 0; i < arraySize ; i++) {
        let smallestNumber = listOfItems[i]
        let index = i
        for (let j = i + 1; j < arraySize; j++) {
            if (smallestNumber > listOfItems[j]) {
                smallestNumber = listOfItems[j]
                index = j
            }
        }
        let temp = listOfItems[i]
        listOfItems[i] = smallestNumber
        listOfItems[index] = temp
    }
    sortedArray = listOfItems
    return sortedArray
}