'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Slider extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Slider.init({
    slider1: DataTypes.STRING,
    slider2: DataTypes.STRING,
    slider3: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Slider',
  });
  return Slider;
};