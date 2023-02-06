//require = include
const express = require("express");
//initialize library
const app = express();
const http = require("http");

const server = http.createServer(app);

const LISTEN_PORT = 8080;
const STATIC_PATH = __dirname + "/public/";

//setting our routes
// google.com + /route

app.get("/", (req, res) => {
	res.sendFile("index.html", { root: STATIC_PATH });
});

server.listen(LISTEN_PORT);

//middleware
// code being ran after the
app.use(express.static(STATIC_PATH));

console.log("listening on port 8080");
