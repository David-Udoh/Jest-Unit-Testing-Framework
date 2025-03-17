function myFunction (input) {
    // if type of input is not equal to number
    if (typeof input !== 'number') {
        throw new Error('Invalid Input')
    }
}

module.exports = myFunction;