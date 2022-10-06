const { Books } = require('./models');

function setBook(req, res, next) {
  Books.findOne({
    where: { id: req.params.id },
  }).then((book) => {
    if (!book) {
      res.status(404).json({
        status: 'FAIL',
        error: 'Book not found!',
      });
      return;
    }

    req.book = book;
    next();
  });
}

module.exports = {
  setBook,
};
