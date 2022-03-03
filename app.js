const accountSid = 'AC3644d62d15698ba8675c334f00877d9e', 
      authToken = '', 
      client = require('twilio')(accountSid, authToken); 
 
client.messages 
      .create({ 
         body: 'TwilioQuest rules',  
         from: '+18065152415',      
         to: '+5511987966688' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();