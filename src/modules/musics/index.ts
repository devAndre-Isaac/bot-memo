const Discord = require("discord.js");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");


import config from '../../../src/config/config.json'

const { Client, Intents, play } = require('discord.js');


dotenv.config();

const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
bot.commands = new Discord.Collection();
bot.queues = new Map();

const commandFiles = fs
  .readdirSync(path.join(__dirname, "/commands"))
  .filter((filename: any) => filename.endsWith(".ts"));

for (var filename of commandFiles) {
  const command = require(`./commands/${filename}`);
  bot.commands.set(command.name, command);
}

bot.login(process.env.DISCORD_TOKEN);

bot.on("ready", function () {
  console.log(`Estou conectado como ${bot.user.username}`);
});

bot.on("messageCreate", (msg: any) => {
  if (!msg.content.startsWith(config.prefix) || msg.author.bot) return;

  const args = msg.content.slice(config.prefix.length).split(" ");
  const command = args.shift();

  try {
    bot.commands.get(command).execute(bot, msg, args);
  } catch (e) {
    console.error(e);
    return msg.reply("Ops! Eu ainda não conheço esse comando!");
  }
});
