const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const School = sequelize.define('School', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: 'Please enter school name' },
                notEmpty: { msg: 'School name cannot be empty' },
            },
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: 'Please enter school address' },
                notEmpty: { msg: 'School address cannot be empty' }
            },
        },
        latitude: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notNull: { msg: 'Latitude is required' },
                isFloat: { msg: 'Latitude must be a valid number' },
                isValidType(value) {
                    if(typeof value !== 'number')
                        throw new Error('Latitude must be a number, not a string');
                },
                min: -90,
                max: 90,
            },
        },
        longitude: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notNull: { msg: 'Longitude is required' },
                isFloat: { msg: 'Longitude must be a valid number' },
                isValidType(value) {
                    if(typeof value !== 'number')
                        throw new Error('Longitude must be a number, not a string');
                },
                min: -180,
                max: 180,
            },
        },
    },
    {
        tableName: 'schools',
        timestamps: true,
    }
);

module.exports = School;