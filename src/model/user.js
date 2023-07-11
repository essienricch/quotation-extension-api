require('dotenv').config();
const { DataTypes} = require('sequelize');
const sequelize_db = require('../config/dbconfig')

const User = sequelize_db.define('user', {
    
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate:{
            isEmail: true,
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },

    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  
      role: {
        type: DataTypes.ENUM('admin','vendor'),
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
)

module.exports = User;