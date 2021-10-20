const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => res.json("hello huy"))

app.listen(port, () => console.log("hello, i'm listening in port: ", port))