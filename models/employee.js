module.exports = function(sequelize, DataTypes) {
  var Employee = sequelize.define("Employee", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING
  });

  Employee.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Employee.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  return Employee;
};
