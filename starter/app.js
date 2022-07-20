const express = require('express')
const app = express()
const port = 3000

//routes

app.get('/hello', (req, res) => res.send('Task Manager App'))

app.use('/api/v1/tasks', require('./controllers/tasks'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))