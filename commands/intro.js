const Discord = require('discord.js');

module.exports = {
    name: 'intro',
    cooldown:10,
    desciprtion: 'gives and introduction to the server',
    execute(client, message, args){
        message.channel.bulkDelete(1);
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#7122bf')
        .setTitle("Tokyo lights server BOT")
        .setDescription("Tokyo lights serveriin Discord bot")
        .addFields(
            {name:'Hello', value:'Discord bot iin buh commanduud ig harmaar bvl ***;help*** geree'},
            {name:"How you doing?", value:"Coded in nodejs"},
        )
        .setImage("https://i.imgur.com/1HNWisf.png")
        .setFooter("Buteej/ codelson hun Tuuguu#6913");
        message.channel.send(newEmbed);
    }
}