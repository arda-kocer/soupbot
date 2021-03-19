const Discord = require('discord.js');
module.exports = {
  name: 'sps',
	description: 'Ermittelt den Spast der Stunde',
	execute(message, args) {
        console.log("sps command has been initiated.");
        if (message.guild.available) {
            let users = Array.from(message.guild.members.cache);
            let activeUsers= [];
            for (let i = 0; i < users.length; i++) {
                if (users[i].user.presence.status!="offline") {
                    activeUsers.push(users[i]);
                }
            }
            let ran = Math.round(Math.random()*(activeUsers.length-1));
            console.log("Active Users length: "+activeUsers.length);
            console.log(ran);
            let sp = activeUsers[ran];

            message.channel.send(sp.displayName+" ist der Spast der Stunde!");
        }
	},
};