const Sequelize = require('sequelize');
var sequelize = require("./connection");

let User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    telegram_id : Sequelize.INTEGER,
    username :Sequelize.STRING,
    initDate : Sequelize.DATE                        
});

module.exports = User;

// User.sync().then(() => {
//     console.log('User table created');
// }).finally(() => {
//     sequelize.close();
// })