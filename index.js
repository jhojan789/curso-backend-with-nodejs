const express = require('express');
const routerAPI = require('./routes');
const {logErrors,errorHandler }  = require( './mildwares/error.handler');

const app = express();
const port = 3000;

//this line allows to send body json in the post method
app.use(express.json());

app.get('/', function (req, res) {
  res.send('Main');

});

routerAPI(app);
app.use(logErrors);
app.use(errorHandler);

app.listen(port,()=>{
  console.log('Listen in the port: ' + port);
});
