let date_ob = new Date();

const CD = new Map();



module.exports = (Discord, client, message) => {
    require('dotenv').config();
    const prefix = process.env.PREFIX;
    if(!message.content.startsWith(prefix) || message.author.bot){
                return;
            }
    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
        
    const command = client.commands.get(cmd)|| client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    try{
        command.execute(client, message,args,Discord);
    } catch(err){
        message.channel.send("something went wrong while rying to run msg tuugii#6913 adn tell his all to fix it");
        console.log(err); 
    }
    console.log("user: "+message.author.tag+ " ID: " + message.author.id + " has used the ---> **"+ cmd + "** ||| command on the time of: "+ date_ob.getHours()+":"+date_ob.getMinutes()+" date: "+date_ob.getFullYear()+"/"+(date_ob.getMonth()+1)+"/"+date_ob.getDate());
}
