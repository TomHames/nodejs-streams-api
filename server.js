const express = require("express");

const { streamController } = require("./controller/streamController");

const app = express();
const port = 3000;

app.post("/user/:userId/stream/:streamId", streamController);

app.listen(port, console.log(`Server listening on http://localhost:${port}`));