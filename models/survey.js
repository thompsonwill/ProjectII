module.exports = function(sequelize, DataTypes) {
    var survey = sequelize.define("Survey", {
      group1: DataTypes.STRING,
      group2: DataTypes.STRING,
      group3: DataTypes.STRING
    });

    return survey;
  };

//  don't need to return since post to database only?