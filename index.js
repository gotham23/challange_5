const express = require('express');
const app = express();
const handler = require('./handler');
const middleware = require('./middleware');
const path = require('path');

const PORT = 8000;

const PUBLIC_DIRECTORY = path.join(__dirname, 'public');

// Set format request
app.use(express.urlencoded({ extended: true }));

// Set PUBLIC_DIRECTORY sebagai static files di express
app.use(express.static(PUBLIC_DIRECTORY));

// Bilang ke express kalo kita mau pake EJS sebagai view engine
app.set('view engine', 'ejs');

app.use(express.json());

// GET /?name=Fikri

//ke halaman list buku dan api get buku
app.get('/', handler.handleListMobils);

app.listen(PORT, () => {
  console.log('server berjalan!');
});
