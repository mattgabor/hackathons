// Twilio Credentials 
var accountSid = 'AC3447e71b6027e5246fbd27d9f33bad1a'; 
var authToken = '350c124a6669d5df1089da9754484fb4'; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 
 
client.messages.create({  
	from: "+15302044512",    
}, function(err, message) { 
	console.log(message.sid); 
});