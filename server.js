const express = require("express");
const path = require("path");


// const cheerio = require("cheerio");

// const $ = cheerio.load("/frontend/index.html")


const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));


app.get("/*", (req, res)=> {
	res.sendFile(path.resolve("frontend", "index.html"));

});

app.listen(process.env.PORT || 8080, () => console.log("server running..."));

