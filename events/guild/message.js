module.exports = (Discord, client, message) => {
    const prefix = ';';
    if(!message.content.startsWith(prefix) || message.author.bot){
                return;
            }
    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
        
    const command = client.commands.get(cmd);

    if(command) command.execute(client, message, args, Discord);


    // if(message.content.startsWith(prefix)){
    //     if(command ==="urilga" || command === "invite"){
    //         client.commands.get('urilga').execute(message, args);
    //     }
    //     switch(command){
    //         case "ping":
    //             client.commands.get('ping').execute(message,args);
    //             break;
    //         case 'ustag':
    //             client.commands.get('ustag').execute(message, args);                    
    //             break;
    //         case 'kick':
    //             client.commands.get('kick').execute(message, args);
    //             break;
    //         case 'ban':
    //             client.commands.get('ban').execute(message, args);
    //             break;
    //         case "youtube":
    //             client.commands.get("embed").execute(message, args);
    //             break;
    //         case "play" || "p":
    //             client.commands.get('play').execute(message, args);
    //             break;
    //         case 'leave':
    //             client.commands.get('leave').execute(message, args);
    //             break;
    //         case "zail":
    //             client.commands.get('leave').execute(message, args);
    //             break;
    //         case "intro":
    //             client.commands.get("intro").execute(message, args);
    //             break;
    //     }
    //     console.log("user: "+message.author.tag+ " ID: " + message.author.id + " has used the ---> "+ command + " ||| command on the time of: "+ date_ob.getHours()+":"+date_ob.getMinutes()+" date: "+date_ob.getFullYear()+"/"+(date_ob.getMonth()+1)+"/"+date_ob.getDate());
            
    // }    
}
