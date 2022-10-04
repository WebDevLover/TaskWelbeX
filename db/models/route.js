'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Route extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Route.init({
    date: DataTypes.STRING,
    name: DataTypes.STRING,
    count: DataTypes.STRING,
    distance: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Route',
  });
  return Route;
};