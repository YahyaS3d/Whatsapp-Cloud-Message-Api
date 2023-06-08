# Whatsapp-Cloud-Message-Api
This api is used to message to whatsapp number using node.js

This module create based on meta whatsapp documentation
<br>
[DOCUMENTATION](https://developers.facebook.com/docs/whatsapp/cloud-api/get-started)

<h5>Requirements</h5>

[Express JS](https://expressjs.com/)

<br>
[Axios](https://www.npmjs.com/package/axios)
<h5>WhatsApp Message API Test</h5>
test case for the WhatsApp Message API endpoint. The test is implemented using the Mocha testing framework and the Supertest library for making HTTP requests.
<h4>Test Description</h4>
The test case sends a GET request to the root endpoint (/) of the WhatsApp Message API. It expects a 200 response with a success message in the response body. The test ensures that the API endpoint is functioning correctly and can send a WhatsApp message.

<h6>Enter Commad On Terminal For Install All Package</h6>
npm install - using these node libraries: 
    axios
    cookie-parser
    debug
    express
    http-errors
    jade
    morgan
    nodemon
for testing case:     
    supertest
    mocha
    assert

For Sent Whatsapp Message From Node.js Change Following Data In routers/index.js
``` 
var data = {
    messaging_product: "whatsapp",
    to: NUMBER_ICLUDE_COUNTRY_CODE, 
    type: "template",
    template: {
      name: "hello_world",
      language: {
        code: "en_US"
      }
    }
  }
  var version = API_VERSION //v16.0
  var accId = WHATSAPP_BUSINESS_ACCOUNT_ID
  var token = TOKEN
   ``` 
  
  <h6>npm start Enter This Command On Terminal For Start</h6>

  <h6>Testing tools using kommunicate</h6>

With Kommunicate, businesses can set up chat widgets on their websites or apps, enabling visitors or users to initiate conversations and receive immediate assistance. The platform provides features like conversation routing, canned responses, chat history, file sharing, and chatbot integration.
