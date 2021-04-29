require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');


client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['commandhandler','eventhandler'].forEach(handler =>{
    require(`./handler/${handler}`)(client, Discord);
});

client.login(process.env.DISCORD_TOKEN);