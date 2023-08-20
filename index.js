const express = require('express');
const routerAPI = require('./routes');

const app = express();
const port = 3000;

app.get('/', function (req, res) {
  res.send('Main');

});

routerAPI(app);

app.listen(port,()=>{
  console.log('Listen in the port: ' + port);
});
