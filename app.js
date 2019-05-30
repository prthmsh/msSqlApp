var express = require('express');
var app = express();

const user = require('./controller/user')

app.get('/list', (req, res) => {
  user.getUser()
    .then(function(data) {
      console.log(data)
      res.send({code:200, data: data})
    })
    .catch((err) => {
      console.log(err)
    });
});

var server = app.listen(5000, () => {
  console.log('Server is running on 5000');
});
