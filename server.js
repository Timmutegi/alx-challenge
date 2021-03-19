const
  express = require('express'),
  serveStatic = require('serve-static'),
  history = require('connect-history-api-fallback'),
  port = process.env.PORT || 5000

const app = express()

// app.use(history({
//   disableDotRule: true,
//   verbose: true
// }))
app.use(history())
app.use(serveStatic(__dirname + '/dist/spa'))

// app.get('/', function (req, res) {
//   res.render(path.join(__dirname + '/dist/spa/index.html'));
// })

app.listen(port)
