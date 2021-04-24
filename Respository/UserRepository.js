const Sequelize = require('sequelize');
var sequelize = require("../connection");
var Users = require("../User");

async function findUser(telegram_id){
    res = await Users.findAll({
        where:{
            telegram_id:telegram_id
        }
    });
    return res;
}
exports.findUser = findUser;

let createUser = (telegram_id,username) => {
    Users.create({telegram_id: telegram_id, username: username})
}
exports.createUser = createUser;