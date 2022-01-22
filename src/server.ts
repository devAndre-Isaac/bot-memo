import * as dotenv from "dotenv";
const { Client, Intents } = require('discord.js');

dotenv.config();

const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

bot.login(process.env.DISCORD_TOKEN)
