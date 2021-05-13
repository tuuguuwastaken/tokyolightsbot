const Discord = require("discord.js")

module.exports ={
    name:'crybaby',
    aliases: 'cbaby',
    aliases: 'cby',
    description: '',
    execute(client ,message, args){
        const newEmbed = new Discord.MessageEmbed()
        .setTitle("you crybaby")
        .setDescription("this is a test embed that i probably cant even test it out")
        .addFields(
            {name:"Tuugii", value:"the biggest crybaby ever to be a crybaby"},
            {name:"Powerfsad", value:"the second biggest crybaby ever to live"},
            {name:"Nowel", value:"big ol' bitch of a cryabbby"}
        )
        .setFooter("if any error is showing please DM tuuguu#6913");
        message.channel.send(newEmbed);

    }
}