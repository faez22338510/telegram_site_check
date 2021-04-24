const Sequelize = require('sequelize');
var sequelize = require("./connection");
let Users = require("./User");

let Product_list = sequelize.define('product_list', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    initDate : Sequelize.DATE,
    telegram_id : Sequelize.INTEGER,
    user_id : {
        type: Sequelize.INTEGER,
        references: {
            // This is a reference to another model
            model: Users,
            // This is the column name of the referenced model
            key: 'id'
          }
    },
    product_link :Sequelize.STRING,    
    product_id : Sequelize.STRING                    
});

module.exports = Product_list;

// Product_list.sync().then(() => {
//     console.log('Product_list table created');
// }).finally(() => {
//     sequelize.close();
// })