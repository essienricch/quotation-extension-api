const sequelize_db = require("../config/dbconfig.js");
const { DataTypes } = require("sequelize");
const User = require("./user");

const Vendor = sequelize_db.define('vendor', {
    company_name:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    company_address:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    specialization: {
        type: DataTypes.STRING,
        allowNull: false,
    }
} ,
 {
    timestamps: true,
  }
);

Vendor.hasOne(User, {foreignKey: 'vendorId', onDelete: 'CASCADE'})
User.belongsTo(Vendor, {foreignKey: 'vendorId'})

module.exports = Vendor