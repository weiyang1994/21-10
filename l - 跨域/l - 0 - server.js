let express = require('express');
let app = express()
app.get('/say', function(req, res) {
  let { wd, callback } = req.query;
  console.log(wd, callback)
  res.send(`${callback}('good luck11')`)
})
app.listen(3000)