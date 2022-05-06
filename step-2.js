function addToZero (array){
    let value = "false"
    let arrayLength = array.length
    for(let i = 0; i < arrayLength; i++){
        for(let j = 0; j < arrayLength; j++){
            if(i !== j && array[i] + array[j] === 0) {
                value = "true"
            }
        }
    } return value
}
console.log(addToZero([1, 2, 3, -2]))

function hasUniqueChars (string){
    let uniqueChars = new Set([])
    for(let i = 0; i < string.length; i++){
        uniqueChars.add(string[i])
    }
    if(uniqueChars.size == string.length){
        return true 
    } else return false
}

console.log(hasUniqueChars('mom'))

function isPangram (string){
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split('')
    let stringPan = string.toLowerCase()
    for(let i = 0; i < alphabet.length; i++){
            if (stringPan.indexOf(alphabet[i]) < 0) {
                return "not pangram"
            } else return "pangram"
        }
    }

console.log(isPangram('The quick brown fox jumps over the lazy dog!'))

function longestWord (string1, string2){
    let string1length = string1.length
    let string2length = string2.length
    for(let i = 0; i < string1length; i++){
        for(let j = 0; j < string2length; j++) {
            if (string1length > string2length){
                return string1length
            } else return string2length
        }
    }
}
console.log(longestWord("hi", "hello"))