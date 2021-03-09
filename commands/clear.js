module.exports = {
    name: 'clear',
    descriptiton: "Clear Messages!",
    async execute(message, args) {
        if(!args[0]) return message.reply("Enter The Amount You Want To Clear!");
        if(isNaN(args[0])) return message.reply("Please Enter A Real Number!");

        if(args[0] > 100) return message.reply("You Can't Delete More Than 1000 Messages");
        if(args[0] < 1) return message.reply("You Must Atleast Delete One Message!");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    
    
    
    
    }



}