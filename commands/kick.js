module.exports = {
    name: 'kick',
    description: "This Command Kicks A Member!",
    execute(message, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.member(member);
            memberTarget.kick();
            message.channel.send("User Has Been Kicked");
        }else{
            message.channel.send('You Couldnt Kick That Member');
        }
 
    }
}