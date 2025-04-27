function Something(hello, world) {
    return hello + world 
}

const result = Something('hello ', 'world')
console.log(result)

function calculate (firstNumber, secondNumber) {
    let i = firstNumber + secondNumber
    return i
} 




const x = [5, 12, 8, 21 ,3, 25]

function numbers (massiv) {
    for (let y = 0; y < massiv.length; y++) {
        if (massiv[y] > 10) {
            console.log(massiv[y])
        }
    }
}
console.log(numbers(x))

function calculator (a, b , sum) {
    if (sum == 'plus') {
        return a + b 
    } 
    else if (sum == 'minus') {
        return a - b
    }
    else if (sum == 'multiplication') {
        return a * b 
    }
    else if (sum == 'division') {
        return a / b
    }
    else {
        return 'Укажите цифры'
    }
}

let result2 = calculator(200, 5, 'multiplication')
console.log(result2)