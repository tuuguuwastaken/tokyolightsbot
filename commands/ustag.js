module.exports = {
    name: 'ustag',
    description: 'bulk deletes message',
    async execute(client, message, args){
        if(message.member.roles.cache.has("827845427956154439") || message.member.roles.cache.has("795915247642345493")){
            if(!args[0]){
                return message.reply("Tooo urd n taviach malaa >:(");
            }
            if(isNaN(args[0])) return essage.reply("Tooo urd n taviach malaa >:(");
            if(args[0] > 20){
                if(args[1] === "happyjohny1"){
                    message.channel.bulkDelete(args[0]);
                }
            }
            if(args[0] <= 0) return message.reply("ene gichii nmg crashlahgaad bn aliishuu");
            await message.channel.messages.fetch({limit: args}).then(messages =>{
                message.channel.bulkDelete(messages);
                console.log("deleted "+ args[0]+ " messages");
            });
        } else {
            message.channel.bulkDelete(1);
            message.reply("chamd heregtei role alga");
        }
    }
}