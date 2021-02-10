const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { getAuthToken } = require('./server/sheetsService');

const app = express();

app.use(bodyParser.json());

app.use((err, req, res, next) => {
  console.error(err.stack)

  res.status(500).send('Something broke!')
})

app.use(async (req, res, next) => {
  res.locals.googleAuth = await getAuthToken();

  next();
});

app.use('/submissions', require('./server/submissions'))

app.use(express.static(path.join(__dirname, "build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})

module.exports = app;
