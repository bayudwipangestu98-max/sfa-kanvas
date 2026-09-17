const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Rute untuk file index.html
  if (req.url === '/' || req.url === '/index.html') {
    const filePath = path.join(__dirname, 'index.html');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
    return;
  }

  // Rute untuk manifest.json
  if (req.url === '/manifest.json') {
    const manifestPath = path.join(__dirname, 'manifest.json');
    fs.readFile(manifestPath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end();
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(data);
      }
    });
    return;
  }

  // Rute untuk logo ikon aplikasi (Mobil Box SFA)
  if (req.url === '/logo.png') {
    const logoPath = path.join(__dirname, 'logo.png');
    fs.readFile(logoPath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end();
      } else {
        res.writeHead(200, { 'Content-Type': 'image/png' });
        res.end(data);
      }
    });
    return;
  }

  // Rute default jika file lain tidak ditemukan
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not Found');
});

const PORT = 5000;
server.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server SFA aktif di http://localhost:${PORT}`);
});