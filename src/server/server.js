var path = require('path')
const express = require("express");
const app = express();
const port = 3000;


// app.use(express.static('src/client'))
app.use(express.static('dist'))

app.get("/", function (req, res) {
	res.sendFile("dist/index.html", { root: __dirname + "/.." });
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
