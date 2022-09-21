const express = require("express");
const MoodTracker = require("./src/controller/moodTracker");

const port = 19006;

const app = express();

app.use("/moodTracker", MoodTracker);

app.listen(port, () => console.log(`Server is now listening on port ${port}`));
