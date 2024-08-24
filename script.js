// get elements

const textInput = document.getElementById("text-input")
const checkBtn = document.getElementById("check-btn")
const result = document.getElementById("result")


// validation
const checkInputLength = (text) => {
    return text.length <= 0 
}

//second is content checker
const checkInputContent = (text) => {
    const regex = /^[a-zA-Z0-9]+$/
    let filteredInput = ""

    for(const character of text){
        if(character.match(regex)) filteredInput += character
    }

    return filteredInput.toLowerCase()
}

//third is the palindrome checker
const palindromeChecker = () => {
    if(checkInputLength(textInput.value)) {
        alert("Please input a value")
        return
    }

    const textValue = checkInputContent(textInput.value)

    let palindrome = true

    for(let index = 0; index < textValue.length; index++){
        let pointerRight = (textValue.length - 1) - index
        let pointerLeft = index
        
        if(textValue[pointerRight] != textValue[pointerLeft]){
            palindrome = false
        }
    }

    result.innerText = `${textInput.value} is ${palindrome ? "a palindrome" : "not a palindrome"} `
}


checkBtn.addEventListener("click", palindromeChecker)