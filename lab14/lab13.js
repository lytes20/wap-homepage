const express = require("express");
const path = require("path");
const app = express();

app.get(["/", "/home"], (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Welcome to my website");
  res.end();
});
app.get("/image", (req, res) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, "public", "images", "anonymous.jpg"));
});
app.get("/pdf", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "public/files", "input.pdf"));
});
app.get("/about", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("About");
  res.end();
});
app.use((req, res) => {
  res.writeHead(404);
  res.end();
});

const port = "3030";
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  console.log(`http://localhost:${port}`);
});
