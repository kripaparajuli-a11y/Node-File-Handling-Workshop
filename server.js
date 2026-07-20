// Import HTTP module
const http = require("http");

// Import File System module
const fs = require("fs");

// Port number
const PORT = 3000;

// Create HTTP server
const server = http.createServer((req, res) => {

    // Read HTML file
    fs.readFile("index.html", (err, data) => {

        if (err) {

            res.writeHead(500);

            res.end("Error loading page");

            return;
        }

        // Response type
        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        // Send HTML
        res.end(data);
    });

});

// Start server
server.listen(PORT, () => {

    console.log(`Server running at http://localhost:${PORT}`);

});