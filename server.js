const express = require("express");
// server
const port = 8000;
const app = express();
app.use(express.text());

var ChatSession = ["Hey"];

// get request
app.get('/', async (request, response) => {
    
    // Set CORS headers
    response.set('Access-Control-Allow-Origin', '*');
    console.log(`Got GET request from ${request.ip}`);
    response.status = 200;
    response.send(JSON.stringify(ChatSession));
  });

// post request
app.post('/', async (request, response) => {
    // Set CORS headers
    response.set('Access-Control-Allow-Origin', '*');
    
    console.log(`Got POST request from ${request.ip}`);
    try {
        var Data = JSON.parse(request.body);
        FilterMessage(Data.Message)[0] == true ? ChatSession.push(FilterMessage(Data.Message)[1]) : console.log("Got an invalid message");
        response.send("Received data!");
    }
    catch {
        response.send("Did not recieve data!");
    }
    //append data to database
    response.status = 200;
    
});
app.listen(port, () => {console.log(`Server Running on ${port}!`)});

// chat app functionality 
function FilterMessage(Message) {
    var UnfilteredMessage = Message;
    var FilteredMessage = UnfilteredMessage;
    var ShouldSent = true;
    
    if (Message == "") {
        ShouldSent = false;
    } 

    return [ShouldSent, FilteredMessage];
}