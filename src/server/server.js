const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const cors = require("cors");
const app = express();
const port = 3000;
const dotenv = require('dotenv');
dotenv.config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(express.static("dist"));

app.get("/", function (req, res) {
	res.sendFile("dist/index.html", {
		root: __dirname + "/.."
	});
});

const apiKey = process.env.API_KEY;
const baseUrl = "https://api.meaningcloud.com/sentiment-2.1?key=";
const resType = "json";
const lang = "en";


app.post("/api", (req, res) => {
	let url;
	let content = req.body.text;
	let inputUrl = req.body.url;
	// if receiving texts(article) fetch data from api using text input, else fetch data using url
	if (content && !inputUrl) {
		url = `${baseUrl}${apiKey}&of=${resType}&lang=${lang}&txt=${content}&url=${inputUrl}`;
	} else if (!content && inputUrl) {
		url = `${baseUrl}${apiKey}&of=${resType}&lang=${lang}&url=${inputUrl}`;
	}
	console.log(url);
	const result = fetch(url)
		.then((response) => response.json())
		.then((datas) => {
			res.send(datas);
		});
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});