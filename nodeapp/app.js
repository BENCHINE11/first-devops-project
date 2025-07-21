const express = require("express");
const app = express();

app.get("/", (req,res) => {
    res.send("Service is up and running...");
});

app.listen(8080, () => {
    console.log("Server Started: Listening on port 8080");
});