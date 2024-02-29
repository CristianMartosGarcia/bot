const { Telegraf, Markup } = require("telegraf");

const bot = new Telegraf("6648409001:AAGhUd6eNeSp8iTI7NOB5J9glKSHrqaT2Bk");

bot.start((ctx) => {
    ctx.reply('Bienvenido al bot de MOM');
});

bot.hears("Hola", ctx => {
    ctx.reply("Como estas " + ctx.from.first_name + " " + ctx.from.last_name + "?", Markup.inlineKeyboard([
        Markup.button.callback('😀 Bien', 'bien'),
        Markup.button.callback('😐 Regular', 'regular'),
        Markup.button.callback('😐 Mal', 'mal')
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
    

