const fs = require('fs')
const content = 'New Data..'
try {
const data = fs.writeFileSync('test.txt', content)
//file written successfully
const dataNew = fs.readFileSync('test.txt', 'utf8')
console.log(dataNew);

} catch (err) {
console.error(err)
}