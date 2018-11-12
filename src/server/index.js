import express from "express";
import path from "path";

const app = express();

const server = app.listen(process.env.PORT || 8000, () => {
	console.log(
		"Server connection is established at PORT: " + server.address().port
	);
});

app.get("/", (req, res, next) => {
	console.log("recieve request for " + req.originalUrl);
	res.sendFile(path.resolve("./dist/index.html"));
});

app.get("/bundle.js", (req, res, next) => {
	console.log("recieve request for " + req.originalUrl);
	res.sendFile(path.resolve("./dist/bundle.js"));
});

app.get("/footer.css", (req, res, next) => {
	console.log("recieve request for " + req.originalUrl);
	res.sendFile(path.resolve("./dist/footer.css"));
});
