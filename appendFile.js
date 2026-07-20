const fs = require("fs");

// Add new data without deleting old content
fs.appendFile(
    "sample.txt",
    "\nLearning File Handling is fun!",
    (err) => {

        if (err) {
            console.log(err);
            return;
        }

        console.log("Content appended successfully.");
    }
);