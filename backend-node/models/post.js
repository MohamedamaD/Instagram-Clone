"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Post.init(
    {
      caption: DataTypes.TEXT,
      location: DataTypes.STRING,
      tags: DataTypes.ARRAY(DataTypes.STRING),
      userId: DataTypes.INTEGER,
      media: DataTypes.ARRAY(DataTypes.JSON),
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
