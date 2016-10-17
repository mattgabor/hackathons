const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Twilio');
});

app.post('/sms', (req, res) => {
	const twilio = require('twilio');
	const resp = new twilio.TwimlResponse();

	resp.message('Gabor');

	res.send(resp.toString());
});



const server = app.listen(3000, () => {

  const host = server.address().address;
  const port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
