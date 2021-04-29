module.exports = {
    name: 'ban',
    description: 'ban a bitch out of the server',
    execute(client, message, args){
        if(message.member.roles.cache.has("827845427956154439") || message.member.roles.cache.has("795915247642345493")){
            const member = message.mentions.users.first();
            if(member){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.ban();
                message.channel.send("tar bagii'g tsaashn haruulav");
            } else {
                message.channel.send("ter bagii'g bandaj chdsangui");
            }
        }
    }
}