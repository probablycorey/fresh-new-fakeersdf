const express = require('express')

const app = express()
const port = process.env.PORT || 3001


app.get('/', (req, res) => {
  console.log("sending another lulz")
  res.send("HELLO HELLO")
})

app.listen(port, () => console.log(`Listening on port ${port}`))
