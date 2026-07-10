
const http = require("http");
const fs = require("fs");

const app = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("home.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else if (req.url === "/stylesheet.css") {
    fs.readFile("stylesheet.css", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/css" });
      res.end(data);
    });
  } else if (req.url === "/about") {
    fs.readFile("About.html",(err,data)=>{
      res.writeHead(200,{"Content-Type":"text/html"})
      res.end(data);
    })
   
  }
   else if (req.url === "/contact") {
    fs.readFile("contact.html",(err,data)=>{
       res.writeHead(200,{"Content-Type":"text/html"})
       res.end(data)
    })
  }
  else if (req.url === "/laundry2.webp") {
    fs.readFile("./laundry2.webp", (err, data) => {
      res.writeHead(200, { "Content-Type": "image/webp" });
      res.end(data);
    });
  }
  
  else {
    res.writeHead(404);
    res.end("Page Not Found");
  }
});

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
