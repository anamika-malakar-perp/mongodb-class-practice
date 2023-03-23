const express = require("express");
const bodyParser = require("body-parser");
const studentRouter = require("./routes/student");

const app = express();

app.use(bodyParser.json());
app.use(studentRouter);

app.listen(6000, () => {
    console.log("server is running at port 6000")
})