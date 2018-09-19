module.exports = function(sequelize, DataTypes) {
  var Suggestion = sequelize.define("Suggestion", {
    employee: DataTypes.STRING,
    body: DataTypes.STRING
    // created_at: DataTypes.DATE
  });
  return Suggestion;
};
