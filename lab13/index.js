import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if ((url === "/" || url === "/home") && method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Welcome to my website");
    res.end();
  } else if (url === "/image" && method === "GET") {
    const src = fs.createReadStream("./images/anonymous.jpg");
    res.writeHead(200, { "Content-Type": "image/jpeg" });
    src.pipe(res);
  } else if (url === "/pdf" && method === "GET") {
    const stream = fs.createReadStream("./files/input.pdf");
    res.writeHead(200, { "Content-Type": "application/pdf" });
    stream.pipe(res);
  } else if (url === "/about" && method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("About");
    res.end();
  } else {
    res.writeHead(404);
    res.end();
  }
});

const port = "3000";
server.listen(port, () => {
  console.log(`Listening on port ${port}`);
  console.log(`http://localhost:${port}`);
});
