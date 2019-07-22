import express from 'express'
//import users from './routes/user'
import nodes from './routes/node'

const app = express()
const port = 3000

app.use('/node', nodes)
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log('Example app listening on port ' + port.toString() + "!"))


