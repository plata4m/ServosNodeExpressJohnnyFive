"use strict";

var five = require("johnny-five"),
  board = new five.Board(),
  servos = null,
  servoPins = [9],
  // servoPins = [9], // if you have only one servo
  express = require('express'),
  cors = require('cors'),
  app = express(),
  port = 8000;

board.on("ready", function() {
  console.log("### Board ready!");
  // Initialize a Servo collection
  console.log("### initializing servo array: ", servoPins );
  servos = new five.Servos(servoPins);
  console.log("### centering servos in array");
  servos.center();
});

var corsOptions = {
  origin: 'http://192.168.0.102',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://192.168.0.102/servos/"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.get('/servos/:mode/:value?', cors(), function (req, res) {
  if(servos) {
    var status = "OK";
    var value = req.params.value; // optional, may be null
    switch(req.params.mode) {
      case "min": // 0 degrees
        servos.min();
        break;
      case "max":
        servos.max();
        break;
      case "stop": // use after sweep
        servos.stop();
        break;
      case "sweep":
        servos.sweep();
        break;
      case "to":
        //if(value !== null)
          console.log("Passou "+value);
          servos.to( value );

        break;
      default:
        status = "Unknown: " + req.params.mode;
        break;
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
