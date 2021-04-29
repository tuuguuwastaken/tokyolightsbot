const ytdl =  require("ytdl-core");
const ytsearch = require('yt-search');

module.exports = {
    name: 'play',
    aliases: 'p',
    description: 'youtube video audio player',
    async execute(client, message, args){
        const vc = message.member.voice.channel;
        if(!vc){
            message.channel.send("chi neg channel ruu orooh yostoi");
        }
        const perm = vc.permissionsFor(message.client.user);
        if(!perm.has('CONNECT')) return message.channel.send("Ndaa join hiih zuvshuurul alga");
        if(!perm.has('SPEAK')) return message.channel.send("Ndaa join hiih zuvshuurul alga");
        if(!args.length) return message.channel.send("yamr bichleg haihiig oruulnu");

        const validURL = (str) =>{
            var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
            if(!regex.test(str)){
                return false;
            } else {
                return true;
            }
        }

        const videoFinder = async (query) => {
            const vidResult = await ytsearch(query);

            return (vidResult.videos.length > 1) ? vidResult.videos[0] : null;
        }
        const vid = await videoFinder(args.join(' '));


        if(validURL(args[0])){
            const conn = await vc.join();
            const stream = ytdl(args[0], {filter: 'audioonly'});
            conn.play(stream, {seek: 0, volume: 1})
            .on("finish", () => {
                vc.leave();
            });
            await message.reply(`Odoo "***${vid.title}***" iig togolj bn`);
            return;
        }

        if(vid){
            const conn = await vc.join();
            const stream = ytdl(vid.url, {filter: 'audioonly'});
            conn.play(stream, {seek: 0, volume: 1})
            .on("finish", () => {
                vc.leave();
            });
            await message.reply(`Odoo "***${vid.title}***" iig togolj bn`);
        } else {
            message.channel.send('Duug/bichleg olsongui');
        }
    }
}