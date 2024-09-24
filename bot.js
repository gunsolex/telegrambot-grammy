const { Bot } = require("grammy");

// Create a bot object
const bot = new Bot("7970414494:AAEs9eCOgofM77Q7-OiK5BfkMqMFrIqytYU"); // <-- place your bot token in this string

// Register listeners to handle messages
bot.on("message:text", (ctx) => {
    if(ctx.message.text.includes("hi")) {
        ctx.reply("HOHOHO");
    } else {
        ctx.reply("WHAT?");
    }
});

// Start the bot (using long polling)
bot.start();