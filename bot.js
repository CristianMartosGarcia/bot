const { Telegraf } = require("telegraf");

const bot = new Telegraf("6648409001:AAGhUd6eNeSp8iTI7NOB5J9glKSHrqaT2Bk");

bot.start((ctx) => {
    ctx.reply('Bienvenido al bot de MOM');
})
bot.launch();

bot.hears("Hola", ctx => {
    
        ctx.reply("Hola " + ctx.from.first_name + ctx.from.last_name)
        ctx.reply("Como estas?")
    
/*     if(ctx.first_name !== "Pau"){
        ctx.reply("Hola " + ctx.from.first_name+ " Bienvenido");

    1 heroku git:remote -a momvalenciabot
    2 git add .
    3 git commit -am "make it better"
    4 git push heroku master  
    5 heroku ps:scale worker=1


    } */
    
})

// Maneja el comando /menu
bot.onText(/\/menu/, (msg) => {
    const chatId = msg.chat.id;
    const message = "Aquí tienes mi menú:\n1. Opción 1\n2. Opción 2\n3. Opción 3";
    bot.sendMessage(chatId, message);
});

// Maneja las respuestas del usuario
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const message = msg.text.toString().toLowerCase();

    // Ejemplo de manejo de respuestas
    if (message === 'opción 1') {
        bot.sendMessage(chatId, 'Has seleccionado la Opción 1.');
    } else if (message === 'opción 2') {
        bot.sendMessage(chatId, 'Has seleccionado la Opción 2.');
    } else if (message === 'opción 3') {
        bot.sendMessage(chatId, 'Has seleccionado la Opción 3.');
    } else {
        bot.sendMessage(chatId, 'Lo siento, no entiendo esa opción.');
    }
});
