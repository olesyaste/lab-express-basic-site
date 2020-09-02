
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
    console.log("navigating to the next page")
  });

app.get('/works', (req, res) => {
    res.sendFile(__dirname + '/views/works.html');
});

app.get('/photo-gallery', (req, res) => {
    res.sendFile(__dirname + '/views/photo-gallery.html');
  });

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
