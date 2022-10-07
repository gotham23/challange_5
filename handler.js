const { Mobils } = require('./models');

function handleRoot(req, res) {
  // res.send("Hello from express!");
  res.render('index', {
    name: req.query.name || 'Guest',
  });
}

function handleListMobils(req, res) {
  Mobils.findAll()
    .then((mobils) => {
      res.status(200).render('index', {
        mobils: mobils,
      });
    })
    .catch((err) => {
      res.status(400).json({
        status: 'FAIL',
        message: err.message,
      });
    });
}

function handleGetMobils(req, res) {
  const mobil = req.mobil;
  res.render('mobils/_id/index', {
    id: mobil.id,
    nama: mobil.nama,
    price: mobil.price,
    size: mobil.size,
    image: mobil.image
  });
}

module.exports = {
  handleRoot,
  handleGetMobils,
  handleListMobils,
};
