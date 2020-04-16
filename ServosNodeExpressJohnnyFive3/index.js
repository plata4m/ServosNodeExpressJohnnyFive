"use strict";

var five = require("johnny-five"),
  board = new five.Board(),
  servos = null,
  servoPins = [9],
  express = require('express'),
  cors = require('cors'),
  app = express(),
  port = 8000;

board.on("ready", function() {
  console.log("### Board ready!");
  console.log("### initializing servo array: ", servoPins );
  servos = new five.Servos(servoPins);
  servos.center();
});

var corsOptions = {
  origin: 'http://localhost',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
app.get('/servos/:mode/:value?', cors(), function (req, res) {
  if(servos) {
    var status = "OK";
    var value = req.params.value; 
    if(value !== null)
       console.log("Passou "+value);
       servos.to( value );
     }
     console.log(status);
     res.send(status);
   } else {
     res.send('Board NOT ready!')
   }
});

app.listen(port, function () {
 console.log('Listening on port ' + port);
});
