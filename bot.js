const { Telegraf, Markup } = require("telegraf");

const bot = new Telegraf("6648409001:AAGhUd6eNeSp8iTI7NOB5J9glKSHrqaT2Bk");

bot.start((ctx) => {
    ctx.reply('Bienvenido al bot de MOM');
});

bot.hears("Hola", ctx => {
    ctx.reply("Como estas " + ctx.from.first_name + " " + ctx.from.last_name + "?", Markup.inlineKeyboard([
        Markup.button.callback('<div style="width: 100%; height: 40px; display: flex; justify-content: center; align-items: center;">😀 Bien</div>', 'bien'),
        Markup.button.callback('<div style="width: 100%; height: 40px; display: flex; justify-content: center; align-items: center;">😐 Regular</div>', 'regular'),
        Markup.button.callback('<div style="width: 100%; height: 40px; display: flex; justify-content: center; align-items: center;">😞 Mal</div>', 'mal')
    ]));
});

bot.action('bien', (ctx) => {
    ctx.reply('Me alegro de que estés bien!');
});

bot.action('regular', (ctx) => {
    ctx.reply('Espero que mejores pronto.');
});

bot.action('mal', (ctx) => {
    ctx.reply('Ánimo, todo mejorará.');
});

bot.launch();

/*     if(ctx.first_name !== "Pau"){
        ctx.reply("Hola " + ctx.from.first_name+ " Bienvenido");

    1 heroku git:remote -a momvalenciabot
    2 git add .
    3 git commit -am "make it better"
    4 git push heroku master  
    5 heroku ps:scale worker=1


    } */
    

