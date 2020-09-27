var path = require('path')
const express = require("express");
const bodyParser = require("body-parser");
const fetch = require('node-fetch');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('dist'))

app.get("/", function (req, res) {
	res.sendFile("dist/index.html", { root: __dirname + "/.." });
});

app.get("/dog", (req, res)=> {
	res.send("Dog route")
})

const apiKey = "b87a772f94a0f75fb21f5ca6dd4d63ae";
const baseUrl = "https://api.meaningcloud.com/sentiment-2.1?key=";
const resType = "json";
const lang = "en"

//working fetch but taking time to get the result

app.post("/getAnalysis", (req, res)=> {
	let content = req.body.content
	console.log(content)
	let url = `${baseUrl}${apiKey}&of=${resType}&lang=${lang}&txt=${content}`
	fetch(url)
	.then(res => res.json())
    .then(json => res.send(json));

})



app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
