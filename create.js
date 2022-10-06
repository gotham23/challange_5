const { Mobils } = require('./models');

Mobils.create({
  nama: 'sedan',
  price: 27000,
  approved: true,
}).then((mobils) => {
  console.log(mobils);
});
