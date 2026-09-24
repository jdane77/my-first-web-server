// Load the built-in HTTP module from Node.js
const http = require('http');

// Define the port where the server will listen for requests
// Cloud platforms like Render automatically tell your app what port to use via 'process.env.PORT'
const PORT = process.env.PORT || 3000;

// Create the server
const server = http.createServer((req, res) => {
    // Set the HTTP header to status 200 (Success) and tell the browser it is receiving plain text
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    // Send a message back to anyone who visits the web address
    res.end('Hello! Your Node.js server is successfully running in the cloud.');
});

// Start the server so it listens for incoming web traffic
server.listen(PORT, () => {
    console.log(`Server is running and listening on port ${PORT}`);
});
