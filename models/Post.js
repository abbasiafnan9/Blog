const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init({
    name: {
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull:false,
    }
},{
    sequelize
});

module.exports=Post