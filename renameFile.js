const fs = require("fs");

// Rename the file
fs.rename(
    "sample.txt",
    "newSample.txt",
    (err) => {

        if (err) {
            console.log(err);
            return;
        }

        console.log("File renamed successfully.");
    }
);