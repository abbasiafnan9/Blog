const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init({
    name: {
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
    },
   image: {
        type: DataTypes.TEXT,
        unique:true,
    }
},{
    sequelize
});

module.exports=Post