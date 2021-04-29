
let date_ob = new Date();
const Discord = require('discord.js');
const token = "ODM2MTIzODMxOTE1NTExODM5.YIZa_w.uwLWwMbiG-1FX-u4Ij-28WRXa-4";
const client = new Discord.Client();
const fs = require('fs');


client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['commandhandler','eventhandler'].forEach(handler =>{
    require(`./handler/${handler}`)(client, Discord);
});

client.login(token);