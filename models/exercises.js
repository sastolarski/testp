module.exports = function(sequelize, DataTypes) {
  var Exercise = sequelize.define("Exercise", {
    name: DataTypes.STRING,
    upperBody: DataTypes.BOOLEAN,
    lowerBody: DataTypes.BOOLEAN
  });
  return Exercise;
};
