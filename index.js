const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res)=>{
    res.send("<h1>Working Fine !:)</h1>")
})

app.listen(PORT, ()=>{
    console.log(`Listening on http://localhost:${PORT}`)
})