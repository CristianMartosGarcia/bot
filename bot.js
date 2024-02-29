const { Telegraf } = require("telegraf");

const bot = new Telegraf("6648409001:AAGhUd6eNeSp8iTI7NOB5J9glKSHrqaT2Bk");

bot.start((ctx) => {
    ctx.reply('Bienvenido al bot de MOM');
})
bot.launch();

bot.hears("Hola", ctx => {
    if(ctx.first_name == "Pau"){
        ctx.reply("No llores " + ctx.from.first_name + ctx.from.last_name)
    }
    if(ctx.first_name !== "Pau"){
        ctx.reply("Hola " + ctx.from.first_name+ " Bienvenido");
    }
    
})

