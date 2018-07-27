module.exports = function(sequelize, DataTypes) {
  var UserData = sequelize.define("UserData", {
    userId: DataTypes.INTEGER,
    exerciseId: DataTypes.INTEGER,
    sets: DataTypes.INTEGER,
    reps: DataTypes.INTEGER,
    weightUsed: DataTypes.INTEGER
  });
  return UserData;
};
