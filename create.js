const { mobil } = require('./models');

mobil
  .create({
    nama_mobil: 'avanza',
    tipe_mobil: 'sedan',
    harga: 27000,
    approved: true,
  })
  .then((mobil) => {
    console.log(mobil);
  });
