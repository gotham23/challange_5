// const express = require('express');
// const app = express();
// const handler = require('./handler');
// const middleware = require('./middleware');

// const PORT = 8000;

// app.use(express.json());

// // app.get('/', handler.handleRoot);
// // app.post('/books', handler.handleCreateBook);
// // app.get('/books', handler.handleListBooks);
// // app.get('/books/:id', middleware.setBook, handler.handleGetBook);
// // app.delete('/books/:id', middleware.setBook, handler.handleDeleteBook);
// // app.put('/books/:id', middleware.setBook, handler.handleupdateBook);
// // bakal manggil di url /books?author=alma
// // app.get('/books', (req, res)=>{
// //     let author = req.query.author;
// //     res.status(200).send({
// //         message : "kamu sedang mencari buku yang ditulis oleh "+author
// //     })
// // });

// app.listen(PORT, () => {
//   console.log('server berjalan!');
// });
const express = require('express');
const app = express();
// const { mobil } = require('./models');

// Ambil port dari environment variable
// Dengan nilai default 8000
const PORT = process.env.PORT || 8000;

// Bilang ke express kalo kita mau
// pake EJS sebagai view engine
app.set('view engine', 'ejs');

// GET /?name=Fikri
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`Server nyala di http://localhost:${PORT}`);
});
