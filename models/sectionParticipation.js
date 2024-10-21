const { DataTypes } = require('sequelize');
const db = require('../config/db');

const SectionParticipation = db.define('SectionParticipation', {
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
    tableName: 'section_participations',
    timestamps: false,
    indexes: [
        {
            unique: true,
            fields: ['user_id', 'section_id']
        }
    ]
});

module.exports = SectionParticipation;