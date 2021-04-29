const Discord = require('discord.js');

module.exports = {
    name: 'youtube',
    aliases:"yt",
    desciprtion: 'sends embeds',
    execute(client, message, args){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#7122bf')
        .setTitle("Tokyo Light's iin buh youtuber/streamer uud")
        .setDescription("Tokyo lights gdg serverd bgaa buh youtuber streameruud")
        .addFields(
            {name:'Powerfsad',value:'[Click here](https://www.youtube.com/channel/UCVUfgj-kpKGID0_bEHIpy5w) <---- power'},
            {name:"IzTuugii", value:'[Click here](https://www.youtube.com/channel/UCg4vB9a9Cf-qC24IIns_qKA) <---- Tuugii'},
        )
        .setImage("https://i.imgur.com/ahbQUCG.png")
        .setFooter("subscribe bugd ndn sub dararai")
        .setFooter("uriiguu nemuulbeer bvl admin isguibol owner iig DM lerei");
        message.channel.send(newEmbed);
    }
}