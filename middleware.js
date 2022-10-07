const { Mobils } = require('./models');

function setBook(req, res, next) {
  Mobils.findOne({
    where: { id: req.params.id },
  }).then((book) => {
    if (!book) {
      res.status(404).json({
        status: 'FAIL',
        error: 'Book not found!',
      });
      return;
    }

    req.mobil = mobil;
    next();
  });
}

module.exports = {
  setMobil,
};
