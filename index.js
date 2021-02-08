const express = require('express')
const app = express()
const port = 4000

// app.use(require('./server'));
app.use((err, req, res, next) => {
  console.error(err.stack)

  res.status(500).send('Something broke!')
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
