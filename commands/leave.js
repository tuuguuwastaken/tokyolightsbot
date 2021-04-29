module.exports = {
    name:"leave",
    aliases: "zail",
    description:"leaves the chanenl",
    async execute(client, message, args){
        const vc = message.member.voice.channel;
        if(!vc){
            message.channel.send("chi neg channel ruu orson baih yostoi");
        }
        await vc.leave();
        await message.channel.send(" ZA zailla :smiling_face_with_tear:");
    }
}