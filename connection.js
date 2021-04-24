const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('mysql://hamid:hamid123@185.221.237.103:3306/ldora')
const sequelize = new Sequelize('mysql://hamid:hamid123@127.0.0.1:3306/ldora')
// const sequelize = new Sequelize('ldora', 'hamid', 'hamid123', {
//     host: '185.221.237.103',
//     dialect: 'mysql'
//   });
try {
  sequelize.authenticate().then(() => {
    console.log('Connection established successfully.');
  }).catch(err => {
    console.error('Unable to connect to the database:', err);
  }).finally(() => {
    // sequelize.close();
  });
} 
catch (error) {
    console.error('Unable to connect to the database:', error);
}

module.exports = sequelize;

// var mysql = require("mysql");

// var con = mysql.createConnection({
//     host: "185.221.237.103",
//     user: "hamid",
//     password: "hamid123",
//     database: "ldora",
//    charset : "utf8mb4"
// });
// module.exports = con;
