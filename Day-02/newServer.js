const express = require('express')
const app = express()
app.get('/', (req, res) => {
res.send('Hi!')
})
const server2 = app.listen(3000, () => console.log('Server ready'))
process.on('SIGTERM', () => {
server2.close(() => {
console.log('Process terminated')
})
})
process.kill(process.pid, 'SIGTERM')