const { Mobils } = require('./models');

Mobils.create({
  nama: 'sedan',
  price: 27000,
  size: 'small',
  image: '/images/image_2.png'
}).then((mobils) => {
  console.log(mobils);
});
