require('dotenv').config();
const accountSid = process.env.USERT
const authToken = process.env.APIKEY
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({
            body: 'TwilioQuest rules',
            from: '+18065152415',
            to: '+5511987966688'
      })
      .then(message => console.log(message.sid))
      .done();