'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);

const db = {};

let sequelize;
if (process.env.PG_URI) {
    sequelize = new Sequelize(process.env.PG_URI);
}

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Movies=require("./Movie.js")(sequelize,Sequelize);

//Todo: Danger command to be enabled in local environments
/* 
sequelize.sync({ force: true })
    .then(() => console.log("Tables created!"));*/

module.exports = db;