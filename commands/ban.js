module.exports = {
    name: 'ban',
    description: "This Command Bans A Member!",
    execute(message, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.member(member);
            memberTarget.ban();
            message.channel.send("User Has Been Banned");
        }else{
            message.channel.send('You Couldnt Ban That Member');
        }
 
    }
}