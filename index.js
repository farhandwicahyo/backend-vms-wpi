const express = require ('express')
const app = express()
const port = 4000
const routes = require('./src/routes/index')

app.use('/api', routes)

app.listen(port, () => {
    console.log(`Connecting on http://localhost:${port}`);
}) 