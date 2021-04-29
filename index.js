#!/usr/bin/env node
let badwords = [
    'nigga'
]
const { spawnSync } = require("child_process");
const { resolve } = require("path");
let date_ob = new Date();
const Discord = require('discord.js');
const token = "ODM2MTIzODMxOTE1NTExODM5.YIZa_w.U6oE-T9MZqtG8Df8M3JECb_24uU";
const client = new Discord.Client();
const prefix = ';';
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
client.once('ready', () => {
    console.log('This bitch ready! Tokyo light bot - made by @iztuuguu Tuuguu#6913');
});
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot){
        return;
    }
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(message.content.startsWith(prefix)){
        if(command ==="urilga" || command === "invite"){
            client.commands.get('urilga').execute(message, args);
        }
        switch(command){
            case "ping":
                client.commands.get('ping').execute(message,args);
                break;
            case 'ustag':
                client.commands.get('ustag').execute(message, args);
                break;
            case 'kick':
                client.commands.get('kick').execute(message, args);
                break;
            case 'ban':
                client.commands.get('ban').execute(message, args);
                break;
            case "youtube":
                client.commands.get("embed").execute(message, args);
                break;
            case "play" || "p":
                client.commands.get('play').execute(message, args);
                break;
            case 'leave':
                client.commands.get('leave').execute(message, args);
                break;
            case "zail":
                client.commands.get('leave').execute(message, args);
                break;
            case "intro":
                client.commands.get("intro").execute(message, args);
                break;
        }
        console.log("user: "+message.author.tag+ " ID: " + message.author.id + " has used the ---> "+ command + " ||| command on the time of: "+ date_ob.getHours()+":"+date_ob.getMinutes()+" date: "+date_ob.getFullYear()+"/"+(date_ob.getMonth()+1)+"/"+date_ob.getDate());
    
    }


});
client.login(token);