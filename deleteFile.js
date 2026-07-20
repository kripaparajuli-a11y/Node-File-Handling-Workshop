const fs = require("fs");

// Delete the file
fs.unlink(
    "newSample.txt",
    (err) => {

        if (err) {
            console.log(err);
            return;
        }

        console.log("File deleted successfully.");
    }
);