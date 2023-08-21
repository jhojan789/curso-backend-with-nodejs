const express = require('express');
const routerAPI = require('./routes');

const app = express();
const port = 3000;

//this line allows to send body json in the post method
app.use(express.json());

app.get('/', function (req, res) {
  res.send('Main');

});

routerAPI(app);

app.listen(port,()=>{
  console.log('Listen in the port: ' + port);
});
