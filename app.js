const express = require("express");

const app = express();
const port = 3000;

// mock database
let db = [];

let streamCount = 0;

app.get("/", (req, res) => res.send("Hello, World!"));

app.post("/user/:userId/stream/:streamId", (req, res) => {
  const { userId, streamId } = req.params;

  // check if stream exists in database
  if (db.some((el) => el.streamId === streamId)) {
    console.log(`${streamId} already exists in database.`);

    res.statusCode = 200;
    res.send(`${streamId} already exists. Try another one! :D`);
  }
  // check if streams over 3
  else if (streamCount > 2) {
    console.log(`Maximum number of streams reached.`);

    res.statusCode = 403;
    res.send(
      `You've reached your maximum number of streams to watch at the same time. Oops!`
    );
  }
  // add stream to database
  else {
    db.push({ userId, streamId });
    streamCount++;
    console.log(`Added ${streamId} to database.`);

    res.statusCode = 201;
    res.send("Here is your stream. Enjoy!");
  }
});

app.listen(port, console.log(`Server listening on http://localhost:${port}`));