const TelegramBot = require('node-telegram-bot-api');
const token = '1709159726:AAGhzCR19h49H8XrqvFWHMULIX-zyScwygo';
const bot = new TelegramBot(token,{polling : true});

exports.bot = bot;


exports.adminsId = [
    // 39209676
];