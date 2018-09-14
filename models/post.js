module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
    //  
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      }
    });
  
    Post.associate = function(models) {
      // We're saying that a Post should belong to an Employee
      // A Post can't be created without an Employee due to the foreign key constraint
      Post.belongsTo(models.Employee, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Post;
  };
  