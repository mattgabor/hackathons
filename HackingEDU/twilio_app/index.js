var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Twilio');
});

app.post('/sms', function(req, res){
	var twilio = require('twilio');
	var resp = new twilio.TwimlResponse();

	resp.message('Gabor');

	res.send(resp.toString());
});



var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});