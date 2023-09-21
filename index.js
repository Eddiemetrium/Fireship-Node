// console.log(process.env.USER)
// console.log("Node.js version => " + process.version);
// console.log("Current directory: " + process.cwd());

// const {EventEmitter} = require('events')
// const eventEmitter = new EventEmitter()
// eventEmitter.on('lunch', () => {
// console.log('yum ')
// });
// eventEmitter.emit('lunch')
// eventEmitter.emit('lunch');

// Sync === BLocking //
// const { readFile, readFileSync } = require("fs");

// const textTxt = readFileSync('./hello.txt', 'utf8')

// console.log('Text here now...');
// console.log(textTxt)
// console.log(textTxt);

// readFile("./hello.txt", "utf8", (err, textTxt) => {
//   console.log(textTxt);
// });
// console.log("Text here now...");

// const { readFile } = require("fs").promises;

// async function hello() {
//   try {
//     const file = await readFile("./hello.txt", "utf8");
//     console.log("File contents:");
//     console.log(file);
//   } catch (error) {
//     console.error("Error reading the file:", error.message);
//   }
// }

// Call the hello function to initiate file reading
// hello();

// const myModule = require('./my-module')
// console.log(myModule)

const { readFile } = require("fs");
const express = require("express");
const app = express();

app.get("/", (request, response) => {
  try {
    readFile("./home.html", "utf8", (err, html) => {
      if (err) {
        response.status(500).send("Sorry, something went wrong.");
      } else {
        response.send(html); // Send the HTML content as the response
      }
    });
  } catch (error) {
    console.error("Error reading the file:", error.message);
  }
});

app.listen(process.env.PORT || 3000, () =>
  console.log(`App available on http://localhost:3000`)
);
