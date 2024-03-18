const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const Group = sequelize.define('Group', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type:Sequelize.STRING(50),
      unique:true,
      notEmpty:true,
    },
    membersNo:{
        type:Sequelize.INTEGER,
        allowNull:false       
    },
    createdAt:{
        type:Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },    
    },
    {
        timestamps: false
    });

module.exports = Group;
