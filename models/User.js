const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt");

class User extends Model {};

User.init({
    username: {
        type: DataTypes.STRING,
        unique:true,
        allowNull:false,
        validate:{
            isAlphanumeric:true,
        }
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            len:[8],
        }
    }
},{
    hooks:{
    beforeCreate(newUser){
    newUser.username = newUser.username.toLowerCase();
    newUser.password = bcrypt.hashSync(newUser.password,5);
    return newUser;
        }
    },
    sequelize,
});

module.exports = User;