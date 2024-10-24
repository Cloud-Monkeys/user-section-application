const { DataTypes } = require('sequelize');
const db = require('../config/db');

const UserSection = db.define('UserSection', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id'
    },
    sectionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'section_id'
    }
}, {
    tableName: 'user_sections',
    timestamps: false,
    indexes: [
        {
            unique: true,
            fields: ['user_id', 'section_id']
        }
    ]
});

module.exports = UserSection;