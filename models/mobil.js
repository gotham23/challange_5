'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mobil extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  mobil.init({
    nama_mobil: DataTypes.STRING,
    tipe_mobil: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    approved: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'mobil',
  });
  return mobil;
};