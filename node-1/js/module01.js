function hi() {
    console.log("hi module01.js")
}
/* module.exports = hi();
module.exports.a = 'abc'; */
module.exports = {
    hi: hi,
    abc: 'abc'
}