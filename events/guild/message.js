let date_ob = new Date();
const cooldowns = new Map();
const Discord = require("discord.js");



module.exports = (Discord, client, message) => {
    require('dotenv').config();
    const prefix = process.env.PREFIX;
    if(!message.content.startsWith(prefix) || message.author.bot){
                return;
            }
    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
        
    const command = client.commands.get(cmd)||client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    if(!cooldowns.has(command.name)){
        cooldowns.set(command.name, new Discord.Collection());
    }


    const current_time = Date.now();
    const time_stamp = cooldowns.get(command.name);
    const cd_ammount = (command.cooldown) * 1000;

    if(time_stamp.has(message.author.id)){
        const exptime = time_stamp.get(message.author.id) + cd_ammount;

        if(current_time < exptime){
            const timeleft = (exptime - current_time)/1000;

            return message.reply(`please wait ${timeleft.toFixed(1)} more seconds before using ${command.name} again`);
        }
    }

    time_stamp.set(message.author.id, current_time);
    setTimeout(() => time_stamp.delete(message.author.id), cd_ammount);
    try{
        command.execute(client, message,args,Discord);
    } catch(err){
        message.channel.send("something went wrong while trying to run msg tuugii#6913 and tell his all to fix it");
        console.log(err); 
    }
    console.log("user: "+message.author.tag+ " ID: " + message.author.id + " has used the ---> **"+ cmd + "** ||| command on the time of: "+ date_ob.getHours()+":"+date_ob.getMinutes()+" date: "+date_ob.getFullYear()+"/"+(date_ob.getMonth()+1)+"/"+date_ob.getDate());
}
