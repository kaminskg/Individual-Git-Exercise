let nums = [18, 12, 72, 99, 4, 1]
let words = ["Bob", "Charlie", "Alpha", "Zulu", "Yankee", "Xray"]
let sort = (listOfItems) => {
    let counter = 0
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
}
sort(nums)
sort(words)
console.log(nums)
console.log(words)