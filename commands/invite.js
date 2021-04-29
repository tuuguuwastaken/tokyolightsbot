const Discord = require('discord.js');

module.exports = {
    name:"invite",
    description:'sends invite link in an embed',
    execute(client, message, args){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#7122bf')
        .setTitle('Discord Server iin invite link')
        .addFields({name:'LINK ->> https://www.discord.gg/nkcazbWERh', value:"     [LINK BUTTON](https://www.discord.gg/nkcazbWERh)"})
        .setImage("https://i.imgur.com/ahbQUCG.png")
        .setFooter("link ajilkuu baival admin/owner luu DM bicherei");
        message.channel.send(newEmbed);
    }
}