const express = require('express');
const routerAPI = require('./routes');
const {logErrors,errorHandler,boomErrorHandler }  = require( './mildwares/error.handler');
const cors = require('cors');

const app = express();
// const app2 = express();
const port = 3000;
// const port2 = 8080;

// app2.get('/', (req, res) => {
//   res.sendFile(__dirname + '/frontend.html');
// });


//this line allows to send body json in the post method
app.use(express.json());
const whiteList = ['http://localhost:8080','http://mydomain.com'];
const options = {
  origin: (origin,callback)=>{
    if(whiteList.includes(origin)){
      callback(null,true);
    }else{
      callback(new Error('Origin not allowed'));
    }
  }
}

app.use(cors(options));

app.get('/', function (req, res) {
  res.send('Main');

});

routerAPI(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port,()=>{
  console.log('Listen in the port: ' + port);
});

// app2.listen(port2, () => {
//   console.log(`Server is running at http://localhost:${port2}`);
// });
