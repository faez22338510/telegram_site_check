process.env["NTBA_FIX_319"] = 1;
const bot = require("./bot_config").bot;
const adminsId = require("./bot_config").adminsId;
const userRepository = require("./Repository/UserRepository");

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'Received your message');
});

bot.onText(/\/start/,(msg)=>{
    
    if(adminsId.includes(msg.chat.id)){
        bot.sendMessage(msg.chat.id,"خوش آمدی ");
    }
    else{
        bot.sendMessage(msg.chat.id, "سلام")
        .then(function() {
            res = userRepository.findUser(msg.chat.id)
            .then((value) =>{
                if(res.length == 0){
                    userRepository.createUser(msg.chat.id,msg.chat.username)
                }
            });
            
        }).catch(console.error);
    }
    
    //bot.sendMessage(msg.chat.id,messages.ruleMessage);
});
