function countDown(n) {
    let result = ''
    if (n < 1) {
        result = 'Ваше число меньше 1'
    } else if (!Number.isInteger(n)) {
        result = 'Ваше число дробное'
    }
    else {
        for (let i = n; i >= 1; i--) {
            result += i
        }
    }
    return result
}

module.exports = countDown

console.log(countDown(12))