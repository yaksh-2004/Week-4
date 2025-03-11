
const fs= require('fs');
const content = 'Hiii'
fs.appendFile('test.txt', content, (err) => {
if (err) {
console.error(err)
return
}
//done!
})